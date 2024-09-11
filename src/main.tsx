import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/Store.ts";
import Todo from "./Todo.tsx";
import Booking from "./Booking.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <App /> */}
 <Booking/>
  </Provider>
);
