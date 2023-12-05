import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'
import Footer from './components/Footer'
import { findCards } from './utils/supabase-client'

export const revalidate = 0

export default async function Home() {

  const cards = await findCards()
  // change line 22 "{cards &&"
  return (
  <div>
    <Navbar />
    <div className="m-12">
      <PageTitle title="Home"/>
      <PageContent content="Personal website for showcasing Valorant related topics and content." />
      <div className="flex gap-6 w-full my-6 flex-wrap">
        {cards && cards.map((card, idx) => (
          <Card key={idx} title={card.title} subtitle={card.subtitle} description={card.description} img={card.img} />
        ))}
      </div>
      <PageContent content="BotWilds on Youtube, TikTok, and Twitch" />
      <div className="flex mx-32 mt-6 aspect-w-16 aspect-h-9">
        <iframe className="min-h-fit" src="https://www.youtube.com/embed/I3rpMYFrwPw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
    <Footer />
  </div>
  )
}
