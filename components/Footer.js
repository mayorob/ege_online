import Head from "next/head";
import Link from "next/link";
import { SiS7Airlines, SiTelegram } from 'react-icons/si'
import {SlSocialVkontakte} from 'react-icons/sl'
 
const Footer = ({ children, keywords }) => {
  return (
    <>
      <div className=" gap-3 py-4 px-72 flex text-3xl justify-center text-white font-custom bg-[#17212B]">
        <Link
              href='https://vk.com'
            >
                      <SiTelegram className=" text-sky-500"/>
            </Link>
            <Link
              href='https://t.me/suprabots'
            >
        <SlSocialVkontakte className=" text-sky-500"/>
            </Link>
      </div>
    </>
  );
};

export default Footer;
