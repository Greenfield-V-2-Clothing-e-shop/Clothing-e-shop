import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import PrivateRoute from "./privateRoute";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <PrivateRoute>
    <Navbar/>
    <Sidebar/>
    </PrivateRoute>
  <Component {...pageProps} />
  </div>
  )
}
