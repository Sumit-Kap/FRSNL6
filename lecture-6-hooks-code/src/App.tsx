import "./styles.css";
import React, { useCallback } from "react";
import Counter from "./useState/Counter";
import Effect from "./useEffect/Effect";
import Memo from "./useMemo/Memo";
import ParentCallback from "./useCallback/ParentCallback";
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello Geeks</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

interface Props {}
interface State {
  name: string;
  unmount: boolean;
}
export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      unmount: false
    };
  }

  getValue = () => {};
  render() {
    return (
      <div className="App">
        <Counter />
        <br />
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.currentTarget.value });
          }}
        />
        <Effect name={this.state.name} />

        <Memo />
        <ParentCallback />
      </div>
    );
  }
}
