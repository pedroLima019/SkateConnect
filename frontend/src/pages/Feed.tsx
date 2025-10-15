import Navigation from "@/components/Navigation";
import NavSidebar from "@/components/NavSidebar";
import Post from "@/components/Post";
import { SidebarProvider } from "@/components/ui/sidebar";

const postsData = [
  {
    id: 1,
    name: "Maria",
    minutesPost: 5,
    likes: 23,
    coments: 4,
    subtitle: "Primeiro post do dia!",
  },
  {
    id: 2,
    name: "Pedro",
    minutesPost: 15,
    likes: 10,
    coments: 2,
    subtitle: "Novidades de React!",
  },
  {
    id: 3,
    name: "Ana",
    minutesPost: 30,
    likes: 45,
    coments: 7,
    subtitle: "Dicas de Tailwind CSS.",
  },
];

const Feed = () => {
  return (
    <SidebarProvider>
      <div className="flex bg-black text-white min-h-screen w-full overflow-hidden">
        <NavSidebar />

        <div className="flex-1 flex flex-col lg:ml-[260px]">
          <Navigation />

          <main className="flex-1 overflow-y-auto p-4 flex flex-col items-center">
            <div className="w-full  space-y-1">
              {postsData.map((post) => (
                <Post
                  key={post.id}
                  name={post.name}
                  minutesPost={post.minutesPost}
                  likes={post.likes}
                  coments={post.coments}
                  subtitle={post.subtitle}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Feed;
