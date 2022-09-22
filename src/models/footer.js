const lst_footer = [
  ["mailto:vitor.formigoni@gmail.com", "vitor.formigoni@gmail.com"],
  ["https://www.instagram.com/_formigoni_/", "Instagram"],
  ["https://github.com/zformigoni", "GitHub"],
  ["https://www.linkedin.com/in/vitor-formigoni/", "Linkedin"],
];

function footer_item(referece, name, key) {
  return (
    <li key={"footer" + key}>
      <a href={referece} target="_blank">
        {name}
      </a>
    </li>
  );
}

function footer_itens(lst) {
  const itens = [];
  for (let i = 0; i < lst.length; i++) {
    const item = footer_item(lst[i][0], lst[i][1], i);
    itens[i] = item;
  }

  return (
    <div className="footer-col">
      <h4>contato</h4>
      <ul>{itens}</ul>
    </div>
  );
}

const itens = footer_itens(lst_footer);

export default itens;
