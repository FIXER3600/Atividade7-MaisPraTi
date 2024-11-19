import React, { useState } from "react";
import './style.css'
function Filter() {
	const names=[{id:0,name:'Guilherme'},{id:1,name:'Edna'},{id:2,name:'Eric'},{id:3,name:'Maria'},{id:4,name:'João'},{id:5,name:'Mario'}]
	const [searchName,setSearchName]=useState('')
	const [filteredNames, setFilteredNames] = useState(names);
	const handleChange = (event) => {
		const searchValue = event.target.value;
		setSearchName(searchValue); // Atualiza o valor digitado no input
	    
		// Filtra os nomes com base no valor digitado (ignorando maiúsculas/minúsculas)
		const filtered = names.filter((item) =>
		  item.name.toLowerCase().includes(searchValue.toLowerCase())
		);
		setFilteredNames(filtered); // Atualiza os nomes filtrados
	      };
	

  return <div className="filternames-body">
	<input type="text" placeholder="Search Name" value={searchName} onChange={handleChange}/>
	<ul>
        {filteredNames.length > 0 ? (
          filteredNames.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <li>No names found</li> // Mensagem caso não encontre nenhum nome
        )}
      </ul>
  </div>;
}

export default Filter;
