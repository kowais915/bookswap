import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Featured from '@/components/Featured'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>

        <Navbar/>
        <Hero/>
        <Introduction/>
        <Featured/>

      </div>
     


    </>
  )
}
