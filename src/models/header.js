const lst_itens = [
  ["#", "Inicio"],
  ["#link-servicos", "Habilidades"],
  ["#link-projetos", "Projetos"],
  ["#link-contato", "Contato"],
];

function create_header(href, name, index) {
  return (
    <li className="nav-item" key={index}>
      <a className="nav-link active" href={href}>
        {name}
      </a>
    </li>
  );
}

function header_itens(lst) {
  const lst_itens = [];
  for (let i = 0; i < lst.length; i++) {
    const item = create_header(lst[i][0], lst[i][1], i);
    lst_itens[i] = item;
  }
  return lst_itens;
}

const itens = (
  <ul className="navbar-nav" key={"keyHeader"}>
    {header_itens(lst_itens)}
  </ul>
);
export default itens;
