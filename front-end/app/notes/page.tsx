'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

type note = {
    id: number;
    title: string
}

export default function Page() {
  const [notes, setNotes] = useState<note[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  if (notes === null) return <pre>Pas de note</pre>
else {return <pre>{notes.map((note)=>(<li key={note.id}>{note.title}</li>))}</pre>}
}