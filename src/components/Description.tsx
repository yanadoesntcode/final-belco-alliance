import { NextPage } from 'next'

const Description: NextPage = () => {
  return (
    <section
      id="description"
      className="w-full max-w-screen-xl mx-auto mt-48 px-4 sm:px-8 relative"
    >
      <div className="relative">
        {/* Left Decorative Element */}
        <img
          src="/descriptionelementleft.svg"
          alt="decorative element frame (left)"
          className="absolute left-0 top-[-10rem] sm:left-12 sm:top-[-13rem] z-[-1] drop-shadow-[5px_4px_20px_rgba(0,0,0,0.25)]"
        />

        {/* Right Decorative Element */}
        <img
          src="/descriptionelementright.svg"
          alt="decorative element frame (right)"
          className="absolute right-0 top-4 sm:right-12 z-[-1] drop-shadow-[5px_4px_20px_rgba(0,0,0,0.25)]"
        />

        <div className="text-center lg:text-left lg:ml-48">
          <h1 className="text-3xl sm:text-4xl font-black leading-snug">
            The BELCO Founders
          </h1>

          <p className="mt-6 text-base sm:text-lg font-semibold leading-8 max-w-3xl mx-auto lg:mx-0">
            Initially founded by Fontys UAS (the Netherlands), UCL University College
            (Denmark), CBS International Business School (Germany), BBA INSEEC
            (France) and LAB University of Applied Sciences (Finland) as a result of
            a fruitful and strength-combined collaboration, the BELCO Alliance has
            been growing into an interactive network between European and
            Non-European Higher Education Institutions with a strong international
            focus.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Description
