<template>
<div>
    <h2> Todos</h2>

        <div v-for="todo in allTodos" :key="todo.id" class="todo col-lg-4 d-inline-flex">
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
            ...mapActions (['fetchTodos',"deleteTodo"]),
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
</style>
