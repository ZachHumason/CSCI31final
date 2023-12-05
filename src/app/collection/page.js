import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import CardForm from '../components/CardForm'
import MyTable from '../components/MyTable'
import { findCards, findCollection } from '../utils/supabase-client'

export const revalidate = 0

const cardTableColumns = [
  {
      title: 'Title',
      key: 'title'
  },
  {
      title: 'Subtitle',
      key: 'subtitle'
  },
  {
      title: 'Image',
      key: 'img'
  },
  {
      title: 'Description',
      key: 'description'
  },
]

export default async function Collection() {
  const collection = await findCollection();
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Collection"/>
        <PageContent content="You can add a weapon combo from your Valorant collection here and view the table of logged combos."/>
        <CardForm />
        <div className='mt-4 bg-gray-100 rounded-md p-6 shadow-md text-xl'>
          <MyTable columns={cardTableColumns} records={collection} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
