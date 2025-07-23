import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ command }) => ({
	plugins: [reactRouter(), tsconfigPaths()],
	ssr: command === 'build' ? { noExternal: true } : {}
}))
