import '@/styles/globals.css'
import {ThemeProvider} from '../context/ThemeContext';
import {ThemeContext } from  '../context/ThemeContext';
import {DashboardProvider} from '../context/DashboardContext';

export default function App({ Component, pageProps }) {
  return (

    <ThemeProvider>
      <DashboardProvider >
       <Component {...pageProps} />
       </DashboardProvider>
    </ThemeProvider>
  )
}
