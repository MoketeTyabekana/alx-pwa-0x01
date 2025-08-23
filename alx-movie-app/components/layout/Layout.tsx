import { ComponentProps } from "@/interfaces/index";
import Header from "./Header";
import Footer from "./Footer";


const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div>
      <Header title="Header" />
      <main className="min-h-screen">{children}</main>
      <Footer />
     
    </div>
  );
};

export default Layout;
