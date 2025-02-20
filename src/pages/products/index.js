import Head from "next/head";
import { useEffect, useState } from "react";

const ProductsPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
    }, [])

    console.log(products);
    

    return (
        <>
            <Head>
                <title>
                    Products Page
                </title>
            </Head>
            <h1>Products</h1>
        </>
    )
}

export default ProductsPage;