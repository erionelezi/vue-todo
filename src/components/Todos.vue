<template>
<div>
    <h2> Todos</h2>

        <div v-for="todo in allTodos" :key="todo.id" class="todo col-lg-4 d-inline-flex">
            {{todo.title}}
        </div>

</div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name:"Todos",
        methods :{
            ...mapActions (['fetchTodos']),
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

</style>
