import "./App.css";
import { Provider } from "react-redux"
import store from "./store";
import Cart from "./components/cart";

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;