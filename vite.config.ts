import { defineConfig } from 'vite';
import { Buffer } from 'buffer';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  define: {
    'process.env': {},
    global: {},
    buffer: Buffer,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
