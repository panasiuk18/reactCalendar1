import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "https://panasiuk18.github.io/reactCalendar1/";

export default defineConfig({
  plugins: [react()],
  base: "/reactCalendar1/",
});
