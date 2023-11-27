import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import RegisterPage from "./pages/RegisterPage";
import { Provider } from "react-redux";
import store from "./store";
import LoginPage from "./pages/LoginPage";
function App() {
  document.documentElement.classList.remove("dark-theme");
  document.documentElement.classList.add("light-theme");
  return (
    <div className={styles.app}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="/app" />} />
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
