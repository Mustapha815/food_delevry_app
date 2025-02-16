
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'; // تأكد من أن هذه الحزمة مثبتة
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // استخدم tailwindcss هنا
  ],
});