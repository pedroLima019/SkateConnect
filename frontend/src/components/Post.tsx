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
    <div className="flex flex-col items-center w-full p-2 md:p-3 ">
      <article className="border border-white text-white rounded-md p-2.5 bg-zinc-900 md:p-5 ">
        <header className="flex w-full items-center mb-2 md:mb-5">
          <div className="flex items-center flex-1">
            <User className="bg-white text-black rounded-full md:w-[35px] md:h-[35px]" />

            <div className="flex flex-col ml-2 md:ml-3">
              <p className="font-semibold">{name}</p>
              <p className="font-light text-[10px]">{minutesPost} minutos</p>
            </div>
          </div>

          <button
            className="text-white text-[12px] font-semibold 
           bg-zinc-700 p-1.5 rounded-lg hover:bg-white transition-all duration-300 hover:text-black md:w-[80px]"
          >
            Follow
          </button>
        </header>

        <div className="w-full h-auto  md:w-[500px]">
          <img
            src="/post.png"
            alt="Skateboard is love"
            className="w-full rounded "
          />
        </div>

        <div className="flex items-center gap-5 p-1 mt-2 w-full ">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[10px]">
              <button className="flex items-center ">
                <Heart className="w-[20px] hover:text-red-500" />
              </button>
              {likes}
            </div>
            <div className="flex items-center gap-1 text-[10px]">
              <button className="flex items-center">
                <MessageCircle className="w-[20px] hover:text-blue-500" />
              </button>
              {coments}
            </div>
            <button>
              <Share className="w-[20px] hover:text-emerald-500" />
            </button>
          </div>
        </div>

        <footer className="mt-2 p-1">
          <div className="flex items-center gap-1.5 text-sm font-semibold mb-1">
            {name}
            <p className="text-sm  font-light">{subtitle}</p>{" "}
          </div>
        </footer>
      </article>
    </div>
  );
};

export default Post;
