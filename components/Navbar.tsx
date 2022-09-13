import { FunctionComponent } from "preact";

const Navbar: FunctionComponent = () => {
  return (
    <div className="w-full py-6 flex space-x-4 items-end">
      <span className="font-title text-3xl">kivid</span>
      <span className="text-2xl font-bold">region list maker</span>
    </div>
  );
};

export default Navbar;
