<template>
  <div class="todo-footer" v-show="total">
		<label>
			<input type="checkbox" :checked="isAll"  @click="checkAll"/>
		</label>
		<span>
			<span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>

</template>

<script>
export default {
    name:'MyFooter',
	props:['todos'],
	computed:{
		total(){
			return this.todos.length;
		},
		// forEach方法
		/* doneTotal(){
			let i=0;
			this.todos.forEach((todo) => {
				if(todo.done)
				i++;
			});
			return i;
		} */
		// filter方法
		/* doneTotal(){
			let i=0;
			this.todos.filter((todo)=>{
				if(todo.done)
				i++;
			});
			return i;
		} */

		// reduce()方法
		doneTotal(){
			/* return this.todos.reduce((pre,current)=>{
				return pre+(current.done? 1: 0);
			},0); */
			return this.todos.reduce((pre,current)=>pre+(current.done? 1:0),0);
		},
		isAll(){
			if(this.total==this.doneTotal&&this.doneTotal){
				return true
			}
		}
	},
	methods:{
		// 检查是否全选中，通过checked的真假反过来控制上面items，子传父App
		checkAll(e){
			// this.checkAllTodo(e.target.checked);
			this.$emit('checkAllTodo',e.target.checked);
		},
		clearAll(){
			if(confirm('确定要删除吗？')){
				// this.clearDone();
				this.$emit('clearDone');
			}
		}
	}
}
</script>

<style scoped>
    /*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}

</style>