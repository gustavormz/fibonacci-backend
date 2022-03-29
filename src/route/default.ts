import { Router } from 'express';

import {
  constructCustomErrorByType,
  constructErrorResponse
} from '../utils';
import {
  MAP_ERROR_TYPES
} from '../constants';

const router = Router();

router.get('*', (req, res) => {
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

export default router;
