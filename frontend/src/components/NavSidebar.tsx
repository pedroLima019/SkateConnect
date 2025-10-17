import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Home,
  User,
  Settings,
  LogOut,
  PlusCircle,
  Search,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Home", url: "/feed", icon: Home },
  { title: "Explorar", url: "/explore", icon: Search },
  { title: "Perfil", url: "/perfil", icon: User },
  { title: "Criar", url: "/create", icon: PlusCircle },
  { title: "Notificação", url: "/notification", icon: Heart },
  { title: "Configurações", url: "/settings", icon: Settings },
];

export default function NavSidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[260px]   ">
      <Sidebar>
        <SidebarHeader className="p-4 border-b border-neutral-800">
          <h1 className="font-bold">SkateConnect</h1>
        </SidebarHeader>

        <SidebarContent className="flex-1 overflow-y-auto p-5 ">
          <SidebarGroup>
            <SidebarGroupLabel className="sr-only">Navegação</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-5">
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.url}
                        className="flex items-center px-5 rounded-xl hover:bg-neutral-900 transition"
                      >
                        <item.icon />
                        <span className="text-sm font-medium ">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 border-t border-neutral-800">
          <button className="flex items-center gap-3 w-full text-left text-sm hover:text-red-500 transition">
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </button>
        </SidebarFooter>
      </Sidebar>
    </aside>
  );
}
