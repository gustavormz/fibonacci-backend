import {
  constructCustomErrorByType
} from '../utils';
import {
  MAP_ERROR_TYPES
} from '../constants';

const calculateNTermFibonacci = ({
  _nTerm
}: {
  _nTerm: number
}) : number => {
  try {
    if (_nTerm < 2) {
      return _nTerm
    }
    let prev = 0;
    let prevAuxiliar = 1;
    let result = 1;

    for(let iteration = 2; iteration <= _nTerm; iteration++){
      prevAuxiliar = prev;
      prev = result;
      result = prev + prevAuxiliar;

      if (result > Number.MAX_SAFE_INTEGER) {
        constructCustomErrorByType({
          _type: MAP_ERROR_TYPES.RESULT_OVERFLOW
        });
      }
    }
    return result;
  } catch (error) {
    throw error;
  }
};

export default {
  calculateNTermFibonacci
};
