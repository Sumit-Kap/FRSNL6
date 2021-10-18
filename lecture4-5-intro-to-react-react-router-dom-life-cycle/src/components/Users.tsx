import React from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const Users = () => {
  const [cookies, setCookie] = useCookies(["Authorization"]);
  const [unauthorized, setUnauthorized] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const getData = async () => {
    // console.log("print cookies value", cookies);
    try {
      const response: any = await axios.get(
        "http://localhost:8000/api/v1/users",
        {
          headers: {
            Authorization: cookies.Authorization,
          },
        }
      );
      console.log("print", response.data);
      setResults(response.data.data);
      // if (response.status === 401) {
      //   setUnauthorized(true);
      // }
    } catch (err) {
      setUnauthorized(true);
    }
  };
  console.log("results", results);
  React.useEffect(() => {
    getData();
  }, []);
  console.log("print results", results);
  if (unauthorized) {
    return <h1>User not logged in </h1>;
  }
  // return null;
  return (
    <React.Fragment>
      {results.length > 0 &&
        results.map((item: any) => (
          <div>
            <h1>{item.name}</h1>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Users;
