import {
  defaultPath,
  pathParameterPath
} from '../../src/route/fibonacci';
import {
  TApiResponseSuccess,
  TApiResponseError
} from '../../src/utils';

describe('fibonacci route', () => {
  it('responds to /api/fibonacci', () => {
    const req = {};
    const res = {
      status: (code: number) => {
        return {
          send: (response: TApiResponseError) => response
        }
      }
    };
    const result = defaultPath(req, res);

    const expectedResult = {
      error: true,
      errorType: 'RESOURCE_NOT_FOUND',
      message: 'Resource not found',
      statusCode: 404,
    }
    expect(result).toMatchObject(expectedResult);
  });

  it('responds to /api/fibonacci/:nTerm', () => {
    const req = {
      params: {
        nTerm: "1"
      }
    };
    const res = {
      status: (code: number) => {
        return {
          send: (response: TApiResponseSuccess) => response
        }
      }
    };
    const result = pathParameterPath(req, res);

    const expectedResult = {
      error: false,
      message: 'N term of fibonacci series calculated',
      statusCode: 200,
      type: 'FIBONACCI_CALCULATED'
    }
    expect(result).toMatchObject(expectedResult);
  });
});
