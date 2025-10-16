import MobileBottomNav from "@/components/MobileBottomNav";
import NavSidebar from "@/components/NavSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navigation from "@/components/Navigation";
import { UserIcon } from "lucide-react";

interface PerfilProps {
  name: string;
  post: number;
  followers: number;
  follows: number;
}

const Perfil: React.FC<PerfilProps> = ({ name, post, followers, follows }) => {
  return (
    <SidebarProvider>
      <div className="flex bg-black text-white min-h-screen w-full overflow-hidden">
        <NavSidebar />
        <div className="flex-1 flex flex-col lg:ml-[260px]">
          <Navigation />
          <main className="overflow-y-auto p-4 flex flex-col items-center w-full ">
            <header className="flex  flex-col justify-around w-full items-center gap-3.5">
              <div className="flex  items-center justify-around w-full ">
                <div className="flex flex-col items-start justify-center ">
                  <UserIcon className="bg-white text-black rounded-full w-8 h-8 p-1 mb-1" />
                  <p className="text-[12px] font-semibold">{name}</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold text-sm">{post}</p>
                  <p className="font-semibold text-[12px]">Posts</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold text-sm">{followers}</p>
                  <p className="font-semibold text-[12px]">Seguindo</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold text-sm">{follows}</p>
                  <p className="font-semibold text-[12px]">Seguindores</p>
                </div>
              </div>
              <div className="w-full flex justify-around items-center">
                <button className="bg-zinc-500 p-1 rounded-xl w-[140px] text-[12px] font-medium hover:bg-zinc-700">
                  Editar Perfil
                </button>
                <button className="bg-zinc-500 p-1 rounded-xl w-[140px] text-[12px] font-medium hover:bg-zinc-700">
                  Compartilhar Perfil
                </button>
              </div>
            </header>
          </main>
        </div>
        <MobileBottomNav />
      </div>
    </SidebarProvider>
  );
};

export default Perfil;
