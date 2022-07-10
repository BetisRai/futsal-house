import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title> Futsal House </title>
        <meta
          name="description"
          content="Futsal House, online Booking, Matching, Competing site for Futsal Players and Centres."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="relative">
          <div className="w-full h-full absolute top-0 -z-10">
            <Image src="/images/cover.png" width="1440px" height="660px" layout="responsive"/>
          </div>
          
          <nav className="w-full flex justify-between items-center px-40 py-5">
            <div>
              <Image
                src="/images/logo.png"
                alt="Futsal House Logo"
                width="114px"
                height="44px"
                layout="intrinsic"
              />
            </div>
            <ul className="flex justify-between gap-8">
              <li className="px-4 text-lg font-medium text-white border-b-2 border-b-transparent hover:border-b-white transition-all">
                <a href="#"> Home </a>
              </li>
              <li className="px-4 text-lg font-medium text-white border-b-2 border-b-transparent hover:border-b-white transition-all">              
                <a href="#"> Futsal </a>
              </li>
              <li className="px-4 text-lg font-medium text-white border-b-2 border-b-transparent hover:border-b-white transition-all">
                <a href="#"> About </a>
              </li>
              <li className="px-4 text-lg font-medium text-white border-b-2 border-b-transparent hover:border-b-white transition-all">
                <a href="#"> Contact </a>
              </li>
            </ul>
          </nav>

        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
