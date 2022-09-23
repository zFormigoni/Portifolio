import itens from "../models/header";

function showHeader() {
  const header = document.querySelector("#navbarMenu");
  if (header.className == "collapse navbar-collapse") {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
}

function Header() {
  return (
    <div id="header" className="active">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a href="#" className="navbar-brand">
            Formigoni
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarMenu"
            onClick={showHeader}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={"collapse navbar-collapse"} id="navbarMenu">
            {itens}
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
