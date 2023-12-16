import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import CardForm from '../components/CardForm'
import MyTable from '../components/MyTable'
import { findCollection } from '../utils/supabase-client'

const cardTableColumns = [
  {
      title: 'Weapon',
      key: 'title'
  },
  {
      title: 'Skin Name',
      key: 'subtitle'
  },
  {
      title: 'Color Variant',
      key: 'img'
  },
  {
      title: 'Gun Buddy',
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
