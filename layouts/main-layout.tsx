import { ReactNode } from "react";
import { Footer } from "../components/footer";
import Navbar from "@/components/header";

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
    </div>
  );
};
