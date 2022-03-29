import {
    defaultPath
  } from '../../src/route/default';
  import {
    TApiResponseError
  } from '../../src/utils';
  
  describe('default route', () => {
    it('responds to any path different of /api/fibonacci/:nTerm', () => {
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
  });
  