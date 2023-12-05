import { createClient } from '@supabase/supabase-js'

export function getClient() {
  const supabase = createClient('https://ryvehfffghrqqxzwplzn.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
  return supabase;
}

// { title, subtitle, description, img }
export async function insertCard(card) {
  const supabase = getClient()
  const { error } = await supabase.from('card').insert(card)
}

export async function findCards() {
  const supabase = getClient()
  const { data: cards, error } = await supabase.from('cards').select()
  return cards
}