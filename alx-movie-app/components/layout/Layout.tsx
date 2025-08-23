import { ComponentProps } from "@/interfaces/index";
import Header from "./Header";
import Footer from "./Footer";
import Button from "../commons/Button";

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div>
      <Header title="Header" />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Button title="My Button" />
    </div>
  );
};

export default Layout;
