import React from "react";
interface Props {
  valueMethod: Function;
}
const Callback = ({ valueMethod }: Props) => {
  React.useEffect(() => {
    console.log("In callback");
  }, [valueMethod]);
  return <div>Inside useCallback</div>;
};
export default Callback;
