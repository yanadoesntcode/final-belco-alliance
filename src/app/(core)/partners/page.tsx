import { NextPage } from 'next'
import HomePartners from '@/components/HomePartners'
import UniCards from '@/components/UniCards'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <main>
      <HomePartners />

      <section className="relative px-4 sm:px-8">
        <img
          className="absolute top-[55rem] z-[-1] w-full max-w-none"
          src="/backgroundelements.svg"
          alt=""
        />

        <h1 className="text-center text-xl sm:text-2xl font-medium text-[#7A7AFF] mb-2">
          Partner Institutions
        </h1>

        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#7A7AFF] mb-12">
          Our Partners
        </h2>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-[5rem] px-2">
          {/* UniCards remain unchanged */}
          <UniCards country="NEW ZEALAND" university="Nelson Marlborough Institute of Technology (NMIT)" city="Nelson" image="/image/newz.png" href="https://www.nmit.ac.nz/" />
          <UniCards country="JAPAN" university="Ryukoku University" city="Kyoto" image="/image/ryoko.png" href="https://www.ryukoku.ac.jp/english2/" />
          <UniCards country="GERMANY" university="CBS International Business School" city="Cologne" image="/image/germ.png" href="https://www.cbs.de/en" />
          <UniCards country="FINLAND" university="LAB University of Applied Sciences" city="Lahti and Lappeenranta" image="/image/fin.png" href="https://lab.fi/en" />
          <UniCards country="ECUADOR" university="Universidad Internacional Del Ecuador" city="Quito" image="/image/ec.png" href="https://www.uide.edu.ec/" />
          <UniCards country="THAILAND" university="Kasetsart University" city="Bangkok" image="/image/ku.png" href="https://www.ku.ac.th/en" />
          <UniCards country="PERU" university="Universidad de Piura" city="Piura" image="/image/udep.png" href="https://www.udep.edu.pe/en/" />
          <UniCards country="RUSSIA" university="Plekhanov Russian University of Economics" city="Moscow" image="/image/rus.png" href="https://www.rea.ru/" />
          <UniCards country="CANADA" university="University of Regina" city="Regina" image="/image/reguin.png" href="https://www.uregina.ca/" />
          <UniCards country="HONG KONG" university="Lingnan University" city="Hong Kong" image="/image/ling.png" href="https://www.ln.edu.hk/" />
          <UniCards country="TAIWAN" university="Shih Chien University" city="Taipei" image="/image/shih.png" href="https://www.usc.edu.tw/?Lang=en" />
          <UniCards country="SOUTH AFRICA" university="Cape Peninsula University of Technology" city="Cape Town" image="/image/pen.png" href="https://www.cput.ac.za/" />
          <UniCards country="SPAIN" university="Universidad del País Vasco" city="San Sebastian" image="/image/pais.png" href="https://www.ehu.eus/en" />
          <UniCards country="JAPAN" university="Kwansei Gakuin University" city="Yokohama" image="/image/kan.png" href="https://global.kwansei.ac.jp/" />
          <UniCards country="THAILAND" university="Stamford International University" city="Bangkok" image="/image/stan.png" href="https://www.stamford.edu/" />
          <UniCards country="CANADA" university="University of Ottawa" city="Ottawa" image="/image/oto.png" href="https://www.uottawa.ca/" />
          <UniCards country="ILLINOIS, USA" university="North Park University" city="Chicago" image="/image/chica.png" href="https://www.northpark.edu/" />
          <UniCards country="FRANCE" university="INSEEC Business School" city="Bordeaux" image="/image/insec.png" href="https://www.inseec.com/" />
          <UniCards country="DENMARK" university="Via University College" city="Sønderborg" image="/image/ucl.png" href="https://en.via.dk/" />
          <UniCards country="NETHERLANDS" university="Fontys University of Applied Sciences" city="Eindhoven" image="/image/font.png" href="https://www.fontys.edu/" />
        </div>
      </section>

      <section className="bg-purple mt-28 mb-[-10rem] px-4 py-16 flex flex-col gap-10 sm:gap-0 sm:flex-row sm:flex-wrap sm:justify-between">
        <div className="max-w-lg">
          <h1 className="text-2xl text-white font-semibold mb-6">
            Why we partner with the best institutions
          </h1>
          <p className="text-base sm:text-[1.4rem] text-white font-normal">
            The Belco Alliance continuously seeks to consolidate higher education community and its relationship with international partners by promoting cooperation among its members and affiliates and providing a “space” in which member representatives can meet, interact and develop their collaborative projects.
          </p>
        </div>

        <div className="max-w-lg">
          <h1 className="text-2xl text-yellow font-semibold mb-6 sm:mt-0">
            Join our alliance network
          </h1>
          <p className="text-base sm:text-[1.4rem] text-white font-normal">
            The Belco Institutions have respectively a strong individual partner network that allows stimulating multilateral connections for further and deep collaboration. Be part of our alliance and get in touch with us today!
          </p>
          <a href="/#contact" className="inline-block mt-6 sm:mt-8">
            <img src="/PartnerContactbutton.svg" alt="" />
          </a>
        </div>
      </section>
    </main>
  )
}

export default Page
