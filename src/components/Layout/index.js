import Footer from "../Footer/Footer";
import HomeHeader from "../HomeHeader";
import AboutHeader from "../AboutHeader";
import ProductsHeader from "../ProductsHeader";
import CompanyHeader from "../CompanyHeader";
import ProductDetailHeader from "../ProductDetailHeader";

const Layout =({children, page})=>{
    return(
        <>
        {page === "home" && <HomeHeader/>}
        {page === "about" && <AboutHeader/>}
        {page === "products" && <ProductsHeader/>}
        {page === "company" && <CompanyHeader/>}
        {page === "ProductDetail" && <ProductDetailHeader/>}
        <main>{children}</main>
        <Footer/>
        </>
    )
}
export default Layout;