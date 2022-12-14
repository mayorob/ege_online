import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { SiS7Airlines, SiTelegram } from "react-icons/si";
import { SlSocialVkontakte } from "react-icons/sl";
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
      <div className="absolute inset-0 flex">
        <div
          className={`bg-dark-purple sticky left-0 top-0 h-screen p-5 pt-8 ${
            open ? "w-full" : "w-20 h-24"
          } duration-200 relative`}
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
              !open ? "hidden" : "px-2.5"
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
                    !open && "hidden"
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
          <h1 className={`text-white pt-6 origin-center text-center duration-300 font-medium text-2xl ${
                    !open && "hidden"
                  }`}>Контакты</h1>
          <div className={`flex flex-1 justify-center duration-300 mx-2 pt-3 gap-3 ${
                    !open && "hidden"
                  }`}>
          <Link href="https://t.me/suprabots" className=" text-white
          text-3xl rounded border border-dark-purple
          cursor-pointer">
            <SiTelegram className=" text-sky-500" />
          </Link>
          <Link href="https://vk.com" className=" text-white
          text-3xl rounded bottom-96 border border-dark-purple
          cursor-pointer">
            <SlSocialVkontakte className=" text-sky-500" />
          </Link>
          </div>
          
        </div>
      </div>

      <div className="flex">{children}</div>
    </>
  );
};

export default MainContainer;
