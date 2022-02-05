import logosvg from "../../svg/logoSVG.svg";

const Header = () => {
  const descLogo = "Essa é a logo do Blog.";

  return (
    <>
      <header className="flex-space-between">
        <div>
          <img src={logosvg} alt={descLogo} />
        </div>
        <div className="search">
          <input type="text" name="search" className="inputSearch"/>
        </div>
        <div className="menu">
          <li>
            {" "}
            <a href="#" className="nav-link">Categories</a>
          </li>
          <li>
            {" "}
            <a href="#" className="nav-link">About</a>
          </li>
          <li>
            {" "}
            <a href="#" className="nav-link">Contact</a>
          </li>
        </div>
      </header>
    </>
  );
};

export default Header;
