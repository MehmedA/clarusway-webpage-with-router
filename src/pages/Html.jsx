import { Link } from "react-router-dom";
import html from "../assets/images/logo_html.png";
const Html = () => {
  return (
    <div>
      <div className="card py-4 px-10 flex flex-col">
        <div>
          <img
            src={html}
            alt="html"
            className="m-auto w-1/3 md:w-1/4 lg:w-1/5"
          />
        </div>
        <h3 className="font-bold py-2 text-xl text-center">HTML5 Markup</h3>
        <p>
          HTML (Hypertext Markup Language) is the standard markup language used
          to create web pages. It is a language that describes the structure and
          content of a web page using a set of tags and attributes. HTML
          documents are made up of elements, which are defined by opening and
          closing tags that surround the content. Elements can contain other
          elements, forming a hierarchical structure known as the Document
          Object Model (DOM). The DOM is a representation of the HTML document
          that can be manipulated and accessed using JavaScript. HTML is an
          important part of web development and is used in conjunction with CSS
          (Cascading Style Sheets) and JavaScript to create interactive and
          visually appealing web pages.
        </p>
        <p className="py-6">
          HTML is a markup language, which means it is used to add semantic
          meaning to the content of a web page. It provides a way to structure
          content into headings, paragraphs, lists, and other meaningful
          elements. HTML also includes support for multimedia content, such as
          images and videos, and can be used to embed other types of content,
          such as maps, forms, and social media feeds. HTML is a versatile
          language that can be used to create simple static web pages or complex
          web applications. It is a foundational technology of the World Wide
          Web and is essential for anyone looking to become a web developer or
          create their own website.
        </p>
        <Link to={"/"} className="text-center">
          <button className="py-2 px-4 text-white bg-red-500">Go Back</button>
        </Link>
      </div>
    </div>
  );
};
export default Html;