import item from "../models/habilidades";

function Habilidades() {
  return (
    <>
      <div id="servicos" className="block">
        <div className="container">
          <h2 className="title text-center">Habilidades</h2>
          <div className="row" id="servicos1">
            {item[0]}
          </div>
        </div>

        <h1></h1>

        <div id="clientes" className="block">
          <div className="container">
            <div className="col-md-12 align-self-center">
              <div className="row" id="habilidades">
                {item[1]}
              </div>
            </div>
          </div>
          <div id="link-projetos"></div>
        </div>
      </div>
    </>
  );
}

export default Habilidades;
