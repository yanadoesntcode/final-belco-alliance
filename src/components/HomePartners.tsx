import { NextPage } from 'next'

interface Props {}

const HomePartners: NextPage<Props> = ({}) => {
  return (
    <section className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-8 mt-4 mb-[30rem]">
      {/* Left Decorative Element */}
      <img
        src="/descriptionelementleft.svg"
        alt="decorative element frame (left)"
        className="absolute left-0 sm:left-12 z-[-1] drop-shadow-[5px_4px_20px_rgba(0,0,0,0.25)]"
      />

      <img
        className="absolute left-1/2 sm:ml-50 mt-12 sm:mt-[7rem] w-40 sm:w-auto"
        src="/partenrsdoodle.svg"
        alt="doodle"
      />

      <h1 className="text-xl sm:text-2xl font-black pt-32 sm:pt-44 text-center sm:text-left sm:ml-72">
        We partner with top institutions.
      </h1>

      <p className="text-base sm:text-[1.3rem] font-normal mt-4 text-center sm:text-left sm:ml-72 max-w-3xl">
        The BELCO Alliance’s governance reflects its collaborative nature. Built on a strong institutional relationships, mutual trust and the common strategic goals. Below you find all partners in our alliance.
      </p>

      <h2 className="text-purple text-lg sm:text-2xl font-bold mt-6 text-center sm:text-left sm:ml-72">
        Join our alliance network
      </h2>

      <a href="/" className="block mt-4 text-center sm:text-left sm:ml-60">
        <img src="/PartnerContactbutton.svg" alt="button which leads to home page" />
      </a>

      {/* Right Decorative Element */}
      <img
        src="/descriptionelementright.svg"
        alt="decorative element frame (right)"
        className="absolute right-0 sm:right-12 top-40 sm:top-[10rem] z-[-1] drop-shadow-[5px_4px_20px_rgba(0,0,0,0.25)]"
      />

      <img
        className="absolute top-[38rem] left-[-1rem] w-28 sm:w-auto"
        src="/foundersdoodle.svg"
        alt=""
      />

      <img
        className="mt-20 lg:w-10000 lg:mt-70 lg:-ml-36 w-full max-w-[94rem] mx-auto sm:ml-[-7rem]"
        src="/Partnerselementhome.png"
        alt="element showing partner universities"
      />
    </section>
  )
}

export default HomePartners
