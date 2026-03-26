import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolveBasePath = (siteUrl?: string) => {
  if (!siteUrl)
    return '/'

  try {
    const pathname = new URL(siteUrl).pathname.replace(/\/+$/, '')
    return pathname ? `${pathname}/` : '/'
  }
  catch {
    return '/'
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: resolveBasePath(env.VITE_SITE_URL),
    plugins: [vue()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/vue') || id.includes('node_modules/@vue') || id.includes('node_modules/vue-router')) {
              return 'framework'
            }

            if (id.includes('node_modules/gsap') || id.includes('node_modules/lenis')) {
              return 'motion'
            }
          },
        },
      },
    },
    ssgOptions: {
      dirStyle: 'nested',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5173,
    },
  }
})
