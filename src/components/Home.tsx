import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section
      id="home"
      className="w-full max-w-screen-xl mx-auto mt-36 px-4 sm:px-8 relative mb-100"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div className="flex-1">
          <img
            id="home_logo"
            src="/logoblack.svg"
            alt="black logo of Belco"
            className="mt-10 sm:mt-20"
          />

          <h1 className="mt-6 text-3xl sm:text-4xl font-black leading-tight text-[#05046A]">
            Welcome to BELCO Alliance
          </h1>

          <p className="mt-4 text-base sm:text-lg font-semibold max-w-xl text-[#05046A]">
            The Belco Alliance’s governance reflects its collaborative nature. Built on strong institutional relationships, mutual trust, and common strategic goals, the Alliance’s governance is done in different and changing teams depending on the activity and participating partners.
          </p>

          <a href="/partners" target="_blank">
            <img
              src="/buttonhome.svg"
              alt="button for redirection to partners page"
              className="mt-6"
            />
          </a>
        </div>

        <div className="flex-shrink-0">
          <img
            id="home_element"
            src="/HomeElement1.svg"
            alt="home element image"
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
