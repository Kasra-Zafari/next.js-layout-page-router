import Header from "../Header";
import Footer from "../Footer/Footer";

const Layout =({children})=>{
    return(
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}
export default Layout;