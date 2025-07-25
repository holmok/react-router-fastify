import HtmlLayout from '@layouts/html-layout'
import { Outlet } from 'react-router'

export function links() {
	return [
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/apple-touch-icon.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/favicon-32x32.png'
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/favicon-16x16.png'
		},
		{ rel: 'manifest', href: '/site.webmanifest' }
	]
}

export const Layout = HtmlLayout

export default function App() {
	return <Outlet />
}
