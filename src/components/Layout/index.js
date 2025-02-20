import Footer from "../Footer/Footer";
import HomeHeader from "../HomeHeader";
import AboutHeader from "../AboutHeader";
import ProductsHeader from "../ProductsHeader";

const Layout =({children, page})=>{
    return(
        <>
        {page === "home" && <HomeHeader/>}
        {page === "about" && <AboutHeader/>}
        {page === "products" && <ProductsHeader/>}
        <main>{children}</main>
        <Footer/>
        </>
    )
}
export default Layout;