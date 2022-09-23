import itens from "../models/header";

function Header() {
  return (
    <div id="header" className="active">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <a href="#" class="navbar-brand">
            Formigoni
          </a>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarMenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarMenu">
            {itens}
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header;
