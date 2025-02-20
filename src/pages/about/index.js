import Head from "next/head";
import Layout from "@/components/Layout";

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>
                    About Page
                </title>
            </Head>
            <Layout page="about">
                <h1>About Page</h1>
            </Layout>
        </>
    )
}

export default AboutPage;