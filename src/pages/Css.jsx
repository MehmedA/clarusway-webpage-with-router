import { Link } from "react-router-dom";
import css from "../assets/images/logo_css.png";
const Css = () => {
  return (
    <div>
      <div className="card p-4 flex flex-col container mx-auto gap-2">
        <div>
          <img src={css} alt="css" className="m-auto w-1/3 md:w-1/4 lg:w-1/5" />
        </div>
        <h3 className="font-bold text-xl text-center">CSS3 Styling</h3>
        <p>
          Cascading Style Sheets (CSS) is a style sheet language used to
          describe the presentation of markup languages like HTML and XML. CSS
          provides a way to separate document content from its presentation,
          allowing for more flexible and efficient website design. CSS works by
          targeting HTML elements and applying various styles, such as font,
          color, and layout, to those elements. Styles can be applied in several
          ways, including inline, embedded, and external stylesheets. With CSS,
          web designers can create a consistent and visually appealing user
          experience across multiple web pages, while also making it easier to
          maintain and update the website's design.
        </p>
        <p>
          CSS also provides a wide range of tools and features that enable
          designers to create dynamic and responsive web layouts. For example,
          CSS supports media queries, which allow designers to create different
          stylesheets for different device types, such as desktop computers,
          tablets, and smartphones. Additionally, CSS can be used in conjunction
          with JavaScript to create interactive web elements, such as drop-down
          menus, sliders, and animations. With CSS, designers have the
          flexibility to create websites that not only look great, but also
          function smoothly and intuitively, enhancing the overall user
          experience.
        </p>
        <Link to={"/"} className="text-center">
          <button className="py-2 px-4 text-white bg-red-500">Go Back</button>
        </Link>
      </div>
    </div>
  );
};
export default Css;