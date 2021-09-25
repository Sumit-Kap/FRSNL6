import "./styles.css";
import store from "./Store/store";
import Banking from "./Banking";
export default function App() {
  console.log("print store data", store.getState());
  return (
    <div className="App">
      <h1>Welcome to Redux</h1>
      <Banking />
    </div>
  );
}
