<template>
  <transition name="todo" appear>
	  <li>
		<label>
			<!-- 修改done属性，使用@change，参数为被修改item的id，把id传给祖父App(子传父) -->
			<input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
			<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props，只不过vue没有检测到 -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
			<span v-show="!todoObj.isEdit">{{todoObj.title}}</span>
			<input 
			type="text" 
			v-show="todoObj.isEdit"  
			@blur="handleBlur(todoObj,$event)" 
			:value="todoObj.title"
			ref="inputTitle"
			>
		</label>
		<!-- 使用了右浮动 -->
		<button class="btn btn-danger" style="display:none" @click="handleDelete(todoObj.id)">删除</button>
		<button v-show="!todoObj.isEdit" class="btn btn-edit" @click="handleEdit(todoObj)">编辑</button>
  </li>
  </transition>

</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name:'MyItem',
	// 接收的是todoObj,而不是todos，根据todoObj.done Obj.title给li赋值
	props:['todoObj'],
	methods:{
		// 需要把id传给祖父App，再由App修改done，因此需要App先有一个方法
		handleCheck(id){
			// this.checkTodo(id);
			this.$bus.$emit('checkTodo',id);
		},
		// 需要把id传给祖父App，再由App删除todoObj，因此需要App先有一个方法
		handleDelete(id){
			if(confirm('确定删除吗')){
				// this.deleteTodo(id);接收父组件传来的函数
				// this.$bus.$emit('deleteTodo',id);自定义事件
				pubsub.publish('deleteTodo',id);
				console.log('我是消息订阅与发布中的发布者，传回了删除事件的id');
			}
		},
		handleEdit(todoObj){
			if(todoObj.hasOwnProperty('isEdit')){
				todoObj.isEdit=true;
			}else{
				this.$set(todoObj,'isEdit',true);
			}
			// 在DOM节点下一次更新完毕后再执行，当数据改变后，再进行focus，那就需要nextTick()
			this.$nextTick(function(){
				this.$refs.inputTitle.focus();
			});
		},
		handleBlur(todoObj,e){
			todoObj.isEdit=false;
			if(!e.target.value.trim()){
				return alert('输入不能为空');
			}
			this.$bus.$emit('updateTodo',todoObj.id,e.target.value);
		}
	}
}
</script>

<style scoped>
    /*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}

	li:hover .btn{
		display: block !important;
	}
	.todo-enter-active{
		animation: todo 1s linear ;
	}
	.todo-leave-active{
		animation: todo 1s linear reverse;
	}
	@keyframes todo {
		from{
			transform: translateX(100%);
		}
		to{
			transform: translateX(0);
		}
	}
</style>