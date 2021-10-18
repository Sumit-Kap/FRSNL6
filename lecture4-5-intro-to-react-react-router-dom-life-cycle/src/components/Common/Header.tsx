import React from "react";
import { Link } from "react-router-dom";
import "../styles/commonStyles.css";
import { withCookies } from "react-cookie";
interface Props {}
interface State {}
class Header extends React.Component<any, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      authToken: undefined,
    };
  }
  componentDidMount() {
    const { cookies } = this.props;
    const token = cookies.get("Authorization");
    console.log("print", token);
    this.setState({
      authToken: token,
    });
  }
  handleLogOut() {
    const { cookies } = this.props;
    cookies.remove("Authorization");
    this.setState({
      authToken: undefined,
    });
  }
  render() {
    return (
      <div className="top-nav">
        <Link to="/" className="nav-items">
          Home
        </Link>
        <Link to="/about-us" className="nav-items">
          About us
        </Link>
        <Link to="/contact-us" className="nav-items">
          Contact us
        </Link>
        {!this.state.authToken ? (
          <>
            <Link to="/sign-in" className="nav-items">
              Sign-in
            </Link>
            <Link to="/sign-up" className="nav-items">
              Sign-up
            </Link>
          </>
        ) : (
          <Link
            className="nav-items"
            onClick={this.handleLogOut.bind(this)}
            to="/sign-in"
          >
            Sign-out
          </Link>
        )}
        <Link className="nav-items" to="/users">
          Users
        </Link>
      </div>
    );
  }
}

export default withCookies(Header);
