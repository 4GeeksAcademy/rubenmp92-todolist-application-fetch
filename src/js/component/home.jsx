import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//logica 
	const [todos, setTodos] = useState([])
	//petición   resultado 	data 
	//1º then (el estado si todo salio bien, etc)
	//2º then (la info que llega (data))
	//catch si algo sale mal en cuanto al código sale aquí
	// GET si solo se pone la url en el fetch él asume que es un metodo GET

	const urlTodos = "https://playground.4geeks.com/apis/fake/todos/user/rubenmp92"
	fetch(urlTodos)
	.then((response)=>{
		return response.json()
	}) //lo paso de json a javascript
	.then((data)=>{setTodos(data)})
	.catch((err)=>{return err})

	//POST
	//el fetch tiene toda la info de la petición
	fetch(urlTodos, {
		method: "POST",
		body: JSON.stringify([]),
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then((response)=>{return response.json()})
	.then((data)=>{console.log(data)})
	.catch((err)=>{return err})

	//PUT
	let body = [
		{
			done: false,
			label: "barrer casa"
		},
		{
			done: false,
			label: "pasear perro"
		},
		{
			done: false,
			label: "lavar ropa"
		}
	]
	fetch(urlTodos, {
		method: "PUT",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then((response)=>{return response.json()})
	.then((data)=>{console.log(data)})
	.catch((err)=>{return err})


	return (
		<div className="text-center">
			{todos.map((value)=>{
				return<h3>{value.label}</h3>
			})}
		</div>
	);
};

export default Home;
