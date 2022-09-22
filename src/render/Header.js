import itens from "../models/header";

function Header() {
  return (
    <div id="header" className="active">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
          <div className="collapse navbar-collapse" id="navbarNav">
            {itens}
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
