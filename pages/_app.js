import '@/styles/globals.css'
import {ThemeProvider} from '../context/ThemeContext';
import {ThemeContext } from  '../context/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
       <Component {...pageProps} />
    </ThemeProvider>
  )
}
