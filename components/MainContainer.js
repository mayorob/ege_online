import Head from "next/head";
import Link from "next/link";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={keywords}></meta>
        <title>EGE.onlne</title>
      </Head>
      <div className="py-4 px-72 flex justify-between text-white font-custom bg-[#242F3D]">
        <h1 className="py-1 text-xl">EGE.ONLINE</h1>
        <ul className=" justify-end flex gap-4">
        <Link
              href='/russian'
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Русский язык
            </Link>
          <Link
              href='/math'
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Математика
            </Link>
            <Link
              href='/social'
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Обществознание
            </Link>
        </ul>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
