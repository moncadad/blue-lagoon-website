import "./about.css";
import profileImg from "../../assets/owner.jpg";
function About() {
  return (
    <section id="about">
      <div className="wrapper mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="row  grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2  ">
          <div className="info-col flex flex-col justify-end sm:pb-10">
            <h1 className="title pb-20">About Us</h1>
            <h2 className="name ">Rebecca Jones </h2>
            <i className="subtitle block pb-2"> Owner of Blue Lagoon</i>
            <p className="md:max-w-120 pb-4">
              Welcome to Blue Lagoon, your ultimate dreamy coastal escape where
              beachside relaxation meets high-energy glamour. Located along the
              beautiful shores, Blue Lagoon is a vibrant, chic sanctuary
              designed for endless laughs, stunning aesthetics, and effortlessly
              bright days that turn into unforgettable nights.
            </p>
          </div>
          <div className="">
            <img
              src={profileImg}
              alt="Owner Rebecca Jones"
              className=" h-100 md:h-180  rounded-md object-cover object-top "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
