import { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <footer className="bg-[#05046A] py-12 px-4 sm:px-8 mt-36 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <img
            src="/footerlogo.png"
            alt="logo"
            className="h-12 sm:h-16"
          />

          <p className="text-white text-base sm:text-lg max-w-xl">
            Formally initiated on a trustworthy, reliable and in-depth cooperation, the
            BELCO Alliance was officially established in 2015.
          </p>
        </div>

        {/* Policy Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a
            href="https://www.generateprivacypolicy.com/live.php?token=kQ71N8ZQ43jHgeh4C9GCCOoGYNUqSSD5"
            className="text-white text-sm sm:text-base font-light hover:underline hover:underline-offset-4 hover:decoration-[#b5b5b5]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy
          </a>
          <a
            href="https://www.cookiepolicygenerator.com/live.php?token=YhuAG3pjIFWHJpxF0hFpCS5Bh1Silajg"
            className="text-white text-sm sm:text-base font-light hover:underline hover:underline-offset-4 hover:decoration-[#b5b5b5]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
