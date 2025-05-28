import { NextPage } from 'next'
import Home from '@/components/Home'
import Description from '@/components/Description'
import ContactHome from '@/components/ContactHome'


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (<main>
    <Home/>
    <Description/>
    <ContactHome/>


  </main>)
}

export default Page