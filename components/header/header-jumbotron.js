import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../shared/logo";
import MenuComponent from "./menu-component";
import style from "./style.module.css";

const HeaderJumbotron = () => {
  const [activemenuid, setactivemenuid] = useState(1);
  const menus = [
    {
      id: 1,
      name: "Home",
      path: "section1",
    },
    {
      id: 2,
      name: "About",
      path: "section2",
    },
    {
      id: 3,
      name: "Experience",
      path: "section3",
    },
    {
      id: 4,
      name: "Blogs",
      path: "section4",
    },
    {
      id: 6,
      name: "Contact",
      path: "section5",
    },
  ];

  const onMenuClick = (menu) => {
    setactivemenuid(menu.id);
  };

  return (
    <div className="flex justify-between items-center pl-20 pr-20 h-20 bg-[#202020] w-full fixed z-[99]">
      <Logo />
      <div className="flex justify-between items-center">
        {menus.map((menu) => (
          <Link
            key={menu.id}
            to={menu.path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => onMenuClick(menu)}
          >
            <MenuComponent menu={menu} menuid={activemenuid} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderJumbotron;
