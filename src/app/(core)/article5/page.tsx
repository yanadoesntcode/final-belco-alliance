import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (<section className="py-16 px-8 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center text-purple mb-6">
      🌍 Around the World with Belco: Celebrating Global Unity Through Education
    </h1>
  
    <p className="text-lg mb-6 text-gray-800">
      <strong>Around the World with Belco</strong> is more than a slogan—it’s a celebration of the
      people, programs, and partnerships that define the Belco Alliance's international spirit.
      Through a shared commitment to <span className="text-purple font-semibold">education, innovation,
      and social impact</span>, Belco connects institutions and individuals across borders to shape
      a better, more inclusive world.
    </p>
  
    <p className="text-lg mb-10 text-gray-800">
      At the heart of this initiative is a belief: <em>diverse perspectives and cross-cultural
      collaboration are essential for solving global challenges.</em> Whether it’s sustainability,
      education, equity, or peace-building, Belco fosters opportunities for young leaders to
      participate in projects that matter—on campus and far beyond.
    </p>
  
    <h2 className="text-2xl font-semibold text-purple mb-4">🌐 Embracing Global Citizenship</h2>
  
    <p className="text-gray-800 mb-4">
      Belco empowers students to grow as global citizens—not only academically, but also personally
      and socially. Through its network of universities and programs, students learn to:
    </p>
  
    <ul className="list-disc list-inside text-gray-800 space-y-3">
      <li>
        <strong>Understand global challenges:</strong> Delve into complex topics such as climate change,
        social inequality, inclusive education, and international peace efforts.
      </li>
      <li>
        <strong>Contribute to real-world solutions:</strong> Join cross-border teams that design and
        implement sustainable strategies with local and global impact.
      </li>
      <li>
        <strong>Engage in community action:</strong> Volunteer with NGOs, local social enterprises, or
        student-led service projects that support marginalized communities.
      </li>
      <li>
        <strong>Advocate for diversity and inclusion:</strong> Become a voice for equity and collaboration,
        embracing cultures, languages, and perspectives from around the globe.
      </li>
    </ul>
  
    <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">🤝 Programs & Partnerships</h2>
  
    <p className="text-gray-800 mb-4">
      Belco’s strength lies in its international network. Partner institutions across Europe, Asia,
      Africa, and the Americas offer students exchange semesters, joint research projects,
      intercultural experiences, and entrepreneurial incubators that encourage boundary-pushing
      innovation.
    </p>
  
    <p className="text-gray-800 mb-10">
      By participating in <strong>Belco mobility programs</strong>, students not only gain academic credit,
      but also transform their worldview—gaining empathy, intercultural skills, and confidence that
      last a lifetime.
    </p>
  
    <h2 className="text-2xl font-semibold text-purple mb-4">🎯 Why It Matters</h2>
  
    <p className="text-gray-800 mb-6">
      The global challenges we face today—climate instability, poverty, digital inequality, forced
      migration—require a generation of professionals who can lead with compassion and
      cross-cultural fluency. <strong>Around the World with Belco</strong> inspires students to take that leap.
    </p>
  
    <p className="text-lg font-semibold text-gray-900">
      This isn’t just about study abroad—it’s about becoming part of a generation that’s ready to
      shape the world.
    </p>
  </section>
  )
}

export default Page