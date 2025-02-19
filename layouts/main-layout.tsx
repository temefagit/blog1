import { ReactNode } from "react";
import { Footer } from "../components/footer";
import Navbar from "@/components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./style.module.css";

interface Props {
  children: ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const layoutStyle: React.CSSProperties = {
    minHeight: "100vh",
  };
  return (
    <div style={layoutStyle}>
      <Navbar />
      <main style={layoutStyle}>{children}</main>
      <Footer />
      <ToastContainer toastClassName={styles.toast} />
    </div>
  );
};
