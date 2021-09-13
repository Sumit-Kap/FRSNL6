import React from "react";
interface Props {}
interface ResponseData {
  id: number;
  price: number;
  description: string;
  image: string;
}
interface State {
  response: ResponseData[];
}
export default class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      response: [],
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

    if (response.length === 0) {
      return <div className="loader">Loader........</div>;
    }
    return (
      <div>
        <div className="product-list">
          {response.map((resp) => (
            <div className="product-cards">
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
