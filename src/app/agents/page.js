import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import CardForm from '../components/CardForm'

export default function Agents() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Agents"/>
        <PageContent content="This is all about agents from Valorant."/>
        <CardForm />
      </div>
      <Footer />
    </div>
  )
}
