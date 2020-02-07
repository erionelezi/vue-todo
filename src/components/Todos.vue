<template>
<div>
    <h2> Todos</h2>
        <div class="legend">
           <span>Double click to mark as completed</span>
            <span>
                <span class="incomplete-box"></span> =Incomplete
            </span>
            <span>
                <span class="complete-box"></span> = Complete
            </span>
        </div>
        <div
                @dblclick="onDblClick(todo)"
                v-for="todo in allTodos"
                :key="todo.id"
                class="todo col-lg-4 d-inline-flex"
                v-bind:class="{'is-complete':todo.completed}">
            {{todo.title}}
            <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
        </div>

</div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name:"Todos",
        methods :{
            ...mapActions (['fetchTodos',"deleteTodo","updateTodo"]),
            onDblClick(todo){
                const updTodo = {
                    id : todo.id,
                    title: todo.title,
                    completed: !todo.completed
                }
                this.updateTodo(updTodo);
            }
        },
        computed: mapGetters(['allTodos']),
        created(){
            this.fetchTodos();
        }

    };
</script>

<style scoped>
    .todo{
        border: 1px solid #cccccc;
        background: #42b983;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        height: 60px;
    }
    i{
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: white;
        cursor: pointer;
    }
    .legend{
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
    }
    .complete-box{
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e;
    }
    .incomplete-box{
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }
    .is-complete {
        background: #35495e;
        color: white;
    }
</style>

