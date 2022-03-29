import {
  MAP_ERROR_BY_TYPE,
  MAP_SUCCESS_BY_TYPE,
  TResponse
} from './constants';

type TApiResponseError = {
  statusCode: number;
  errorType: string;
  message: string;
  error: boolean;
};

type TApiResponseSuccess = {
  statusCode: number;
  type: string;
  message: string;
  error: boolean;
  data: {
    [key: string]: number
  };
};

const getSuccessObjectByType = (successType: string): TResponse =>
  MAP_SUCCESS_BY_TYPE[successType] || MAP_SUCCESS_BY_TYPE.DEFAULT;

const getErrorObjectByType = (errorType: string): TResponse =>
  MAP_ERROR_BY_TYPE[errorType] || MAP_ERROR_BY_TYPE.DEFAULT;

const constructCustomErrorByType = ({
  _type,
  _message
}: {
  _type: string,
  _message?: string
}): Error => {
  const error = new Error(_message);
  error.message = _message;
  error.name = _type;
  throw error;
};

const constructErrorResponse = ({
  name: _type = 'DEFAULT',
  message: _message
}: {
  name: string,
  message: string
}) : TApiResponseError => {
  const {
    errorCode: statusCode,
    message
  }: TResponse = getErrorObjectByType(_type);

  return {
    statusCode,
    errorType: _type,
    message: message || _message,
    error: true
  };
};

const constructSuccessResponse = ({
  _type = 'DEFAULT',
  _data
}: {
  _type: string,
  _data: number
}): TApiResponseSuccess => {
  const {
    code: statusCode,
    message,
    dataKey
  }: TResponse = getSuccessObjectByType(_type);

  return {
    statusCode,
    data: {
      [dataKey]: _data
    },
    message,
    error: false,
    type: _type
  };
};

export {
  constructErrorResponse,
  constructSuccessResponse,
  constructCustomErrorByType
};
