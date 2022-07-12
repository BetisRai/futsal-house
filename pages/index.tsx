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
          <Navbar />
          <div className="w-full h-full absolute top-0 -z-10 backdrop-blur-lg">
            <Image
              alt="Futsal House - Cover photo"
              src="/images/cover.png"
              width="1440px"
              height="660px"
              layout="responsive"
              quality={100}
            />
          </div>
          <div className="relative flex justify-center items-center mt-10 ">
            <Image
              alt="Futsal House - Stadium Graphic"
              src="/images/hero_graphic.png"
              width={"350"}
              height={"260"}
              quality={100}
            />
            <div className="absolute -mb-96">
              <div className="flex gap-5">
                <div className="h-10 min-w-[34rem] bg-white rounded-3xl shadow-2xl">
                  <input
                    name=""
                    type="text"
                    value=""
                    placeholder="Location"
                    className="h-10 px-8 rounded-3xl shadow-2xl outline-none"
                  />
                  <input
                    name=""
                    type="date"
                    value=""
                    placeholder="Date"
                    className="h-10 px-4 rounded-3xl shadow-2xl outline-none text-gray-500"
                  />
                  <input
                    name=""
                    type="time"
                    value=""
                    placeholder="Time"
                    className="h-10 px-4 rounded-3xl shadow-2xl outline-none text-gray-500"
                  />                                    
                </div>
                <button className=" h-10 px-20 bg-green-500 rounded-3xl shadow-2xl hover:bg-green-600 hover:scale-105 transition-all">
                  <p className="font-bold text-xl text-white"> Search </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
