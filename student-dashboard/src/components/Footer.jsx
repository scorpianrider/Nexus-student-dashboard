import "../css/common.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Nexus College of Engineering. All rights reserved.</p>
      <p className="footer-sub">Student Information System </p>
    </footer>
  );
};

export default Footer;
