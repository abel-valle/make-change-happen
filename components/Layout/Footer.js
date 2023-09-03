import React from "react";
import LogoVPN from "../../public/assets/logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-10 w-auto mb-6" />

          <p className="mb-4">
            <strong className="font-medium">Make Change Management</strong> Sed
            ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 fill-white-500 bg-teal-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="text-teal-500 h-6 w-6" />
            </div>
            <div className="mx-2 fill-white-500 bg-teal-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 fill-white-500 bg-teal-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Make Change Management
          </p>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Invierte</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Afíliate{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Conviértete en Partner{" "}
            </li>
          </ul>
        </div>

        <div className=" row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Otros</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Descargas{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Presupuestos{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Localizaciones{" "}
            </li>
          </ul>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Involúcrate</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Make Change Management{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Preguntas Frecuentes{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Tutoriales{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Sobre Mí{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Política de Privacidad{" "}
            </li>
            <li className="my-2 hover:text-teal-500 cursor-pointer transition-all">
              Términos de Servicio{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
