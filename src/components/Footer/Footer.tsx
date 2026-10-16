import "./footer.css";
import { FaXTwitter, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="items-top grid grid-cols-1 gap-10 sm:grid-cols-3 md:justify-items-center">
          <div className="col footer__quote">
            <h1 className="logo  pb-4 text-4xl">Blue Lagoon</h1>
            <p className="col-p pb-4 ">
              Cocktails from paradise that will have you feeling like you're on
              a never ending vacation.
            </p>
          </div>
          <div className="">
            <h1 className="col-title pb-4 ">Follow Us</h1>
            <ul className="social-links flex gap-6 text-lg">
              <li className="social-link">
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li className="social-link">
                <a href="#">
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-link">
                <a href="#">
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>
          <div className="email">
            <h1 className="col-title pb-2  ">Contact Us</h1>
            <div className="col-p">
              <p>We appreciate your feedback</p>
              <a href="mailto:bluelagoon@domain.com" className="email-link  ">
                <FaEnvelope className="email-icon inline" />
                bluelagoon@domain.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
