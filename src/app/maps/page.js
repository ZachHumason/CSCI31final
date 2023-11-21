import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'

export default function Maps() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Maps"/>
        <PageContent content="List of all maps as cards" />
      </div>
      <Footer />
    </div>
  )
}
