import { BeakerIcon, TrophyIcon } from '@heroicons/react/24/solid'

const menuItems = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
    {
        title: 'Services',
        href: '/services',
    },
    {
        title: 'Products',
        href: '/products',
    },
]

export default function Navbar() {
    return (
        <div className="flex justify-between gap-4 m-6 items-center">
            <TrophyIcon className="h-12 w-12 text-amber-400" />
            <div className="flex gap-4">
            {menuItems.map((item, index) => (
                <a key={index} href={item.href} className="px-4 py-2 bg-red-600 text-red-100 shadow-md rounded-md text-lg transition-all hover:bg-red-800 active:bg-red-400">{item.title}</a>
            ))}
            </div>
        </div>
    )
}