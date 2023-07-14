import '@/styles/globals.css'
import {ThemeProvider} from '../context/ThemeContext';
import {ThemeContext } from  '../context/ThemeContext';
import {DashboardProvider} from '../context/DashboardContext';
import {AuthProvider} from '../context/AuthContext';

export default function App({ Component, pageProps }) {
  return (

    <AuthProvider>
    <ThemeProvider>
      <DashboardProvider >
       <Component {...pageProps} />
       </DashboardProvider>
    </ThemeProvider>
    </AuthProvider>
  )
}
