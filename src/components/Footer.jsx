import logo from "../assets/images/cwlogo.png";
const Footer = () => {
  return (
    <div className="bg-gray-600 flex flex-col justify-center items-center gap-10 py-6 text-white text-lg">
      <p>Clarusway Web Design, Copyright &copy; {new Date().getFullYear()}</p>
      <img src={logo} alt="clarusway logo" />
    </div>
  );
};
export default Footer;