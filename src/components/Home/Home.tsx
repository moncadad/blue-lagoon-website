import "./home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="wrapper">
        <h1 className="title">Blue Lagoon</h1>
        <p className="subtitle">Cocktails from paradise</p>

        <a href="#step1">
          {" "}
          <button className="cta-button mt-4  px-12 py-3 ">
            Explore Cocktails
          </button>
        </a>
      </div>
    </section>
  );
}

export default Home;
