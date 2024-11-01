import React from "react"
import Link from 'next/link';
import { MdHomeRepairService } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
const page = () => {
  return (
    <>
      <h2 className="my-12 text-3xl tracking-tight font-extrabold text-center text-gray-900">Welcome To Admin DashBoard</h2>
      <div className="flex items-center flex-wrap justify-around">
        <Link href="/admin/services" className="my-2 item bg-slate-200 rounded-lg shadow-md transition-transform transform
              md:w-[30vw] w-[320px] md:h-[30vw] h-[320px] content-center space-y-2 p-2">
          <p className="">
            <MdHomeRepairService className="w-full scale-[5]" />
          </p>
          <p className="w-full text-center text-2xl font-bold pt-10">
            Services
          </p>
        </Link>
        <Link href="/admin/products" className="my-2 item bg-slate-200 rounded-lg shadow-md transition-transform transform
              md:w-[30vw] w-[320px] md:h-[30vw] h-[320px] content-center space-y-2 p-2">
          <p className="">
            <AiOutlineProduct className="w-full scale-[5]" />
          </p>
          <p className="w-full text-center text-2xl font-bold pt-10">
            Products
          </p>
        </Link>
        <Link href="/admin/messages" className="my-2 item bg-slate-200 rounded-lg shadow-md transition-transform transform
              md:w-[30vw] w-[320px] md:h-[30vw] h-[320px] content-center space-y-2 p-2">
          <p className="">
            <FaEnvelope className="w-full scale-[5]" />
          </p>
          <p className="w-full text-center text-2xl font-bold pt-10">
            Messages
          </p>
        </Link>
      </div></>
  )
}
export default page;