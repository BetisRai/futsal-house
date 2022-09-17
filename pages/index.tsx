import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FutsalCenterCard, {
  FutsalCenterType,
} from "../components/FutsalCenterCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const testFutsal: FutsalCenterType = {
    name: "Recreation Futsal Center",
    short_description: "Ramput Sentitis Great field",
    fields_count: 3,
    rating: 4.3,
    reviews_count: 3143,
  };

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
          <Navbar path='/'/>
          <div className="w-full h-full absolute top-0 -z-10 backdrop-blur-lg">
            <Image
              alt="Futsal House - Cover photo"
              src="/images/cover.png"
              width="1440px"
              height="660px"
              layout="fill"
              quality={100}
            />
          </div>
          <Hero />
        </div>

	<div className="mt-36 py-2 px-10">
	  <h3 className="text-[#14D045] text-xl font-semibold mb-5"> Nearest Fields </h3>
          <div className="w-full flex flex-wrap justify-between gap-6">
            <FutsalCenterCard futsal={testFutsal} />
            <FutsalCenterCard futsal={testFutsal} />
            <FutsalCenterCard futsal={testFutsal} />          
          </div>          
        </div>

	<div className="mt-10 py-2 px-10 bg-[#20C980]">
	  <h3 className="text-white text-xl font-semibold mb-5"> Popular Fields </h3>
          <div className="w-full flex flex-wrap justify-between gap-6">
            <FutsalCenterCard futsal={testFutsal} />
            <FutsalCenterCard futsal={testFutsal} />
            <FutsalCenterCard futsal={testFutsal} />          
          </div>          
        </div>        

      </main>

      <Footer/>
    </div>
  );
};

const Hero = (): JSX.Element => (
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
);

export default Home;
