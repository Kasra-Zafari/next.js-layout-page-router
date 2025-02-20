import Link from "next/link";

const ProductDetailHeader = () => {
    return (
        <>
                <header>
                    <h1>Product Detail Header</h1>
                    <nav>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/about/company">Company</Link>
                        <Link href="/products">Products</Link>
                    </nav>
                </header>
        </>
    )
}

export default ProductDetailHeader;