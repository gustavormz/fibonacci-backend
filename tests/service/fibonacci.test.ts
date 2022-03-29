import service from '../../src/service/fibonacci';

describe('fibonacci service test', () => {
  it('test the first 10 terms into the succession are correct', () => {
    const tenFirstTerms: Array<number> = [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    ];

    for (let nTerm: number = 0; nTerm < 10; nTerm++) {
      const result = service.calculateNTermFibonacci({ _nTerm: nTerm });
      const expectedResult = tenFirstTerms[nTerm];

      expect(result).toBe(expectedResult);
    }
  });

  it('calculate a overflow term', () => {
    const errorType = 'RESULT_OVERFLOW';
    try {
      service.calculateNTermFibonacci({ _nTerm: 79 });
    } catch (error) {
      expect(error.message).toBeUndefined();
      expect(error.name).toBe(errorType);
    }
  });
});
