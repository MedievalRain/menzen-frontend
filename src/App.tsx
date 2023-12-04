import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import "./fonts.scss";
function App() {
  document.documentElement.classList.remove("dark-theme");
  document.documentElement.classList.add("light-theme");
  return (
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
