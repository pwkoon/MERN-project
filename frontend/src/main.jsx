import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./ components/Layout.jsx";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </Layout>
  </BrowserRouter>
);
