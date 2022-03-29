import service from '../service/fibonacci';
import {
  constructCustomErrorByType
} from '../utils';
import {
  MAP_ERROR_TYPES
} from '../constants';

const controller = ({
  nTerm: _nTerm
}: {
  nTerm: string
}) => {
  try {
    const nTerm = parseFloat(_nTerm);
    if (!Number.isInteger(nTerm)) {
      constructCustomErrorByType({
        _type: MAP_ERROR_TYPES.N_TERM_NOT_INTEGER
      });
    }
    if (nTerm < 0) {
      constructCustomErrorByType({
        _type: MAP_ERROR_TYPES.N_TERM_NEGATIVE
      });
    }

    return service.calculateNTermFibonacci({ _nTerm: nTerm });
  } catch (error) {
    throw error;
  }
};

export default controller;
