import { useState, useEffect, use } from 'react';

function App() {
  const [input, setInput] = useState('');

  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem('@tarefas');
    return tarefasStorage ? JSON.parse(tarefasStorage) : ['Estudar React', 'Estudar Node'];
  });

  useEffect(() => {
    localStorage.setItem('@tarefas', JSON.stringify(tarefas));    
  }, [tarefas]);

  useEffect(() =>{
    function getApi(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => console.log(data));
    }

    getApi();
  },[])

  function handleTasks(e) {
    e.preventDefault();
    if (input.trim() === '') return;

    setTarefas([...tarefas, input.trim()]);
    setInput('');
  }

  return (
    <div>
      <form onSubmit={handleTasks}>
        <label>Nome da tarefa:</label><br />
        <input value={input} onChange={(e) => setInput(e.target.value)} /><br />
        <button type="submit">Cadastrar</button><br />
      </form>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
