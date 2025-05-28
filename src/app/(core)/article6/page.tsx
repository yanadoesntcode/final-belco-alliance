import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (<section className="py-16 px-8 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center text-purple mb-6">
      ✈️ The Power of Exchange Programs: Learning Beyond Borders
    </h1>
  
    <p className="text-lg mb-6 text-gray-800">
      Exchange programs do far more than transport students to new countries—they open doors to
      new ways of <span className="text-purple font-semibold">thinking, learning, and living</span>.
      Whether through a full semester abroad, a short-term research stay, or an immersive cultural
      experience, these programs serve as life-changing catalysts for growth.
    </p>
  
    <p className="text-lg mb-10 text-gray-800">
      At their core, exchange programs are about transformation. Students return with more than
      passport stamps—they come back with broadened perspectives, deeper empathy, and
      strengthened resilience. They gain the kind of learning that lectures alone can't provide:
      the learning that comes from navigating the world.
    </p>
  
    <h2 className="text-2xl font-semibold text-purple mb-4">🧠 Learning Through Experience</h2>
  
    <p className="text-gray-800 mb-4">
      One of the greatest strengths of exchange programs is their ability to teach <strong>resourcefulness</strong>.
      In a new environment, every day brings unfamiliar challenges—like navigating public transport,
      understanding new classroom expectations, or figuring out the local etiquette.
    </p>
  
    <p className="text-gray-800 mb-4">
      With each hurdle, students become more confident in their ability to adapt and solve problems
      independently. They develop practical life skills that can’t be taught in a traditional classroom,
      gaining a sense of ownership over their learning journey.
    </p>
  
    <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">🌱 Personal Growth & Adaptability</h2>
  
    <p className="text-gray-800 mb-4">
      As students immerse themselves in a new culture, their mindset begins to shift. They start to
      appreciate different perspectives, become more tolerant of ambiguity, and grow comfortable
      with change. Over time, this builds strong <strong>emotional intelligence</strong> and the ability
      to thrive in diverse environments.
    </p>
  
    <p className="text-gray-800 mb-4">
      Exchange students return home more <strong>open-minded, resilient, and flexible</strong>—traits
      that are essential not only in academic settings but in everyday life and future careers.
    </p>
  
    <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">🌍 A Competitive Edge in a Globalized World</h2>
  
    <p className="text-gray-800 mb-4">
      In today’s interconnected world, employers and institutions are placing increasing value on
      international experience. Exchange program alumni stand out with a strong combination of
      <strong>global awareness, intercultural communication skills</strong>, and the ability to adapt
      under pressure.
    </p>
  
    <p className="text-gray-800 mb-10">
      Their stories reflect not only where they’ve traveled—but who they’ve become. They demonstrate
      <strong>problem-solving, initiative, and growth</strong>—qualities that set them apart in
      competitive academic and professional environments.
    </p>
  
    <p className="text-lg font-semibold text-gray-900">
      Exchange programs aren’t just about going somewhere else—they’re about becoming someone else:
      more aware, more confident, and more ready for the world.
    </p>
  </section>
  )
}

export default Page