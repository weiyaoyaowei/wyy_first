<template>
	<ul class="todo-main">
		<!-- 传给item的是todoObj，而不是todos -->
		<MyItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" />
	</ul>

</template>

<script>
import MyItem from './MyItem';
export default {
    name:'MyList',
    components:{
        MyItem
    },
	// 接收来自App父亲给的数据
	props:['todos']
	
}
</script>

<style scoped>
    /*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}

</style>