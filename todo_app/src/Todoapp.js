import React, { Component } from "react";
import cx from "classnames";

export class Todoapp extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [], newId: 0 };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTodoClick = this.handleTodoClick.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const newTodo = {
			id: this.state.newID,
			label: e.target[0].value,
			isdone: false,
		};

		if (!newTodo.label) return;
		this.setState((state) => ({
			todos: [...state.todos, newTodo],
			newId: state.newId1,
		}));

		e.tartget[0].value = "";
	}

	handleTodoClick(index) {
		const updatedTodos = JSON.parse(JSON.stringify(this.state.todos));
		updatedTodos[index].done = !updatedTodos[index].done;

		this.setState((state) => ({
			...state,
			todos: updatedTodos,
		}));
	}

	render() {
		return (
			<>
				<div style={{ margin: "40px" }}>
					<span>Todo List Class</span>

					<form onSubmit={this.handleSubmit}>
						<input type='text' name='toto' />
						<input type='submit' value='Add Todo' />
					</form>

					<div>
						<p>1</p> remaining outof <p>1</p> tasks
					</div>

					{this.state.todos.map((todo, idx) => (
						<div key={todo.id} onClick={() => this.handleTodoClick(idx)}>
							{todo.label}
						</div>
					))}
				</div>
				<style>{`.done{text-decoration:line-through}`}</style>
			</>
		);
	}
}

export default Todoapp;
