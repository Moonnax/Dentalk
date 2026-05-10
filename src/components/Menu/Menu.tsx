import { Link } from "react-router-dom";

interface MenuProps {
  open: boolean;
}

function Menu({ open }: MenuProps) {
  const menuClass =
    "font-bold text-[1rem] no-underline text-[whitesmoke] bg-[#010817] p-2 inline-block hover:text-[#fd8b08]";

  return (
    <nav className={`flex justify-end bg-[#010817] ml-auto mr-8 ${open ? "pointer-events-auto" : ""}`}>
      <ul className="flex items-center text-center list-none gap-[0.8rem] ml-[12%]">
        
        <li><Link className={menuClass} to="/">Home</Link></li>
        <li><Link className={menuClass} to="/sobre">Sobre</Link></li>
        <li><Link className={menuClass} to="/faq">FAQ</Link></li>
        <li><Link className={menuClass} to="/contato">Contato</Link></li>
        <li><Link className={menuClass} to="/quemSomos">Quem Somos</Link></li>
        <li><Link className={menuClass} to="/Tdb">Turma Do Bem</Link></li>
        <li><Link className={menuClass} to="/missao">Missão</Link></li>
        <li><Link className={menuClass} to="/valores">Nossos valores</Link></li>

        <li>
          <Link
            className="font-bold text-[1rem] no-underline text-[whitesmoke] bg-[#9ac93d] p-2 inline-block rounded-[10%] hover:opacity-90"
            to="/areaVoluntario"
          >
            Login voluntário
          </Link>
        </li>

        <li>
          <Link
            className="font-bold text-[1rem] no-underline text-[whitesmoke] bg-[#fd8b08] p-2 inline-block rounded-[10%] hover:opacity-90"
            to="/areaFuncionario"
          >
            Login funcionário
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Menu;