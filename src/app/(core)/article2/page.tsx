import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (<section className="py-16 px-8 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center text-purple mb-6">
      💼 A Student Perspective on the BELCO Acceleration Academy: Investment Management in Chicago
    </h1>
  
    <p className="text-lg mb-6 text-gray-800">
      The BELCO Acceleration Academy offers more than just a fast-paced learning environment—it
      delivers meaningful, transformative educational experiences across disciplines. One such
      example comes from <strong>Sietske Verstegen</strong>, a student at Fontys University of Applied Sciences,
      who participated in the 3-week intensive module on <span className="text-purple font-semibold">Investment Management</span> held
      virtually in Chicago.
    </p>
  
    <blockquote className="bg-purple-50 border-l-4 border-purple px-6 py-4 mb-6">
      <p className="italic text-gray-800 text-lg">
        “The BELCO Acceleration Academy 3-week intensive module in investment management in Chicago
        was, even online, one of the best courses ever. I really enjoyed the module the teacher taught
        us. He was really inspiring and probably the best professor I'll ever have. He made me really
        interested in a topic that was so far apart from my major (Human Resource Management) and
        showed me how enthusiasm and being engaged can make online learning fun.”
      </p>
      <p className="mt-4 font-semibold text-right text-purple">— Sietske Verstegen, Student at Fontys UAS</p>
    </blockquote>
  
    <h2 className="text-2xl font-semibold text-purple mb-4">💡 Beyond the Major: Learning Without Boundaries</h2>
  
    <p className="text-gray-800 mb-4">
      What makes this story stand out is how the Acceleration Academy allowed a student majoring in
      <strong> Human Resource Management</strong> to fall in love with a completely different field—
      <strong> investment and finance</strong>. The module sparked genuine curiosity and excitement in
      a subject that was previously unfamiliar, showing the Academy’s power to broaden academic horizons.
    </p>
  
    <p className="text-gray-800 mb-4">
      This highlights a key strength of the program: <em>exposure to diverse disciplines</em>. Students can explore
      new interests, develop multi-faceted skill sets, and discover unexpected passions that complement
      their core studies.
    </p>
  
    <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">🎓 Teaching That Inspires</h2>
  
    <p className="text-gray-800 mb-4">
      Sietske’s experience also underlines the impact of passionate teaching. The professor’s
      <strong> enthusiasm and engagement</strong> transformed a virtual classroom into a memorable
      and enjoyable experience—proving that even online learning can be dynamic and deeply personal
      when delivered with heart.
    </p>
  
    <p className="text-gray-800 mb-10">
      In today’s increasingly digital education landscape, this testimonial is a reminder of what
      truly matters: <strong>connection, inspiration, and the joy of learning</strong>.
    </p>
  
    <p className="text-lg font-semibold text-gray-900">
      The BELCO Acceleration Academy doesn’t just teach content—it ignites curiosity, crosses
      academic borders, and creates learning moments that last a lifetime.
    </p>
  </section>
  )
}

export default Page