import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBlogSection from "../components/HomeBlogSection";
import HorizontalScroll from "../components/HorizontalScroll";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <section id="program" className="snap-start"></section>
      <HorizontalScroll />
      <HomeBlogSection />
      <Footer />
    </>
  );
}

export default Home;
