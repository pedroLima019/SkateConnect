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
      <div className="min-h-screen w-screen grid grid-cols-1 lg:grid-cols-[260px_1fr] bg-black text-white overflow-hidden">
        <NavSidebar />

        <div className="flex flex-col h-full overflow-hidden">
          <Navigation />

          <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4">
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
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Feed;
