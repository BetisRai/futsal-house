import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact: NextPage = () => {
  return (
    <div className="bg-yellow-500">
      <Head>
        <title> Futsal House </title>
        <meta
          name="description"
          content="Futsal House, online Booking, Matching, Competing site for Futsal Players and Centres."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar path="/about" />
      <main className=""></main>

      <Footer />
    </div>
  );
};

export default Contact;
