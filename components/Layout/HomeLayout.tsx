import { FunctionComponent } from "preact";
import HtmlLayout from "@/components/Layout/HtmlLayout.tsx";
import Navbar from "@/components/Navbar.tsx";

const HomeLayout: FunctionComponent = ({ children }) => {
  return (
    <HtmlLayout>
      <div className="flex flex-col md:max-w-[1000px] mx-auto px-4">
        <Navbar />
        {children}
      </div>
    </HtmlLayout>
  );
};

export default HomeLayout;
