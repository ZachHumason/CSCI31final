import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { findAgents } from '../utils/supabase-client'

export const revalidate = 0

export default async function Agents() {
  const agents = await findAgents();
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Agents"/>
        <PageContent content="List of all the agents in Valorant as cards. Agent 08 has been purposely left out because they haven't been introduced in the story or game yet." />
        <div className="flex mx-12">
          <div className="flex gap-6 w-full my-6 flex-wrap">
            {agents && agents.map((agents, idx) => (
              <Card key={idx} title={agents.title} subtitle={agents.subtitle} description={agents.description} img={agents.img} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}