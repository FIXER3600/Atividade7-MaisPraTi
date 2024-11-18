import React, {useState } from "react";
import './style.css'
function TaskList() {
	const [tarefas, setTarefas] = useState([]); 
	const [novaTarefa, setNovaTarefa] = useState(""); 
	const [filtro, setFiltro] = useState("todas"); 
      
	
	const adicionarTarefa = () => {
	  if (novaTarefa.trim() === "") return; 
	  setTarefas([
	    ...tarefas,
	    { id: Date.now(), texto: novaTarefa, concluida: false },
	  ]);
	  setNovaTarefa(""); 
	};
      

	const removerTarefa = (id) => {
	  setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
	};
      
	
	const alternarConcluida = (id) => {
	  setTarefas(
	    tarefas.map((tarefa) =>
	      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
	    )
	  );
	};
      

	const tarefasFiltradas = tarefas.filter((tarefa) => {
	  if (filtro === "pendentes") return !tarefa.concluida;
	  if (filtro === "concluidas") return tarefa.concluida;
	  return true; 
	});
      
	return (
	  <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }} className="tasklist-body">
	    <h1>Lista de Tarefas</h1>
	    <div>
	      <input
		type="text"
		value={novaTarefa}
		onChange={(e) => setNovaTarefa(e.target.value)}
		placeholder="Nova tarefa..."
	      />
	      <button onClick={adicionarTarefa}>Adicionar</button>
	    </div>
      
	    <div style={{ margin: "10px 0" }}>
	      <button onClick={() => setFiltro("todas")}>Todas</button>
	      <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
	      <button onClick={() => setFiltro("concluidas")}>Concluídas</button>
	    </div>
      
	    <ul style={{ listStyle: "none", padding: 0 }}>
	      {tarefasFiltradas.map((tarefa) => (
		<li
		  key={tarefa.id}
		  style={{
		    textDecoration: tarefa.concluida ? "line-through" : "none",
		    display: "flex",
		    justifyContent: "space-between",
		    alignItems: "center",
		    padding: "5px",
		    border: "1px solid #ddd",
		    borderRadius: "5px",
		    margin: "5px 0",
		  }}
		>
		  <span onClick={() => alternarConcluida(tarefa.id)} style={{ cursor: "pointer" }}>
		    {tarefa.texto}
		  </span>
		  <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
		</li>
	      ))}
	    </ul>
	  </div>
	);
}

export default TaskList;
