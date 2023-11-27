import { BrowserRouter, Routes } from "react-router-dom";
import styles from "./App.module.scss";
function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
