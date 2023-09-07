import Footer from "../components/Footer";
import Header from "../components/Header";
import HorizontalScroll from "../components/HorizontalScroll";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <section id="program" className="snap-start"></section>
      <HorizontalScroll />
      <Footer />
    </>
  );
}

export default Home;
