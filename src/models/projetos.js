import naruto from "../img/projetos/8.png";
import pokedex from "../img/projetos/7.png";
import jogo_mario from "../img/projetos/6.png";
import jogo_memoria from "../img/projetos/5.png";
import jogo_forca from "../img/projetos/4.png";
import controle_financeiro from "../img/projetos/3.png";
import ecomerce from "../img/projetos/2.png";
import netflix from "../img/projetos/1.png";

const lst_itens = [
  [netflix, "Interface da netflix desenvolvida com um tema de jogos", "jogos"],
  [
    ecomerce,
    "E-comerce desenvolvido como projeto final do bootcamp pela DIO",
    "E-comerce",
  ],
  [
    controle_financeiro,
    "Projeto de controle financeiro desenvolvido para treinar React",
    "Finanças",
  ],
  [
    jogo_forca,
    "Jogo da Forca simples desenvolvido para treinar js",
    "Jogo da Forca",
  ],
  [
    jogo_memoria,
    "Jogo da Memoria simples desenvolvido para treinar js",
    "Jogo da Memoria",
  ],
  [
    jogo_mario,
    `Jogo estilo o "jogo do dinossauro" do Chrome, com o tema do Super Mario `,
    "Super Mario",
  ],
  [pokedex, "Pokedex que consome uma api de pokemons ", "Pokedex"],
  [
    naruto,
    "Aplicação que consome uma api de Naruto com e exibe frases dos personagens",
    "Quote No Jutsu",
  ],
];

function ProjetosModel({ img, titulo, info }) {
  return (
    <div className="col-lg-4 col-6 mb-4 element-item ">
      <a className="popup-link" href={img}>
        <div className="containerProjetos">
          <img className="img-fluid mb-2" src={img}></img>
          <div className="legenda">
            <h4 className="text-uppercase legenda">{titulo}</h4>
            <h6 className="legenda">{info}</h6>
          </div>
        </div>
      </a>
    </div>
  );
}

const createItem = (lst_info) => {
  const lst = [];
  for (let i = 0; i < lst_info.length; i++) {
    const item = (
      <ProjetosModel
        img={lst_info[i][0]}
        titulo={lst_info[i][2]}
        info={lst_info[i][1]}
        key={i}
      ></ProjetosModel>
    );

    lst[i] = item;
  }

  return lst;
};

const itens = createItem(lst_itens);

export default itens;

/* 
!const lst_buttons = [
  ["*", "Todos", "btn-all"],
  [".website", "Website"],
  [".jogos", "Jogos"],
  [".api", "APIs"],
]; 

! const createBtns = () => {
  const lst_btns = [];
  for (let i = 0; i < lst_buttons.length; i++) {
    const item = ProjetosBtnModel(
      lst_buttons[i][0],
      lst_buttons[i][1],
      lst_buttons[i][2]
    );
    lst_btns[i] = item;
  }
  return lst_btns;
}; 

!function ProjetosBtnModel(filter, name, id = "") {
  return (
    <button class="" type="button" data-filter={filter} id={id}>
      {name}
    </button>
  );
}

! itens[1] = createBtns(lst_buttons); 
*/
