import Navigation from "@/components/Navigation";
import Post from "@/components/Post";

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
    <main className="bg-black h-full w-full flex flex-col gap-0">
      <Navigation />
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
  );
};

export default Feed;
