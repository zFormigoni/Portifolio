import destaque1 from "../img/habilidades/destaque1.svg";
import destaque2 from "../img/habilidades/destaque2.svg";
import destaque3 from "../img/habilidades/destaque3.svg";
import destaque4 from "../img/habilidades/destaque4.svg";
import android from "../img/habilidades/icons/android.svg";
import bootstrap from "../img/habilidades/icons/bootstrap.svg";
import css from "../img/habilidades/icons/css.svg";
import docs from "../img/habilidades/icons/docs.svg";
import html from "../img/habilidades/icons/html.svg";
import java from "../img/habilidades/icons/java.svg";
import js from "../img/habilidades/icons/js.svg";
import mongodb from "../img/habilidades/icons/mongodb.svg";
import mysql from "../img/habilidades/icons/mysql.svg";
import node from "../img/habilidades/icons/node.svg";
import python from "../img/habilidades/icons/python.svg";
import react from "../img/habilidades/icons/react.svg";

const lst_servicos = [
  [destaque1, "Front-End", "HTML5, CSS, ReactJS, BootStrap..."],
  [destaque2, "Back-End", "JavaScript, Java, Python, NodeJS"],
  [destaque3, "Database", "MySQL, PostgreSQL, MongoDB"],
  [destaque4, "Android", "Desenvolvimento de Apps  Android"],
];

const lst_icons = [
  html,
  css,
  react,
  bootstrap,
  js,
  java,
  python,
  node,
  mysql,
  mongodb,
  android,
  docs,
];

function Habilidades_item({ img, h5, paragrafo }) {
  return (
    <>
      <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
        <a className="destaque">
          <div className="img-container mb-3">
            <img className="img-fluid" src={img}></img>
          </div>
          <h5 className="text-uppercase">{h5}</h5>
          <p className="mb-0">{paragrafo}</p>
        </a>
      </div>
    </>
  );
}

function Habilidades_icon({ img }) {
  return (
    <>
      <div className="col-sm-1 col-6 mb-1">
        <a className="link-cliente">
          <img className="img-fluid" src={img}></img>
        </a>
      </div>
    </>
  );
}

const destaque_model = (img, h5, paragrafo, index) => {
  return (
    <Habilidades_item
      key={index}
      img={img}
      h5={h5}
      paragrafo={paragrafo}
    ></Habilidades_item>
  );
};

function create_Hab_item(lst) {
  const lst_destaques = [];
  for (let i = 0; i < lst.length; i++) {
    const item = destaque_model(lst[i][0], lst[i][1], lst[i][2], i);
    lst_destaques[i] = item;
  }
  return lst_destaques;
}

function habilidades_model(img, index) {
  return <Habilidades_icon img={img} key={index}></Habilidades_icon>;
}

const create_icons = (lst) => {
  const lst_icones = [];
  for (let i = 0; i < lst.length; i++) {
    const item = habilidades_model(lst[i], i);
    lst_icones[i] = item;
  }
  return lst_icones;
};

const item = [];
item[0] = create_Hab_item(lst_servicos);
item[1] = create_icons(lst_icons);

export default item;
