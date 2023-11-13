import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'

export default function Home() {
  return (
  <div>
    <Navbar />
    <div className="m-12">
      <PageTitle title="Home"/>
      <PageContent />
      <div class="flex gap-6 w-full my-6">
        <Card title="My First Card" subtitle="My First subtitle" desciption="My First description" />
        <Card title="My Second Card" subtitle="My Second subtitle" desciption="My Second description" />
        <Card title="My Third Card" subtitle="My Third subtitle" desciption="My Third description" />
      </div>
      <PageContent />
    </div>
  </div>
  )
}
