import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImagePlus, X } from "lucide-react";

const CreatePost = () => {
  const navigate = useNavigate();
  const [imagens, setImagens] = useState<File[]>([]);

  const handleSelecionarImagens = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    setImagens(files);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <header className="flex justify-between items-center p-4 border-b border-neutral-800">
        <button onClick={() => navigate(-1)} className="text-white text-lg">
          <X size={22} />
        </button>
        <h1 className="text-lg font-semibold">Novo Post</h1>
        <button className="text-green-500 font-semibold">Avançar</button>
      </header>

      <section className="p-4 flex flex-col items-center">
        {imagens.length === 0 ? (
          <label
            htmlFor="upload"
            className="w-full h-64 flex flex-col items-center justify-center border-2 border-dashed border-neutral-700 rounded-xl cursor-pointer hover:bg-neutral-900 transition md:w-3/4 "
          >
            <ImagePlus size={40} className="text-neutral-400 mb-2" />
            <p className="text-neutral-400 text-sm">
              Selecione imagens do seu dispositivo
            </p>
            <input
              id="upload"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              capture="environment"
              onChange={handleSelecionarImagens}
            />
          </label>
        ) : (
          <>
            <div className="w-full aspect-square mb-4 overflow-hidden rounded-lg  md:w-3/6 lg:w-3/12">
              <img
                src={URL.createObjectURL(imagens[0])}
                alt="Pré-visualização"
                className="object-cover w-full h-full"
              />
            </div>
            <div
              aria-label="Imagens selecionadas"
              className="grid grid-cols-3 gap-[2px] w-full max-w-md"
              style={{ maxHeight: "calc(100vh - 300px)" }}
            >
              {imagens.map((img, i) => (
                <div
                  key={i}
                  className="aspect-square bg-zinc-800 overflow-hidden "
                >
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`Imagem ${i + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default CreatePost;
