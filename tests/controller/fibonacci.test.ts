import controller from '../../src/controller/fibonacci';

describe('fibonacci controller', () => {
  it('nTerm parameter is not a integer', () => {
    try {
      const nTerm: string = "test";
      controller({ nTerm });
    } catch (error) {
      const errorType: string = 'N_TERM_NOT_INTEGER';
      expect(error.message).toBeUndefined();
      expect(error.name).toBe(errorType);
    }
  });

  it('nTerm parameter is negative integer', () => {
    try {
      const nTerm: string = "-2";
      controller({ nTerm });
    } catch (error) {
      const errorType: string = 'N_TERM_NEGATIVE';
      expect(error.message).toBeUndefined();
      expect(error.name).toBe(errorType);
    }
  });

  it('nTerm parameter is float number', () => {
    try {
      const nTerm: string = "2.3";
      controller({ nTerm });
    } catch (error) {
      const errorType: string = 'N_TERM_NOT_INTEGER';
      expect(error.message).toBeUndefined();
      expect(error.name).toBe(errorType);
    }
  });

  it('nTerm parameter is an integer', () => {
    const nTerm: string = "2";
    const result = controller({ nTerm });
    const expectedResult: number = 1;

    expect(result).toBe(expectedResult);
  });
});
