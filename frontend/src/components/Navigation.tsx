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
    <nav className="flex  lg:hidden justify-between items-center px-4 py-3 bg-black border-b border-neutral-800">
      <img src="/Logo.png" alt="Logo skate connect" className="h-8" />

      <Sheet>
        <SheetTrigger className="border-0 p-2">
          <MenuIcon className="text-white w-6 h-6" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-black text-white border-0 p-4 w-3/4 sm:w-1/2 max-w-xs"
        >
          <SheetHeader>
            <SheetTitle>
              <img src="/Logo.png" alt="Logo skate connect" className="h-8" />
            </SheetTitle>
            <SheetDescription className="mt-4 space-y-3">
              <a className="flex items-center text-sm font-medium" href="#">
                <Settings className="mr-2 w-5 h-5" />
                Configurações
              </a>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navigation;
