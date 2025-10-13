import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // 👈 Importação necessária

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // 👈 Adicione esta seção
    alias: {
      "@": path.resolve(__dirname, "./src"), // 👈 Mapeia o alias @/ para o diretório ./src
    },
  },
});
