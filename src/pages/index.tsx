import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather App using Open Weather API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-custom-blue dark:bg-custom-dark-blue min-h-screen flex items-center justify-center ">
        Hello
      </body>
    </>
  );
};

export default Home;
