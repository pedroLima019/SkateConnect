import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Settings } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-2.5 bg-black border-b border-white mb-2.5  ">
      <div className="flex items-center">
        <img src="/Logo.png" alt="Logo skate connect" />
      </div>
      <Sheet>
        <SheetTrigger className=" border-0 p-2.5">
          <MenuIcon className="text-white " />
        </SheetTrigger>
        <SheetContent
          className="flex justify-center bg-black text-white border-0 w-full p-2.5 [&>button:first-of-type]:focus:outline-none
    [&>button:first-of-type]:focus:ring-0
    [&>button:first-of-type]:focus:ring-offset-0
    "
        >
          <SheetHeader className="w-full ">
            <SheetTitle className="flex ">
              <img src="/Logo.png" alt="Logo skate connect" />
            </SheetTitle>
            <SheetDescription className="flex p-2 ">
              <a className="flex text-start items-center">
                <Settings className="mr-2 font-semibold  w-[20px]" />
                Settings
              </a>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navigation;
