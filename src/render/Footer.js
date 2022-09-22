import itens from "../models/footer";

export default function Footer() {
  return (
    <>
      <footer className="footer" id="link-contato">
        <div className="container">
          <footer className="row">
            <div className="footer-col">{itens}</div>
          </footer>
        </div>
      </footer>
    </>
  );
}
