// themes/tailwind/vite.config.js
import { defineConfig } from "file:///C:/projects/whatsapp/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/projects/whatsapp/node_modules/laravel-vite-plugin/dist/index.js";
import path from "path";
import tailwindcss from "file:///C:/projects/whatsapp/node_modules/tailwindcss/lib/index.js";
import vue from "file:///C:/projects/whatsapp/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\projects\\whatsapp\\themes\\tailwind";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: [
        "themes	ailwindcss/app.css",
        "themes	ailwindjs/app.js"
      ],
      buildDirectory: "tailwind"
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    {
      name: "blade",
      handleHotUpdate({ file, server }) {
        if (file.endsWith(".blade.php")) {
          server.ws.send({
            type: "full-reload",
            path: "*"
          });
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": "/themes	ailwindjs"
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          config: path.resolve(__vite_injected_original_dirname, "tailwind.config.js")
        })
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidGhlbWVzL3RhaWx3aW5kL3ZpdGUuY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcd2hhdHNhcHBcXFxcdGhlbWVzXFxcXHRhaWx3aW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFx3aGF0c2FwcFxcXFx0aGVtZXNcXFxcdGFpbHdpbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3RzL3doYXRzYXBwL3RoZW1lcy90YWlsd2luZC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgbGFyYXZlbCBmcm9tIFwibGFyYXZlbC12aXRlLXBsdWdpblwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgbGFyYXZlbCh7XG4gICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgIFwidGhlbWVzXFx0YWlsd2luZFxcY3NzL2FwcC5jc3NcIixcbiAgICAgICAgICAgICAgICBcInRoZW1lc1xcdGFpbHdpbmRcXGpzL2FwcC5qc1wiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYnVpbGREaXJlY3Rvcnk6IFwidGFpbHdpbmRcIixcbiAgICAgICAgfSksXG4gICAgICAgIHZ1ZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUFzc2V0VXJsczoge1xuICAgICAgICAgICAgICAgICAgICBiYXNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlQWJzb2x1dGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiYmxhZGVcIixcbiAgICAgICAgICAgIGhhbmRsZUhvdFVwZGF0ZSh7IGZpbGUsIHNlcnZlciB9KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUuZW5kc1dpdGgoXCIuYmxhZGUucGhwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZlci53cy5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZnVsbC1yZWxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IFwiKlwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgJ0AnOiAnL3RoZW1lc1xcdGFpbHdpbmRcXGpzJyxcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgICAgcG9zdGNzczoge1xuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgIHRhaWx3aW5kY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInRhaWx3aW5kLmNvbmZpZy5qc1wiKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UyxTQUFTLG9CQUFvQjtBQUNyVSxPQUFPLGFBQWE7QUFDcEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sU0FBUztBQUpoQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsTUFDQSxnQkFBZ0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDTixvQkFBb0I7QUFBQSxVQUNoQixNQUFNO0FBQUEsVUFDTixpQkFBaUI7QUFBQSxRQUNyQjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQSxJQUVEO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixnQkFBZ0IsRUFBRSxNQUFNLE9BQU8sR0FBRztBQUM5QixZQUFJLEtBQUssU0FBUyxZQUFZLEdBQUc7QUFDN0IsaUJBQU8sR0FBRyxLQUFLO0FBQUEsWUFDWCxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDVixDQUFDO0FBQUEsUUFDTDtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSztBQUFBLElBRVQ7QUFBQSxFQUNKO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDRCxTQUFTO0FBQUEsTUFDTCxTQUFTO0FBQUEsUUFDTCxZQUFZO0FBQUEsVUFDUixRQUFRLEtBQUssUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxRQUN4RCxDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
