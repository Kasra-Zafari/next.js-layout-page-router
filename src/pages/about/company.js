import Head from "next/head";
import Layout from "@/components/Layout";

const Company = () => {
    return (
        <>
            <Head>
                <title>
                    Company Page
                </title>
            </Head>
            <Layout page="company">
                <h1>Company</h1>
            </Layout>
        </>
    )
}

export default Company;