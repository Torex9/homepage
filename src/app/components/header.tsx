import { useState } from "react";

interface HeaderPropTypes {
  logoSrcurl: string;
  menuIconUrl: string;
  closeMenuIconUrl: string;
  links: { text: string; url: string }[];
}

const Header = ({
  logoSrcurl,
  menuIconUrl,
  closeMenuIconUrl,
  links,
}: HeaderPropTypes) => {
  const [buttonClick, setButtonClick] = useState(false);

  function handleClick() {
    setButtonClick(!buttonClick);
  }

  return (
    <header className="max-w-full mt-4 mx-10 relative mb-[50px] md:max-w-full md:mt-4 md:mx-20 ">
      <img src={logoSrcurl} alt="Page logo" />
      <button
        onClick={handleClick}
        id="open-menu-btn"
        className=" md:hidden lg:hidden bg-transparent border-none hover:cursor-pointer absolute right-0 top-[13px]"
      >
        <img src={menuIconUrl} alt="Icon menu" />
      </button>
      {/* div below is a filter when nav is opened */}
      <div
        className={`${
          buttonClick ? "" : "hidden"
        } w-screen min-h-screen fixed z-[5] left-0 top-0 bg-slate-950 opacity-20 `}
      ></div>
      {/*   Nav below is hidden */}
      <nav
        className={`${
          buttonClick ? "" : "hidden"
        } md:inline-block md:absolute md:h-auto md:p-0 md:top-[13px] w-[70vw] max-w-[300px] h-screen fixed z-10 pt-[150px] pl-10 right-0 top-0 bg-white`}
      >
        <button
          onClick={handleClick}
          id="close-menu-btn"
          className="md:hidden bg-transparent border-none hover:cursor-pointer absolute right-5 top-5"
        >
          <img src={closeMenuIconUrl} alt="Icon menu close" />
        </button>
        <ul className=" md:flex md:absolute md:gap-5 md:right-0 md:top-0 lg:gap-10">
          {links.map((link) => (
            <li className="list-none mb-[25px] font-sans font-normal text-xl">
              <a
                className="no-underline text-slate-500 hover:text-red-400"
                href={link.url}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
