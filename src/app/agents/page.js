import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'

export default function Agents() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Agents"/>
        <PageContent content="This is all about agents from Valorant."/>
      </div>
      <Footer />
    </div>
  )
}
