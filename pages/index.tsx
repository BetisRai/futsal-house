import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

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
          <Navbar/>
          <div className="w-full h-full absolute top-0 -z-10">
            <Image alt="Futsal House - Cover photo" src="/images/cover.png" width="1440px" height="660px" layout="responsive"/>
          </div>
	  <div className="relative flex justify-center items-center">
	    <Image alt="Futsal House - Stadium Graphic" src="/images/hero_graphic.png" width={"770"} height={"580"} quality={100}/>
	    <button className="absolute h-14 px-40 mt-40 bg-green-500 rounded-md shadow-2xl border-b-2 border-b-emerald-800 hover:bg-green-600 hover:scale-105 transition-all">
	      <p className="font-bold text-3xl text-white"> BOOK NOW </p>
            </button>
          </div>
	  <div className="flex">
          </div>
        </div>
        
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
