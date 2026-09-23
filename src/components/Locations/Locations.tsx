import "./locations.css";
import { FaLocationDot } from "react-icons/fa6";
function Locations() {
  return (
    <section id="locations">
      <div className="wrapper mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className="title pb-20">Locations</h1>
        <div className="row  grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4  ">
          <div className="col">
            <h1 className="pb-2  pl-5">Laguna Beach, CA</h1>
            <p className="address">
              <FaLocationDot className="icon inline " />
              Broadway St & Pacific Coast Hwy, <br /> Laguna Beach, CA 92651
            </p>
          </div>
          <div className="col">
            <h1 className="pb-2  pl-5">Malibu, CA</h1>
            <p className="address">
              <FaLocationDot className="icon inline " />
              Malibu Beach, <br /> Malibu, CA 90265
            </p>
          </div>
          <div className="col">
            <h1 className="pb-2  pl-5">Destin, FL</h1>
            <p className="address">
              <FaLocationDot className="icon inline " />
              1700 Scenic Hwy 98, <br />
              Destin, FL 32541
            </p>
          </div>
          <div className="col">
            <h1 className="pb-2 pl-5">Cabo San Lucas, MX</h1>
            <p className="address">
              <FaLocationDot className="icon  " />
              Cormoranes SN, El medano
              <br />
              23453 Cabo San Lucas Mexico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Locations;
