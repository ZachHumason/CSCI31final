import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { findMaps } from '../utils/supabase-client'

export const revalidate = 0

export default async function Maps() {
  const map = await findMaps();
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Maps"/>
        <PageContent content="List of all maps as cards" />
        <div className="flex mx-12">
          <div className="flex gap-6 w-full my-6 flex-wrap-reverse">
            {map && map.map((map, idx) => (
              <Card key={idx} title={map.title} subtitle={map.subtitle} description={map.description} img={map.img} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
