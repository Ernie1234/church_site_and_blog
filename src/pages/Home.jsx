import About from "../components/About";
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
      <div className="bg-white dark:bg-gray-900">
        <section id="program" className="snap-start">
          <HorizontalScroll />
        </section>
        <HomeBlogSection header="Our Blog" />
        <section id="about" className="snap-start">
          <About />
        </section>
        <section id="contact" className="snap-start">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
