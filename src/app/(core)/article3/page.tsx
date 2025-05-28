import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (<section className="py-16 px-8 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center text-purple mb-6">
      🌐 Flexibility & Quality: Jacob’s Experience with the BELCO Acceleration Academy
    </h1>
  
    <p className="text-lg mb-6 text-gray-800">
      The <strong>BELCO Acceleration Academy</strong> empowers students with the freedom to tailor their
      international learning experiences. Whether you prefer staying at your home institution or
      venturing abroad for a short-term program, the Academy delivers global perspectives and high-quality education on your terms.
    </p>
  
    <p className="text-lg mb-10 text-gray-800">
      <strong>Jacob Janssen</strong>, a student at <span className="text-purple font-semibold">LAB University of Applied Sciences</span>,
      shares how the program helped him balance flexibility and academic excellence while exploring new cultural and academic environments.
    </p>
  
    <blockquote className="bg-purple-50 border-l-4 border-purple px-6 py-4 mb-6">
      <p className="italic text-gray-800 text-lg">
        “The Belco Acceleration Academy is an amazing way to choose between doing courses at my home
        institution or going abroad for a short term. The program is well organized and the international
        teachers are really good."
      </p>
      <p className="mt-4 font-semibold text-right text-purple">— Jacob Janssen, Student at LAB University of Applied Sciences</p>
    </blockquote>
  
    <h2 className="text-2xl font-semibold text-purple mb-4">🎯 Learning with Flexibility and Purpose</h2>
  
    <p className="text-gray-800 mb-4">
      Jacob’s story highlights one of the core strengths of the BELCO Acceleration Academy:
      <strong> flexibility</strong>. Whether students stay at their university or travel abroad for a few weeks,
      they still gain valuable international experience without sacrificing structure or academic quality.
    </p>
  
    <p className="text-gray-800 mb-4">
      This adaptability is especially beneficial for students who want to explore new cultures or
      disciplines but prefer short-term commitments over full exchange semesters.
    </p>
  
    <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">🌍 High-Quality International Teaching</h2>
  
    <p className="text-gray-800 mb-4">
      Another standout aspect of the program is its <strong>diverse, international faculty</strong>.
      Jacob praises the teaching staff for their expertise and engaging style, which enhances the
      academic experience and brings global perspectives directly into the classroom.
    </p>
  
    <p className="text-gray-800 mb-10">
      From real-world case studies to intercultural teamwork, the Academy ensures that each course
      prepares students for today’s globally connected world.
    </p>
  
    <p className="text-lg font-semibold text-gray-900">
      The BELCO Acceleration Academy gives students the freedom to choose their learning path—without
      compromising on quality, engagement, or international impact.
    </p>
  </section>
  )
}

export default Page