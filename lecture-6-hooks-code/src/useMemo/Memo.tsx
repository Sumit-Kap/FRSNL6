import React, { useMemo } from "react";

const factorial = (n: number): number => {
  let fact = 1;
  console.log("In memo function ");
  while (n > 0) {
    fact = fact * n;
    n--;
  }
  return fact;
};

const Memo = () => {
  const [number, setNumber] = React.useState(0);
  // React.useEffect(()=>{
  //   factorial(number)
  // },[number])
  const getFactorial = useMemo(() => factorial(number), [number]);
  return (
    <>
      Factorial is {getFactorial}
      <input
        type="number"
        onChange={(e) => {
          setNumber(parseInt(e.target.value, 10));
        }}
      />
    </>
  );
};

export default Memo;
