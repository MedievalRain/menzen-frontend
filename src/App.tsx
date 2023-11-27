import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import AuthPage from "./pages/AuthPage/AuthPage";
function App() {
  document.documentElement.classList.remove("dark-theme");
  document.documentElement.classList.add("light-theme");
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="/app" />} />
          <Route path="/auth" element={<AuthPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
