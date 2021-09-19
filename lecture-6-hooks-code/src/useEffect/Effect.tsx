import React from "react";
interface Props {
  name: string;
}
const Effect = ({ name }: Props) => {
  const [counter, setCounter] = React.useState();
  // combination of didMount, didUpdate, willUnmount
  React.useEffect(() => {
    console.log("In use effect", name);
    return () => {
      console.log("In unmount");
    };
  }, [name]);

  React.useEffect(() => {
    console.log("In second useEffect");
  }, []);
  return (
    <>
      <div>Learning useEffect with {name}</div>
    </>
  );
};

export default Effect;
