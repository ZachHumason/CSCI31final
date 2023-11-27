export default function Input({ type = 'text', placeholder = 'enter text here…', name, id }) {
  return <input className="p-2 rounded-md shadow-md" type={type} name={name} id={id} placeholder={placeholder} />
}