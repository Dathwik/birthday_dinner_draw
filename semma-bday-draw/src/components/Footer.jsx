function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Birthday Dinner Draw</p>
      <p className="footer-note">
        This draw is independently hosted and not affiliated with Semma.
      </p>
    </footer>
  );
}

export default Footer;
