import styles from "../../styles/ultisCss/DropdownMenu.module.css";

function DropdownMenu({ open }) {
  if (!open) {
    return null;
  }

  function toggleCollapse(e) {
    const el = e.target.nextElementSibling;
    if (el.classList.contains(styles.show)) {
      el.classList.remove(styles.show);
    } else {
      el.classList.add(styles.show);
    }
  }

  return (
    <ul className={styles.showDrop}>
      {menuItems.map((item, index) => (
        <li key={index} className={styles.dropItem}>
          <label onClick={toggleCollapse}>{item.name}</label>
          <div className={styles.dropItemCollapse}>
            {item.locations.map((location, locIndex) => (
              <a key={locIndex} href="#">
                {location.name} <br />
                {location.address}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

const menuItems = [
  {
    name: "Minas Gerais",
    locations: [
      { name: "Ipatinga", address: "Av. Gerasa, 1447" },
      { name: "Uberlândia", address: "Avenida João Naves de Ávila, Nº 5050 - Pampulha" },
      { name: "Caratinga", address: "Rua Engenheiro Herbert, 135" }
    ]
  },
  {
    name: "São Paulo",
    locations: [
      { name: "São José dos Campos", address: "R. Dolzani Ricardo, 317" },
      { name: "São Paulo", address: "Rua João Martins, N 448- Parque Cruzeiro Do Sul" },
      { name: "São Paulo", address: "Praça da República, 468, sala 41" }
    ]
  },
  {
    name: "Mato Grosso do Sul",
    locations: [
      { name: "Campo Grande", address: "Rua José Bernardes de Mesquita, nº258, Vila Duque de Caxias" }
    ]
  },
  {
    name: "Mato Grosso",
    locations: [
      { name: "Campo Verde", address: "Rua Maximo Barbieri, Nº 27, Loteamente Greenville" }
    ]
  },
  {
    name: "Santa Catarina",
    locations: [
      { name: "Itapoa", address: "Avenida Taruma, Nº 147, Balneário Cambiju" }
    ]
  },
  {
    name: "Espirito Santo",
    locations: [
      { name: "Pinheiros", address: "Rua Henrique Ayres, Nº 455, Canário" }
    ]
  },
  {
    name: "Distrito Federal",
    locations: [
      { name: "Brasília", address: "SHIN CA 09 LT 07 - LAGO NORTE" }
    ]
  },
  {
    name: "Goias",
    locations: [
      { name: "Aruanã", address: "Rua Gravata, Colégio Darcy Bandeira, Setor Encontro dos Rios" },
      { name: "Britãnia", address: "Rua 3 - A 0 Outros Escola Eugênio Gama, Vila Mutirão" },
      { name: "Mozarlãndia", address: "Rua dos Estudantes, Q.1., L1, S/N, ES.CG/SEC, Educação, Santa Mônica" }
    ]
  },
  {
    name: "Rio de Janeiro",
    locations: [
      { name: "Duque de Caxias", address: "Avenida Doutor Plinio Casado, Nº 40 - Salas 402, 403, 404 Bairro: Centro Cep: 25.020-010" }
    ]
  }
];

export default DropdownMenu;
