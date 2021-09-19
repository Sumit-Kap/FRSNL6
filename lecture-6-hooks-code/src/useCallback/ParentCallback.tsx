import React from "react";
import Callback from "./Callback";
interface Props {}

const ParentCallback = () => {
  const [name, setName] = React.useState("");
  const getValue = React.useCallback(() => {}, [name]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      name is{name}
      <Callback valueMethod={getValue} />
    </>
  );
};
export default ParentCallback;
