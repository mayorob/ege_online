import Link from "next/link";

import Head from "next/head";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <MainContainer keywords={"main_page"}>
      <div className="flex-1">
        <div className="bg-dark-purple   h-screen">
          <div className="flex-1 justify-center items-center">
            <hi className="text-white pt-64 origin-center duration-300 font-medium text-3xl flex justify-center items-center">
              Добро пожаловать!
            </hi>
            <h2 className="text-white origin-center pt-3 text-center duration-300 font-medium text-xl flex justify-center items-center">
              EGE.ONLINE — сайт с полезными материалами ЕГЭ
            </h2>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Index;
