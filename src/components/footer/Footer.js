import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <div className="footer-wrapper container">
          {new Date().getFullYear()} Copyright Text
          <a href="#">Repo</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
