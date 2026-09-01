export default function Footer() {
  return (
    <footer>

      <div className="footer-logo">

        <strong>
          RIJ
        </strong>

        <span>
          PHOTOGRAPHY
        </span>

      </div>


      <div>

        <p>
          Photography • Prints • Framing
        </p>

        <p>
          © {new Date().getFullYear()} RiJ Photography
        </p>

      </div>

    </footer>
  );
}