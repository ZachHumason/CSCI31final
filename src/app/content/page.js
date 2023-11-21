import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'

export default function Content() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Content"/>
        <PageContent content="My videos from Youtube and Tiktok" />
      </div>
      <Footer />
    </div>
  )
}
