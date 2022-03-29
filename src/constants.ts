export type TResponse = {
  message: string;
  errorCode?: number;
  code?: number;
  dataKey?: string;
  type?: string;
  errorType?: string;
};

type T_MAP_ERROR_BY_TYPE = {
  [key: string]: TResponse;
};

type T_MAP_SUCCESS_BY_TYPE = {
  [key: string]: TResponse;
};

const MAP_SUCCESS_TYPES = {
  FIBONACCI_CALCULATED: 'FIBONACCI_CALCULATED',
  DEFAULT: 'DEFAULT'
};

const MAP_ERROR_TYPES = {
  DEFAULT: 'DEFAULT',
  N_TERM_NOT_INTEGER: 'N_TERM_NOT_INTEGER',
  N_TERM_NEGATIVE: 'N_TERM_NEGATIVE',
  RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND',
  RESULT_OVERFLOW: 'RESULT_OVERFLOW'
};

const MAP_ERROR_BY_TYPE: T_MAP_ERROR_BY_TYPE = {
  [MAP_ERROR_TYPES.DEFAULT]: {
    errorCode: 500,
    message: 'Internal Server Error',
    errorType: MAP_ERROR_TYPES.DEFAULT
  },
  [MAP_ERROR_TYPES.N_TERM_NOT_INTEGER]: {
    errorCode: 400,
    message: 'N term is not an integer',
    errorType: MAP_ERROR_TYPES.N_TERM_NOT_INTEGER
  },
  [MAP_ERROR_TYPES.N_TERM_NEGATIVE]: {
    errorCode: 400,
    message: 'N term is negative',
    errorType: MAP_ERROR_TYPES.N_TERM_NEGATIVE
  },
  [MAP_ERROR_TYPES.RESOURCE_NOT_FOUND]: {
    errorCode: 404,
    message: 'Resource not found',
    errorType: MAP_ERROR_TYPES.RESOURCE_NOT_FOUND
  },
  [MAP_ERROR_TYPES.RESULT_OVERFLOW]: {
    errorCode: 400,
    message: 'The calculated value is overflow; try with a number less than 79',
    errorType: MAP_ERROR_TYPES.RESULT_OVERFLOW
  }
};

const MAP_SUCCESS_BY_TYPE: T_MAP_SUCCESS_BY_TYPE = {
  [MAP_SUCCESS_TYPES.DEFAULT]: {
    code: 200,
    message: 'Operation executed correctly',
    type: MAP_SUCCESS_TYPES.DEFAULT,
    dataKey: 'default'
  },
  [MAP_SUCCESS_TYPES.FIBONACCI_CALCULATED]: {
    code: 200,
    message: 'N term of fibonacci series calculated',
    dataKey: 'nTerm',
    type: MAP_SUCCESS_TYPES.FIBONACCI_CALCULATED
  }
};

export {
  MAP_ERROR_BY_TYPE,
  MAP_SUCCESS_BY_TYPE,
  MAP_SUCCESS_TYPES,
  MAP_ERROR_TYPES
};
