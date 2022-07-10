import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title> Futsal House </title>
        <meta name="description" content="Futsal House, online Booking, Matching, Competing site for Futsal Players and Centres." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-red-400">
        <h1 className="text-green-600">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </main>

      <footer className="">
      </footer>
    </div>
  )
}

export default Home
