import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
  <Component {...pageProps} />
  </div>
  )
}