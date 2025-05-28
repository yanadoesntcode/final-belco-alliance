import { NextPage } from 'next'

const ContactHome: NextPage = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-screen-xl mx-auto mt-40 px-4 sm:px-8 flex flex-col lg:flex-row gap-12 relative"
    >
      {/* Left Side: Contact Info and Images */}
      <div className="flex-1 relative">
        <h1 className="text-[#7E7DFF] text-3xl sm:text-5xl font-extrabold text-center lg:text-left">
          Contact us
        </h1>

        <h2 className="mt-4 text-center lg:text-left text-lg sm:text-xl font-normal max-w-2xl">
          Please contact your relevant board member to get in touch with one of the
          Belco Alliance Institutions.
        </h2>

        {/* Images */}
        <div className="mt-12 flex flex-col lg:-ml-40 sm:flex-row sm:justify-between items-start gap-2">
          <img
            src="/contactleft.svg"
            alt="contact for Maurice: Belco President"
            className="w-full max-w-sm"
          />
          <img
            src="/contactright.svg"
            alt="contact for Belco"
            className="w-full max-w-sm sm:mt-0"
          />
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex-1">
        <p className="text-black text-2xl font-semibold mb-4 text-center lg:pt-50">
          Send us a message
        </p>

        <form
          action="https://formspree.io/f/myzyvrkr"
          method="POST"
          className="bg-white rounded-lg"
        >
          <input
            type="text"
            name="Name"
            placeholder="Your name"
            required
            className="w-full rounded-lg border-2 border-[#05046A] bg-[#EBECF0] p-4 my-3 text-base outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full rounded-lg border-2 border-[#05046A] bg-[#EBECF0] p-4 my-3 text-base outline-none"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            className="w-full rounded-lg border-2 border-[#05046A] bg-[#EBECF0] p-4 my-3 text-base outline-none"
          ></textarea>

          <div className="flex justify-center lg:justify-start">
            <button
              type="submit"
              className="w-60 h-14 rounded-lg bg-[#FFD60A] text-black text-lg font-semibold shadow-md hover:bg-[#05046A] hover:text-white transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactHome
