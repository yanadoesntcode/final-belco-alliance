import { NextPage } from 'next'
import Image from 'next/image';
import Link from 'next/link'

type BlogCardsProps = {
  title: string;
  description: string;
  image: string;
  href: string;
}
export default function UniCards({ title, description, image, href }: BlogCardsProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="rounded-[1.25rem_0rem] bg-blue w-full max-w-xs sm:max-w-sm md:max-w-md h-auto flex flex-col overflow-hidden"
    >
      <Image
        src={image}
        alt={description}
        width={388}
        height={541}
        className="p-4 sm:p-6 object-cover"
      />
      <div className="text-purple px-4 sm:px-6 pb-6">
        <p className="text-purple font-bold text-lg sm:text-xl">{title}</p>
        <p className="font-normal text-sm sm:text-base mt-1">{description}</p>
      </div>
    </Link>
  );
}
