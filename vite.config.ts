import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/cascaade.github.io/",
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "src/assets"),
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@utils": path.resolve(__dirname, "src/utils"),
        },
    },
    build: {
        outDir: 'dist',
    }
});
