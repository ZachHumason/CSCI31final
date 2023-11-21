const defaultContent = `Facilisis gravida neque convallis a cras semper auctor neque. Sollicitudin ac orci phasellus egestas. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Velit euismod in pellentesque massa placerat. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Sed arcu non odio euismod lacinia at quis risus sed. Purus in mollis nunc sed id semper risus in.`

export default function PageContent({ content = defaultContent }) {
    return <main className="bg-gray-100 rounded-md p-6 shadow-md">{content}</main>
}