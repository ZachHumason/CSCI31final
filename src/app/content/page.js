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
        <PageContent content="Valorant Music Videos from BotWilds Youtube and Tiktok" />
        <div className="flex flex-wrap gap-6">
          <div className="flex grow w-1/3 p-80 border-solid border-gray-600 bg-gray-100 rounded-lg shadow-md mx-12 aspect-w-16 aspect-h-9 mt-6">
            <iframe className="min-h-fit" src="https://www.youtube.com/embed/XIdTulbU5LY" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flex grow w-1/3 p-80 border-solid border-gray-600 bg-gray-100 rounded-lg shadow-md mx-12 aspect-w-16 aspect-h-9 mt-6">
            <iframe className="min-h-fit" src="https://www.youtube.com/embed/P80Gdjyuu0E" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flex grow w-1/3 p-80 border-solid border-gray-600 bg-gray-100 rounded-lg shadow-md mx-12 aspect-w-16 aspect-h-9 mb-6">
            <iframe className="min-h-fit" src="https://www.youtube.com/embed/qqCa64slr3o" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="flex grow w-1/3 p-80 border-solid border-gray-600 bg-gray-100 rounded-lg shadow-md mx-12 aspect-w-16 aspect-h-9 mb-6">
            <iframe className="min-h-fit" src="https://www.youtube.com/embed/no2RrVTdcsk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <PageContent content="Long form content that goes over multiple sessions and over half an hour." />
        <div className="flex mx-12 mt-6 aspect-w-16 aspect-h-9">
          <iframe className="min-h-fit" src="https://www.youtube.com/embed/yd6V_blqsxg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}
