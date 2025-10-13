import { Heart, MessageCircle, Share, User } from "lucide-react";

interface PostProps {
  name: string;
  minutesPost: number;
  likes: number;
  coments: number;
  subtitle: string;
}

const Post = ({ name, minutesPost, likes, coments, subtitle }: PostProps) => {
  return (
    <div className="flex-1 w-full p-3 ">
      <article className="border border-white text-white rounded-md p-2.5 bg-zinc-900">
        <header className="flex w-full items-center mb-2">
          <div className="flex items-center flex-1">
            <User className="bg-white text-black rounded-full" />

            <div className="flex flex-col ml-2">
              <p className="font-semibold">{name}</p>
              <p className="font-light text-[10px]">{minutesPost} minutos</p>
            </div>
          </div>

          <button className="text-white text-[12px] font-semibold  bg-zinc-700 p-1.5 rounded-lg hover:bg-white transition-all duration-300 hover:text-black">
            Follow
          </button>
        </header>

        <div className="w-full h-auto">
          <img
            src="/post.png"
            alt="Skateboard is love"
            className="w-full rounded"
          />
        </div>

        <div className="flex items-center gap-5 p-1 mt-2 w-full ">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[10px]">
              <button className="flex items-center">
                <Heart className="w-[20px]" />
              </button>
              {likes}
            </div>
            <div className="flex items-center gap-1 text-[10px]">
              <button className="flex items-center">
                <MessageCircle className="w-[20px]" />
              </button>
              {coments}
            </div>
            <button>
              <Share className="w-[20px]" />
            </button>
          </div>
        </div>

        <footer className="mt-2 p-1">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold mb-1">
            {name}
            <p className="text-[8px] font-light">{subtitle}</p>{" "}
          </div>
        </footer>
      </article>
    </div>
  );
};

export default Post;
