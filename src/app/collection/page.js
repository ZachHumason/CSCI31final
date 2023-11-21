import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'

export default function Collection() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Collection"/>
        <PageContent content="Best of my collection." />
      </div>
      <Footer />
    </div>
  )
}
