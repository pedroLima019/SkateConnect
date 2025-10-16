import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Home, User, Settings, LogOut, Search } from "lucide-react";

const menuItems = [
  { title: "Home", icon: Home, url: "#" },
  { title: "Explorar", icon: Search, url: "#" },
  { title: "Perfil", icon: User, url: "#" },
  { title: "Configurações", icon: Settings, url: "#" },
];

const Navigation = () => {
  return (
    <nav className="flex lg:hidden justify-between items-center px-4 py-3 bg-black border-b border-neutral-800 text-white">
      <h1 className="font-bold text-base">SkateConnect</h1>

      <Sheet>
        <SheetTrigger className="border-0 p-2">
          <MenuIcon className="text-white w-6 h-6" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="bg-black text-white border-0 w-3/4 sm:w-full  p-5"
        >
          <SheetHeader>
            <h2 className="font-bold text-lg mb-6">SkateConnect</h2>

            <SheetDescription asChild>
              <div className="flex flex-col gap-10">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    className="flex items-center gap-3 text-sm font-medium hover:text-gray-300 transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.title}
                  </a>
                ))}

                <a
                  href="#"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  Sair
                </a>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navigation;
