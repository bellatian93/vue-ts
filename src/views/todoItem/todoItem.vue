<template>
	<div class="todo-app-body">
		<h4>我的待办事项:</h4>
		<div class="row">
			<div class="todo-list-column column">
				<button @click="create">创建</button>
				<input v-model="newTodoText" @keyup.enter="create" @input="clearError" placeholder="请输入待办事项">
				<p v-if="error" class="error">{{error}}</p>
				<ul v-for="(todo,index) in todos" @deleteTodo="deleteTodo(index)" :key="index">
					<li class="todo-list-item">
						<span v-show="todo.done" class="done-marker" @click="markTodo(todo)">✓</span>
						<span v-show="!todo.done" class="todo-marker" @click="markDone(todo)">☐</span>
						<span class="content">{{todo.content}}</span>
						<button @click="deleteTodo">删除</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Todo from './todo';

	@Component
	export default class TodoItem extends Vue {
		newTodoText = '';
		todos : Array<Todo> = [new Todo('学习 Vue'), new Todo('学习 TypeScript'), new Todo('学习 ES6')];
		error : any = null;

		create () : void {
			const content = this.newTodoText.trim();
			if (content.length < 1) {
				this.error = '待办事项不能为空';
				return;
			}
			const todo = new Todo(content);
			this.todos.push(todo);
			this.newTodoText = '';
		}

		clearError () : void {
			this.error = null;
		}

		deleteTodo (index : number) : void {
			this.todos.splice(index, 1);
		}

		markDone (item : Todo) : void {
			item.done = true;
		}

		markTodo (item : Todo) : void {
			item.done = false;
		}
	}
</script>

<style>
	.todo-app-body {padding: 20px 15px 20px 15px;
		height: 100%;
	}
	.row {
		display: flex;
		height: 100%;
	}
	.column {
		flex: 50%;
		height: 100%;
	}
	.todo-list-column {
		background: #f7f7f7;
	}
	.error {color: red;}
	.done-marker, .todo-marker {font-size: 1.3rem}
	.todo-list-item { list-style: none;}
</style>
