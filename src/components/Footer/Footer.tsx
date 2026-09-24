import "./footer.css";
import { FaXTwitter, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa6";
import logo from "../../assets/BlueLagoonColor.svg";

function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="items-top grid grid-cols-1 gap-10 sm:grid-cols-3 md:justify-items-center">
          <div className="col footer__quote">
            <img src={logo} alt="" className="w-32 pb-4" />
            <p className="col-title pb-4 ">
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
            <p>We appreciate your feedback</p>
            <a href="mailto:bluelagoon@domain.com" className="email-link  ">
              <FaEnvelope className="inline" />
              alchemybar@email.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
