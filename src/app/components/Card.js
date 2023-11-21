export default function Card({ title = 'Fake Title', subtitle = 'Fake Subtitle', desciption = 'Desciption not working properly', img = 'http://placekitten.com/350/200'}) {
    return (
        <div className="border-solid border-2 border-gray-600 p-6 bg-gray-100 rounded-lg shadow-md text-gray-900 hover:scale-105 transition-all hover:bg-red-300 grow">
            <h1 className="text-3xl font-bold underline">{title}</h1>
            <h2 className="py-4 text-xl">{subtitle}</h2>
            <img className="h-64" src={img} alt="Card Photo" />
            <p className="py-4">{desciption}</p>
        </div>
    )
}