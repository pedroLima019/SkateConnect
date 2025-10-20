import { Heart, Home, PlusCircle, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const MobileBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t flex justify-around  p-2 h-10 items-center text-white lg:hidden z-50">
      <Link to="/feed" className="flex flex-col items-center justify-center">
        <Home className="w-5 " />
      </Link>
      <Link to="" className="flex flex-col items-center justify-center">
        <Search className="w-5" />
      </Link>
      <Link to="/createPost">
        <PlusCircle className="w-5" />
      </Link>
      <Link to="" className="flex flex-col items-center justify-center">
        <Heart className="w-5" />
      </Link>
      <Link
        to="/profile"
        className="flex flex-col items-center justify-center "
      >
        <User className="w-5" />
      </Link>
    </nav>
  );
};

export default MobileBottomNav;
