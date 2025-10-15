import { Heart, Home, PlusCircle, Search, User } from "lucide-react";

const MobileBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black  flex justify-around h-10 items-center text-white lg:hidden z-50">
      <a href="#" className="flex flex-col items-center justify-center">
        <Home className="w-5 " />
      </a>
      <a href="#" className="flex flex-col items-center justify-center">
        <Search className="w-5" />
      </a>
      <a href="#">
        <PlusCircle className="w-5" />
      </a>
      <a href="#" className="flex flex-col items-center justify-center">
        <Heart className="w-5" />
      </a>
      <a href="#" className="flex flex-col items-center justify-center">
        <User className="w-5" />
      </a>
    </nav>
  );
};

export default MobileBottomNav;
