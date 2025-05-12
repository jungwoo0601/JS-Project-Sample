import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "index.html", // 기본 index.html
        list: "src/pages/todo/list.html",
        regist: "src/pages/todo/regist.html",
        info: "src/pages/todo/info.html",
        // 필요한 다른 HTML 파일을 여기에 추가
      },
    },
  },
  appType: "mpa", // fallback 사용안함
});
