import { useState, useEffect } from 'react'

import './style.css'

function App() {
  const [input, setInput] = useState('')

  const [nutri, setNutri] = useState([]);

  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem('@tarefas')
    return tarefasStorage
      ? JSON.parse(tarefasStorage)
      : ['Estudar React', 'Estudar Node']
  })

  useEffect(() => {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  useEffect(() => {
    function getApi() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
          setNutri(data)
        }
      )
    }

    getApi()
  }, [])

  function handleTasks(e) {
    e.preventDefault()
    if (input.trim() === '') return

    setTarefas([...tarefas, input.trim()])
    setInput('')
  }

  return (
    <div className="container">
      <form onSubmit={handleTasks}>
        <label>Nome da tarefa:</label>
        <br />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <br />
        <button type="submit">Cadastrar</button>
        <br />
        <div>
          {nutri.map((item) => {
            return(
              <article key={item.id}>
                <strong>{item.name}</strong>
                <strong> {item.username}</strong>
                <strong>, {item.phone}</strong>
              </article>
            )
          })}
        </div>
      </form>

      
    </div>
  )
}

export default App
