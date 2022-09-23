import item from "../models/sobre";

function Sobre() {
  return (
    <>
      <div id="sobre" className="block sobre-div">
        <div className="container" id="sobre1">
          <div className="row">{item}</div>
        </div>
        <div id="link-servicos"></div>
      </div>
    </>
  );
}

export default Sobre;
