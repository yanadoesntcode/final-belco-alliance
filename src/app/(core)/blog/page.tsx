import { NextPage } from 'next'
import BlogCards from '@/components/BlogCards'




interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <section>
<h1 className="text-blue font-bold text-2xl sm:text-3xl md:text-4xl text-center sm:text-left sm:ml-20 pt-16 mb-16">
  Articles, news and research
</h1>

    <div className="flex flex-wrap justify-center gap-[5rem]">
            <BlogCards title="Acceleration academies" description="The Acceleration Academy is designed to empower students and young professionals through a dynamic..." image="/blog1.png" href="/article1" />
            <BlogCards title="Student Testinomy" description="Read about the Experience of Sietske Verstegen a Student at Fontys University of Applied Sciences. " image="/blog2.png" href="/article2" />
            <BlogCards title="Student Testinomy" description="Read about the Experience of Jacob Janssen a Student at Lab University of Applied Sciences." image="/blog3.png" href="/article3" />
            <BlogCards title="Cultural Adaptation" description="Cultural adaptation refers to the process of adjusting to a new cultural environment. " image="/blog5.png" href="/article4" />
            <BlogCards title="Around the world with BELCO" description="Around the World with Belco celebrates the people, programs, and partnerships that make our alliance truly global. " image="/blog4.png" href="/article5" />
            <BlogCards title="The role of Exchange Programs in Personal Growth" description="Exchange programs do more than just transport students to new countries " image="/blog6.png" href="/article6" />

        </div>




    </section>



  )
}

export default Page