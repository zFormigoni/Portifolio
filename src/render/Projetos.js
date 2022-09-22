import itens from "../models/projetos";

function Projetos() {
  return (
    <>
      <div id="servicos" className="block">
        <div className="container">
          <h2 className="title text-center" key={"keyProjetosh2"}>
            Projetos
          </h2>
          {/* <div className="button-group" id="btn-group"></div> */}
          <div className="row grid" id="projetos1" key={"keyProjetos"}>
            {itens}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projetos;
