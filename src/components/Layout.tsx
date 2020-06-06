import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="px-8 pt-24 pb-16 md:px-20 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
