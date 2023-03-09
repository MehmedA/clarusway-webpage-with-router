import html from "../assets/images/logo_html.png";
import css from "../assets/images/logo_css.png";
import graphic from "../assets/images/logo_brush.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="text-center justify-center flex flex-col sm:flex-row">
      <div className="card p-4 text-center">
        <Link to={"/html"}>
          <img src={html} alt="html" className="m-auto w-1/3 sm:w-1/2" />
        </Link>
        <h3 className="font-bold py-2">HTML5 Markup</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          quis voluptatem corporis.
        </p>
      </div>
      <div className="card p-4 text-center">
        <Link to={"/css"}>
          <img src={css} alt="" className="m-auto w-1/3 sm:w-1/2" />
        </Link>
        <h3 className="font-bold py-2">CSS3 Styling</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          quis voluptatem corporis.
        </p>
      </div>
      <div className="card p-4 text-center">
        <Link to={"/logo"}>
          <img src={graphic} alt="" className="m-auto w-1/3 sm:w-1/2" />
        </Link>
        <h3 className="font-bold py-2">Graphic Design</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          quis voluptatem corporis.
        </p>
      </div>
    </div>
  );
};
export default Card;