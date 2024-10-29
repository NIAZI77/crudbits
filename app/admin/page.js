import React from "react";
import Link from 'next/link';
import { MdHomeRepairService } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";

const Page = () => {
  const links = [
    {
      href: "/admin/messages",
      icon: <FaEnvelope className="w-full scale-[5]" />,
      text: "Messages"
    },
    {
      href: "/admin/services",
      icon: <MdHomeRepairService className="w-full scale-[5]" />,
      text: "Services"
    },
    {
      href: "/admin/products",
      icon: <AiOutlineProduct className="w-full scale-[5]" />,
      text: "Products"
    },
  ];

  return (
    <div className="py-10 flex flex-wrap items-center justify-around h-screen">
      {links.map(({ href, icon, text }, index) => (
        <Link
          key={index}
          title="crudbits"
          href={href}
          className="my-2 item bg-slate-200 rounded-lg shadow-md transition-transform transform md:w-[30vw] w-[320px] md:h-[30vw] h-[320px] space-y-2 p-2"
        >
          <div className="flex flex-col items-center">
            <p>{icon}</p>
            <p className="w-full text-center text-2xl font-bold pt-10">{text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
