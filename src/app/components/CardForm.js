import { redirect } from "next/navigation"
import { insertCard } from "../utils/supabase-client"
import Button from "./Button"
import Field from "./Field"
import Input from "./Input"
import Label from "./Label"

async function createCard(formData) {
    'use server'
    const title = formData.get('title')
    const subtitle = formData.get('subtitle')
    const img = formData.get('img')
    const description = formData.get('description')
    insertCard({title, subtitle, img, description})
    redirect('/')
    // get each field out of formData 
    // call supabase-client insertCard
  }
  
  export default function CardForm() {
    return (
        <form action={createCard} className="p-4 bg-rose-600 rounded-lg mt-4">
            <Field>
                <Label label="title"/>
                <Input id="title" name="title"/>
            </Field>
            <Field>
                <Label label="subtitle"/>
                <Input id="subtitle" name="subtitle"/>
            </Field>
            <Field>
                <Label label="img"/>
                <Input id="img" name="img"/>
            </Field>
            <Field>
                <Label label="description"/>
                <Input id="description" name="description"/>
            </Field>
            <div className="mt-4 flex justify-end">
                <Button type="submit">Add Card</Button>
            </div>
        </form>
    )
  }