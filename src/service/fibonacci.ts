const calculateNTermFibonacci = ({
  _nTerm
}: {
  _nTerm: number
}) : number => {
  const A: number = (1 + Math.sqrt(5)) / 2;
  const B: number = (1 - Math.sqrt(5)) / 2;
  const nTerm: number = (Math.pow(A, _nTerm) - Math.pow(B, _nTerm)) / Math.sqrt(5);
  return Math.ceil(nTerm);
};

export default {
  calculateNTermFibonacci
};
