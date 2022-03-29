import { Router } from 'express';

import controller from '../controller/fibonacci';
import {
  constructErrorResponse,
  constructSuccessResponse,
  constructCustomErrorByType
} from '../utils';
import {
  MAP_SUCCESS_TYPES,
  MAP_ERROR_TYPES
} from '../constants';

const router = Router();

export const defaultPath = (
  req: object,
  res: {
    status: Function
  }
) => {
  let response;
  try {
    constructCustomErrorByType({
      _type: MAP_ERROR_TYPES.RESOURCE_NOT_FOUND
    });
  } catch (error) {
    response = constructErrorResponse(error);
  }
  return res.status(response.statusCode).send(response);
};

export const pathParameterPath = (
  req: {
    params: {
      nTerm: string
    }
  },
  res: {
    status: Function
  }
) => {
  let response;
  try {
    const result: number = controller(req.params);

    response = constructSuccessResponse({
      _data: result,
      _type: MAP_SUCCESS_TYPES.FIBONACCI_CALCULATED
    });
  } catch (error) {
    response = constructErrorResponse(error);
  }
  return res.status(response.statusCode).send(response);
};

router.get('/', defaultPath);

router.get('/:nTerm', pathParameterPath);

export default router;
