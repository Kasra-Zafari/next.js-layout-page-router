import Head from "next/head";
import Layout from "@/components/Layout";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          Home Page
        </title>
      </Head>
      <Layout page="home">
        <h1>hello next.js</h1>
      </Layout>

    </>
  )
}

export default HomePage;