const MenuComponent = ({ menu, menuid }) => {
  return (
    <div className="flex flex-col mr-10 items-center cursor-pointer">
      <span
        data-hover={menu.name}
        className={`block text-white font-medium text-lg relative cursor-pointer ${
          menu.id === menuid
            ? `text-[#FF9001] after:duration-300 after:content-[attr(data-hover)] after:absolute after:left-1/2 after:top-3/4 after:opacity-0 after:-translate-x-1/2 hover:after:top-1/2 hover:after:opacity-100 after:hover:-translate-x-1/2 after:hover:-translate-y-1/2 before:absolute before:h-[6px] before:w-[6px] before:rounded-full before:bg-[#FF9001] before:left-1/2 before:-translate-x-1/2 before:-bottom-3`
            : ``
        }`}
      >
        <span className="block duration-300">{menu.name}</span>
      </span>
    </div>
  );
};

export default MenuComponent;
