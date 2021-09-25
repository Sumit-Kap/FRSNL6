import React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
interface Props {}
interface ResponseData {
  id: number;
  price: number;
  description: string;
  image: string;
}
interface State {
  response: ResponseData[];
  showOtherData: boolean;
}
class Home extends React.PureComponent<RouteComponentProps<Props>, State> {
  constructor(props: RouteComponentProps<Props>) {
    super(props);
    // console.log()
    this.state = {
      response: [],
      showOtherData: false,
    };
  }
  getProductsData = async () => {
    const apiResponse = await fetch("https://fakestoreapi.com/products/");
    const responseData = await apiResponse.json();
    this.setState({
      response: responseData,
    });
    console.log("print data", responseData);
  };
  componentDidMount() {
    this.getProductsData();
  }
  render() {
    const { response } = this.state;
    // console.log("print ", response);
    if (response.length === 0) {
      return (
        <>
          <h1>Hello</h1>
          <div className="loader">Loader........</div>
        </>
      );
    }
    return (
      <div>
        {/* <input type="text" data-testid="input" /> */}
        <div className="product-list">
          {response.map((resp, index) => (
            <div
              className="product-cards"
              data-test-id={index}
              onClick={() => {
                // this.setState({
                //   showOtherData: true,
                // });
                // this.props.history.push(`products/${resp.id}`);
              }}
            >
              <img src={resp.image} />
              <div className="product-description">{resp.description}</div>
              <div className="product-price">{resp.price}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
