import "./Header.css";
import Menu from "../Menu/Menu";

type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ open, setOpen }: HeaderProps) {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <h1>🦷 DenTalk</h1>
        </a>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <Menu open={open} />
    </header>
  );
}

export default Header;