import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import {useFetch } from '../hooks/useFetch';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const url = "https://api.spacexdata.com/v4/rockets"
  const {data} = useFetch(url);

  console.log("data: ", data);



  return (
    <>
    <Layout>
      <div>

        
        <Hero/>
        <Introduction/>
        <Featured/>
   

      </div>
      </Layout>
     


    </>
  )
}
