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
          <main className="flex flex-col items-center w-full p-2 ">
            <section className="sticky top-0 z-20 bg-black w-full flex flex-col items-center gap-3.5 pb-3 pt-2 border-b border-zinc-800">
              <div className="flex items-center justify-around w-full md:justify-center md:gap-10 ">
                <div className="flex flex-col items-start justify-center">
                  <UserIcon className="bg-white text-black rounded-full w-8 h-8 p-1 mb-1 md:mb-1.5" />
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
                  <p className="font-semibold text-[12px]">Seguidores</p>
                </div>
              </div>
              <div className="w-full flex justify-center items-center gap-2.5">
                <button className="bg-zinc-500 p-1 rounded-xl w-[140px] text-[12px] font-semibold hover:bg-zinc-700 md:w-[250px] md:p-2 ">
                  Editar Perfil
                </button>
                <button className="bg-zinc-500 p-1 rounded-xl w-[140px] text-[12px] font-semibold hover:bg-zinc-700 md:w-[250px] md:p-2">
                  Compartilhar Perfil
                </button>
              </div>
            </section>
            <section
              aria-label="Fotos do perfil"
              className="
                grid 
                grid-cols-3 sm:grid-cols-4 
                gap-[2px]
                mt-4 
                w-full 
                max-w-7xl
                overflow-y-auto
                px-2
              "
              style={{
                maxHeight: "calc(100dvh - clamp(180px, 25vh, 300px))",
              }}
            >
              {Array.from({ length: 30 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-zinc-800 hover:opacity-80 transition"
                />
              ))}
            </section>
          </main>
        </div>
        <MobileBottomNav />
      </div>
    </SidebarProvider>
  );
};

export default Perfil;
