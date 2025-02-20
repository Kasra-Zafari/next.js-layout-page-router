import Head from "next/head";
import Layout from "@/components/Layout";

const AboutPage = () => {
    return (
        <>
            <Layout page="about">
            <Head>
                <title>
                    About Page
                </title>
            </Head>
                <h1>About Page</h1>
            </Layout>
        </>
    )
}

export default AboutPage;