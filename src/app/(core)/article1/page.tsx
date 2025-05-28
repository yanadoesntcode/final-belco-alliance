import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (<section>
    <img className='w-[99rem] mt-[-2.45rem]' src="/article1header.svg" alt="" />
    <section className="py-16 px-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-purple mb-6">
        Embark on a Global Learning Journey with Fontys' Acceleration Academy
      </h1>

      <p className="text-lg mb-6 text-gray-800">
        The <strong>Acceleration Academy</strong> at Fontys University of Applied Sciences offers an
        innovative and flexible international minor program, immersing students in global business
        practices and personal growth. Running for five months and offering 30 ECTS credits, the
        program allows students to tailor their journey through intensive three-week modules—
        either in Eindhoven or across global partner institutions.
      </p>

      <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">🌍 Program Highlights</h2>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li><strong>Modular Flexibility:</strong> Choose three-week modules based on your interests and career goals.</li>
        <li><strong>Global Exposure:</strong> Study in Eindhoven or at international partner universities such as Cape Town, Chicago, or Bangkok.</li>
        <li><strong>Professional Development:</strong> Build essential business skills like stakeholder management and problem-solving.</li>
        <li><strong>Collaborative Learning:</strong> Work in multidisciplinary teams to gain intercultural competence.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">🎓 Learning Objectives</h2>
      <p className="text-gray-800 mb-4">
        The program is built around two key development paths:
      </p>
      <ul className="list-disc list-inside text-gray space-y-2">
        <li><strong>Personal Growth:</strong> Boost self-awareness, reflect on personal strengths, and gain career-ready soft skills.</li>
        <li><strong>Global Business Acumen:</strong> Understand international business trends and practice navigating multicultural environments under pressure.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">🗺️ Partner Institutions</h2>
      <p className="text-gray-800 mb-4">
        Take modules at these global universities:
      </p>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>Florida International University, USA</li>
        <li>St. Cloud State University, UK</li>
        <li>Cape Peninsula University of Technology, South Africa</li>
        <li>Stamford International University, Thailand</li>
        <li>North Park University, USA</li>
        <li>IPAG Business School, France</li>
      </ul>

      <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">📅 Program Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
        <div><strong>Duration:</strong> 5 months (February–July or September–February)</div>
        <div><strong>Credits:</strong> 30 ECTS</div>
        <div><strong>Language:</strong> English</div>
        <div><strong>Location:</strong> Eindhoven, NL & international partner universities</div>
      </div>

      <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">📌 Admission & Application</h2>
      <p className="text-gray-800 mb-6">
        The Acceleration Academy is available to students from partner universities with exchange agreements. Apply through your home university's international office.
      </p>

      <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">🌟 Why Choose Acceleration Academy?</h2>
      <p className="text-gray-800 mb-10">
        This program pushes students beyond their comfort zones, offering rich cultural exchanges,
        a global professional network, and essential international experience. Its dynamic structure
        and global reach prepare students to thrive in today’s interconnected world.
      </p>

      <a
        href="https://www.fontys.nl/en/Study-at-Fontys/Exchange-programmes/Acceleration-Academy.htm"
        className="inline-block bg-purple text-white px-6 py-3 rounded-lg shadow hover:bg-purple-400 transition"
        target="_blank" rel="noopener noreferrer"
      >
        Learn More & Apply
      </a>
  </section>





  </section>)
}

export default Page