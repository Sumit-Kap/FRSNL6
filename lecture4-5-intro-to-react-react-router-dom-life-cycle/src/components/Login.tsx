import React from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import { useHistory } from "react-router-dom";
import { withCookies } from "react-cookie";
// import { withRouter } from "react-router-dom";
interface Props {
  // cookies:
}
interface LoginApiResponse {
  message?: string;
  token: string;
}
const Login = (props: any) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authResponse, setAuthResponse] = React.useState<LoginApiResponse>();
  const history = useHistory();
  const handleChange = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/authenticateUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email_id: email,
            password: password,
          }),
        }
      );
      const responseData: LoginApiResponse = await response.json();
      if (responseData.message === "user matched") {
        props.cookies.set("Authorization", responseData.token, {
          path: "/",
        });
        history.push("/");
        setAuthResponse(responseData);
        // set;
      }
      // if (response.message === "user matched") {
      // props.history.push("/");
      // }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card className="container">
      <Card.Title>Login</Card.Title>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.currentTarget.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleChange}>
        Submit
      </Button>
    </Card>
  );
};
export default withCookies(Login);
// export default withRouter(Login);
