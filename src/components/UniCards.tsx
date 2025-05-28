import { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link'

type UniCardsProps = {
  country: string;
  university: string;
  city: string;
  image: string;
  href: string;
}
export default function UniCards ({ country, university, city, image, href }:UniCardsProps) {
  return (
    <Link href={href} target='_blank' className="rounded-[1.25rem_0rem] bg-[rgba(255,255,255,0.11)] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[50px]  w-[33rem] h-[14rem] flex flex-col overflow-hidden">
      <Image
        src={image}
        alt={university}
        width={277}
        height={185}
        className="p-6 object-cover mt-3"
      />
      <div className="ml-[18.5rem] mt-[-12rem]">
        <p className="text-black font-semibold text-[1.3rem] pb-[-1rem]">{country}</p>
        <p className="font-medium text-[1.15rem] mt-[0.1rem]">{university}</p>
        <p className="text-black font-bold text-[1.2rem] mt-1">{city}</p>
      </div>
    </Link>
  );
}
