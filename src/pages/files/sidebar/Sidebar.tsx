import { Button } from "../../../components/interactables";
import { useSidebarContext } from "../../../contexts/SidebarContext";
import Directories from "./Directories";

const Sidebar = () => {
  const { toggleSidebar } = useSidebarContext();

  return (
    <div className="max-sm:absolute bg-[#0A0C10] h-full min-h-screen w-[200px] border-r-[1px] border-r-gray-border p-4 sm:w-[390px]">
      <div className=" md:flex flex-row items-center space-x-2">
        <Button
          imagePath="/assets/collapse.svg"
          imageAltText="collapse"
          onClick={() => {
            toggleSidebar(false);
          }}
          buttonStyles="border-none bg-gray-collapseopen hover:bg-gray-collapsehover"
        />
        <h1 className="text-base font-bold text-secondary">Files</h1>
      </div>
      <div className="mt-4 flex flex-row items-center justify-between">
        <Button
          imagePath="/assets/branch.svg"
          imageAltText="branch"
          text="main"
          onClick={() => {}}
        />
        <Button
          imagePath="/assets/search.svg"
          imageAltText="search"
          onClick={() => {}}
        />
      </div>
      {/* <div className="mt-2">
        <Search text="Go to file" width={287} />
      </div> */}
      <div className="mt-3">
        <Directories />
      </div>
    </div>
  );
};

export default Sidebar;
