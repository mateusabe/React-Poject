import { useState } from 'react';
function App(){
  const [input,setInput] = useState('');
  const [tarefas,setTarefas] = useState([
    'Estuadar React',
    'Estudar Node',
  ]);

  function handleTasks(e){
    e.preventDefault();

    setTarefas([...tarefas,input]);
    setInput('');
  }

  return (
    <div>
      <form onSubmit={(e) => handleTasks(e)}>
        <label>Nome da tarefa:</label><br/>
        <input value={input} onChange={(e) => setInput(e.target.value)}/><br/>

        <button type="submit" on>Cadastrar</button><br/>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>    
  );
}

export default App;

