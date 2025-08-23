import { ComponentProps } from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Button title="My Button" />
    </div>
  );
};

export default Layout;
