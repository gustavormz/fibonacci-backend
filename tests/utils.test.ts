import {
  constructCustomErrorByType,
  constructErrorResponse,
  constructSuccessResponse,

  TApiResponseError,
  TApiResponseSuccess
} from '../src/utils';

describe('utils unit testing', () => {

  describe('constructCustomErrorByType function test', () => {
    it('errorType and message are provided', () => {
      const errorType: string = 'errorType';
      const message: string = 'message';
      try {
        constructCustomErrorByType({
          _type: errorType,
          _message: message
        })
      } catch (error) {
        expect(error.message).toBe(message);
        expect(error.name).toBe(errorType);
      }
    });

    it('message is not provided', () => {
      const errorType: string = 'errorType';
      try {
        constructCustomErrorByType({
          _type: errorType
        })
      } catch (error) {
        expect(error.message).toBeUndefined();
        expect(error.name).toBe(errorType);
      }
    });
  });

  describe('constructErrorResponse function test', () => {
    it('errorType exists', () => {
      const errorType: string = 'N_TERM_NOT_INTEGER';
      const message: string = '';

      const result = constructErrorResponse({
        message,
        name: errorType
      });

      const expectedResult: TApiResponseError = {
        error: true,
        errorType: 'N_TERM_NOT_INTEGER',
        message: 'N term is not an integer',
        statusCode: 400
      };
      expect(result).toMatchObject(expectedResult);
    });

    it('errorType does not exists', () => {
      const errorType: string = 'NOT_DEFINED';
      const message: string = '';

      const result = constructErrorResponse({
        message,
        name: errorType
      });

      const expectedResult: TApiResponseError = {
        error: true,
        errorType: 'DEFAULT',
        message: 'Internal Server Error',
        statusCode: 500
      };
      expect(result).toMatchObject(expectedResult);
    });

    it('custom message', () => {
      const errorType: string = 'NOT_DEFINED';
      const message: string = 'custom message';

      const result = constructErrorResponse({
        message,
        name: errorType
      });

      const expectedResult: TApiResponseError = {
        error: true,
        errorType: 'DEFAULT',
        message: 'custom message',
        statusCode: 500
      };
      expect(result).toMatchObject(expectedResult);
    });
  });

  describe('constructSuccessResponse function test', () => {
    it('type exists ', () => {
      const type: string = 'FIBONACCI_CALCULATED';
      const data: number = 0;

      const result = constructSuccessResponse({
        _data: data,
        _type: type
      });

      const expectedResult: TApiResponseSuccess = {
        error: false,
        type: 'FIBONACCI_CALCULATED',
        message: 'N term of fibonacci series calculated',
        statusCode: 200,
        data: {
          nTerm: 0
        }
      };
      expect(result).toMatchObject(expectedResult);
    });

    it('type does not exists ', () => {
      const type: string = 'UNDEFINED';
      const data: number = 0;

      const result = constructSuccessResponse({
        _data: data,
        _type: type
      });

      const expectedResult: TApiResponseSuccess = {
        error: false,
        type: 'DEFAULT',
        message: 'Operation executed correctly',
        statusCode: 200,
        data: {
          default: 0
        }
      };
      expect(result).toMatchObject(expectedResult);
    });

    it('data is empty', () => {
      const type: string = 'FIBONACCI_CALCULATED';

      const result = constructSuccessResponse({
        _type: type
      });

      const expectedResult: TApiResponseSuccess = {
        error: false,
        type: 'FIBONACCI_CALCULATED',
        message: 'N term of fibonacci series calculated',
        statusCode: 200,
        data: {
          nTerm: undefined 
        }
      };
      expect(result).toMatchObject(expectedResult);
    });
  });

});
