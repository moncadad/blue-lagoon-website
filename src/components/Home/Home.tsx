import "./home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="wrapper text-center">
        <h1 className="title font-bold ">Blue Lagoon</h1>
        <p className="subtitle pt-14 text-center uppercase md:pt-0 ">
          Cocktails from paradise
        </p>
        <a
          href="#step1"
          className="cta-button mt-4 rounded-full  px-9 py-4 uppercase text-white"
        >
          Explore Cocktails
        </a>
      </div>
    </section>
  );
}

export default Home;
