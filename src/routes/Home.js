import Destination from "../Components/Destination"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Product from "../Components/Product"
function Home() {
  return (
    <>
      <Navbar/>
      <Hero
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Make Your Home Modern Design."
      text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus modi illum cumque velit consectetur?" 
      buttonText="Shop now"
       url ="/"
        btnClass="show"

      />
      <Destination/>

      <Product/>
      <Footer/>
    </>
  )
}

export default Home
