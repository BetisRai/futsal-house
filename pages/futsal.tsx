import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Futsal: NextPage = () => {
  return (
    <div className="bg-indigo-800">
      <Head>
        <title> Futsal House </title>
        <meta
          name="description"
          content="Futsal House, online Booking, Matching, Competing site for Futsal Players and Centres."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar path="/futsal" />
      <main className=""></main>

      <Footer />
    </div>
  );
};

export default Futsal;
