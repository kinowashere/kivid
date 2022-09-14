import { FunctionComponent } from "preact";
import MadeWithFresh from "@/components/MadeWithFresh.tsx";
import CheckSource from "@/components/CheckSource.tsx";

const Navbar: FunctionComponent = () => {
  return (
    <div className="w-full py-6 flex justify-between">
      <div className="flex flex-col md:flex-row md:space-x-4 md:items-end">
        <span className="font-title text-3xl">kivid</span>
        <span className="text-2xl font-bold">region list maker</span>
      </div>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:items-center">
        <CheckSource />
        <MadeWithFresh />
      </div>
    </div>
  );
};

export default Navbar;
