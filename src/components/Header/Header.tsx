import { useState } from "react";
import "./Header.css";
import Menu from "../Menu/Menu";

function Header() {
  const [open, setOpen] = useState(false);
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