import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

function Page() {
  const [todos, setTodos] = useState<any[]>([]) // Aseguramos que sea un array vacío por defecto

  useEffect(() => {
    async function getTodos() {
      const { data, error } = await supabase.from('todos').select()

      if (error) {
        console.error('Error fetching todos:', error)
        return
      }

      setTodos(data ?? []) // Si `data` es null o undefined, asignamos un array vacío
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li> // Asegúrate de usar una clave única adecuada
        ))
      ) : (
        <p>No todos available.</p>
      )}
    </div>
  )
}

export default Page
