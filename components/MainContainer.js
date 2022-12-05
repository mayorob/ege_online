import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsJournalBookmarkFill,
} from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineMenuFold } from "react-icons/ai";

const MainContainer = ({ children, keywords }) => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menu = [
    { title: "Главная" },
    {
      title: "Предметы",
      submenu: true,
      icon: <BsJournalBookmarkFill />,
      submenuItems: [
        { title: "Русский язык" },
        { title: "Математика" },
        { title: "Обществознание" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <meta keywords={keywords}></meta>
        <title>EGE.onlne</title>
      </Head>
      <div className="flex">
        <div
          className={`bg-dark-purple sticky left-0 top-0 h-screen p-5 pt-8 ${
            open ? "w-64" : "w-20"
          } ${!open && "hidden"} duration-200 relative`}
        >
          <AiOutlineMenuFold
            className={`bg-transparent text-white
          text-3xl rounded absolute right-6 top-9 border border-dark-purple
          cursor-pointer ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <h1
              className={`text-white origin-center duration-300 font-medium text-3xl ${
                !open && "scale-0"
              }`}
            >
              EGE.ONLINE
            </h1>
          </div>
          <div
            className={`flex items-center rounded-md bg-light-white mt-6 py-2 ${
              !open ? "px-2.5" : "px-4"
            }`}
          >
            <BsSearch
              className={`text-white text-lg block float-left cursor-pointer ${
                open && "mr-2"
              }`}
            />
            <input
              type={"search"}
              placeholder="Искать"
              className={`text-base bg-transparent w-full duration-500 focus:outline-none text-white ${
                !open && "hidden"
              }`}
            />
          </div>
          <ul>
            {Menu.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white
              rounded-md ${menu.spacing ? "mt-9" : "mt-2"} ${
                    !open && "hover:cursor-default"
                  }`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <RxDashboard />}
                  </span>
                  <span
                    className={`text-base font-custom flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <BsChevronDown
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => {
                        setSubmenuOpen(!submenuOpen);
                      }}
                    />
                  )}
                </li>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white
                      rounded-md px-5"
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          
          <header className={`sticky left-0 top-0 h-20 duration-300 bg-dark-purple ${open && ""}`}>
          <AiOutlineMenuFold
            className={`bg-transparent text-white
          text-4xl rounded absolute left-4 top-[25px] border border-dark-purple
          cursor-pointer ${!open ? "rotate-180" : "hidden"}`}
            onClick={() => setOpen(!open)}
          />
            <h1 className={`text-white text-center duration-300 pt-6 font-medium text-3xl ${open && "hidden duration-200"}`}>EGE.ONLINE</h1>
          </header>
        </div>
      </div>

      <div>{children}</div>
    </>
  );
};

export default MainContainer;
