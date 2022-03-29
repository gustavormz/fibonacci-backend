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

router.get('/', (req, res) => {
  let response;
  try {
    constructCustomErrorByType({
      _type: MAP_ERROR_TYPES.RESOURCE_NOT_FOUND
    });
  } catch (error) {
    response = constructErrorResponse(error);
  }
  return res.status(response.statusCode).send(response);
});

router.get('/:nTerm', (req, res) => {
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
});

export default router;
