import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

const NavSidebar = () => {
  return (
    <nav className="hidden lg:flex  h-full  text-white">
      <Sidebar>
        <SidebarHeader className="p-4 border-b border-neutral-800 flex items-start  ">
          <img src="Logo.png" alt="logo skate connect" />
        </SidebarHeader>

        <SidebarContent className="flex-1 p-4 space-y-2">
          <SidebarGroup>Home</SidebarGroup>
          <SidebarGroup>Explorar</SidebarGroup>
          <SidebarGroup>Perfil</SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4 border-t border-neutral-800 text-sm">
          © 2025 SkateConnect
        </SidebarFooter>
      </Sidebar>
    </nav>
  );
};

export default NavSidebar;
