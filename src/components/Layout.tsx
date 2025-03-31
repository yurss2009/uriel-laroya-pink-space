
import { ReactNode } from "react";
import Navbar from "./Navbar";
import KittyFooter from "./KittyFooter";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <KittyFooter />
    </div>
  );
};

export default Layout;
