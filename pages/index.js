import Link from "next/link";

import Head from "next/head";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer"

const Index = () => {
  return (
    <MainContainer keywords={"main_page"}>
      <div className="py-5 px-72 min-h-screen text-white font-custom text-center bg-[#17212B]">
        <div>
          <h1 className="text-5xl py-2 ">EGE.ONLINE</h1>
          <h2 className="text-2xl mb-11">Полезные материалы ЕГЭ</h2>
          <h2 className="text-2xl mb-7">Предметы</h2>
        </div>
        <div class="flex justify-center gap-10">
          <div class="block p-6 rounded-xl shadow-lg bg-teal-100 max-w-sm">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
              Русский язык
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Все полезные материалы ЕГЭ для подготовки к экзамену по русскому
              языку.
            </p>
            <Link
              href='/social'
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Перейти
            </Link>
          </div>
          <div class="block p-6 rounded-xl shadow-lg bg-teal-100 max-w-sm">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
              Математика
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Все полезные материалы ЕГЭ для подготовки к экзамену по математике.
            </p>
            <Link
              href='/social'
              class="  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Перейти
            </Link>
          </div>
          <div class="block p-6 rounded-xl shadow-lg bg-teal-100 max-w-sm">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
              Обществознание
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Все полезные материалы ЕГЭ для подготовки к экзамену по обществознанию.
            </p>
            <Link
              href='/social'
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Перейти
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </MainContainer>
  );
};

export default Index;
