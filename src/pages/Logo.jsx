import { Link } from "react-router-dom";
import logo from "../assets/images/logo_brush.png";
const Logo = () => {
  return (
    <div>
      <div className="card p-4 text-center flex flex-col container mx-auto gap-2">
        <div>
          <img
            src={logo}
            alt="css"
            className="m-auto w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
        <h3 className="font-bold text-xl">Graphic Design</h3>
        <p>
          Graphic design is a visual form of communication that utilizes various
          elements, such as typography, color, images, and layout to convey
          information and ideas. It involves creating designs for a wide range
          of mediums, including digital and print media, advertising, branding,
          and packaging. The primary goal of graphic design is to communicate a
          message or idea effectively to the audience. A graphic designer's role
          is to understand the client's needs, target audience, and objectives
          to create designs that are visually appealing, engaging, and easy to
          understand. They use various software tools such as Adobe Photoshop,
          Illustrator, and InDesign to create their designs.
        </p>
        <p>
          Graphic design has a significant impact on our daily lives, from the
          packaging of the products we buy to the websites we visit. Good
          graphic design can enhance the user experience, attract attention, and
          communicate complex information effectively. It is a critical
          component of branding and marketing strategies as it helps businesses
          to stand out in a crowded marketplace. By creating unique and
          memorable designs, graphic designers can help organizations establish
          a distinct brand identity that resonates with their target audience.
          As technology continues to evolve, the demand for skilled graphic
          designers will continue to grow, making it an exciting and challenging
          career path for those who have a passion for creativity and visual
          communication.
        </p>
        <Link to={"/"} className="text-center">
          <button className="py-2 px-4 text-white bg-red-500">Go Back</button>
        </Link>
      </div>
    </div>
  );
};
export default Logo;