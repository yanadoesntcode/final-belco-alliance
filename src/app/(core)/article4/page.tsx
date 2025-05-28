import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (    <section className="py-16 px-8 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center text-purple mb-6">
      Understanding the Journey of Cultural Adaptation
    </h1>
  
    <p className="text-lg mb-6 text-gray-800">
      <strong>Cultural adaptation</strong> refers to the process of adjusting to a new cultural
      environment. It’s a journey of learning to function and feel comfortable in a society with
      different customs, values, languages, and social norms than your own.
    </p>
  
    <h2 className="text-2xl font-semibold text-purple mt-10 mb-4">
      🌏 The Stages of Cultural Adaptation
    </h2>
  
    <div className="space-y-6 text-gray-800">
      <div>
        <h3 className="text-xl font-bold text-purple">🧳 Honeymoon Phase</h3>
        <p>
          Everything feels exciting and new. Differences are seen as charming, and there's a strong
          sense of adventure and curiosity.
        </p>
      </div>
  
      <div>
        <h3 className="text-xl font-bold text-purple">😵 Frustration (Culture Shock)</h3>
        <p>
          As the novelty fades, challenges begin to emerge. Language barriers, unfamiliar social
          customs, and homesickness can cause frustration. This phase is natural, though often
          uncomfortable.
        </p>
      </div>
  
      <div>
        <h3 className="text-xl font-bold text-purple">🛠️ Adjustment Phase</h3>
        <p>
          Gradually, routines are formed. Language skills improve, navigating daily life becomes
          easier, and individuals start to find comfort in their environment.
        </p>
      </div>
  
      <div>
        <h3 className="text-xl font-bold text-purple">🏡 Acceptance or Mastery Phase</h3>
        <p>
          A sense of ease and integration begins to emerge. People can confidently navigate the new
          culture, blending it with their own values and identity to form a balanced, personal
          cultural experience.
        </p>
      </div>
    </div>
  
    <p className="text-lg mt-10 text-gray-800">
      Cultural adaptation is not linear—each person moves through these phases at their own pace. With
      patience and openness, adapting to a new culture can lead to personal growth and deeper
      intercultural understanding.
    </p>
  </section>
  )
}

export default Page