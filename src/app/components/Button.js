export default function Button({ children, onClick, type = 'button' }) {
  return <button className="px-4 py-2 bg-purple-700 rounded-md shadow-md text-red-100 hover:bg-purple-800 active:bg-purple-900 transtion-all" type={type} onClick={onClick}>{children}</button>
}