import eu from "../img/eu.png";

const conteudo = [
  ["Vitor Formigoni", "Full Stack Developer"],
  [
    `Programador e desenvolvedor há 2 anos. Teve início na carreira em
  2019 quando descobriu seu gosto por códigos.`,
    `Seu primeiro projeto foi em um curso de Python quando tinha 17
  anos, que despertou seu gosto por códigos, a partir daí começou a
  fazer diversos cursos com projetos externos das mais diversas
  formas, Websites, Aplicativos, Sistemas, adquirindo conhecimento
  nas diversas linguagens de programação hoje utilizadas no mercado.`,
    `Continua gostando de desafios e ideias inovadoras, atualmente
  divide seu tempo entre faculdade, estudos de programação e novos
  projetos.`,
  ],
  eu,
];

function create_div_img(img) {
  return (
    <div
      className="col-md-6 align-self-center text-center order-md-1 order-2"
      key={"keyDivImgSobre"}
    >
      <img className="img-fluid img-eu" src={img}></img>
    </div>
  );
}

function create_div_text(lst) {
  return (
    <div
      className="col-md-6 align-self-center order-md-2 order-1 mb-md-0 mb-4"
      key={"keyDivTextSobre"}
    >
      <h2 className="title">{lst[0][0]}</h2>
      <h6 className="subtitle">{lst[0][1]}</h6>
      {create_paragrafo(lst[1])}
    </div>
  );
}

function create_paragrafo(lst) {
  const lst_p = [];
  for (let i = 0; i < lst.length; i++) {
    lst_p[i] = (
      <p className="sobre" key={i}>
        {lst[i]}
      </p>
    );
  }

  return lst_p;
}

function createSobre(lst) {
  const lst_itens = [];
  lst_itens[0] = create_div_img(lst[2]);
  lst_itens[1] = create_div_text(lst);
  return lst_itens;
}
const item = createSobre(conteudo);
export default item;
