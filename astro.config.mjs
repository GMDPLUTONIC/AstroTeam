// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
// export default defineConfig({
//    site: 'https://team.pluton',
//    server: { 
//        host: true,
//        port: 8080
//    },
// });
export default defineConfig({
    vite: {
      plugins: [basicSsl()],
      server: {
        host: true,
        port: 8080
      },
    },
  });