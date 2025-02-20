import Head from "next/head";
import Layout from "@/components/Layout";

const HomePage = () => {
  return (
    <>
      <Layout page="home">
      <Head>
        <title>
          Home Page
        </title>
      </Head>
        <h1>hello next.js</h1>
      </Layout>

    </>
  )
}

export default HomePage;