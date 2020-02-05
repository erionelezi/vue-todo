import axios from 'axios'
import {vueUse} from "bootstrap-vue/esm/utils/plugins";

vueUse (axios)

const state = {
    todos: [
        {
            id:1,
            title:'Todo 1',
        },
        {
            id:2,
            title:'Todo 2',
        },
        {
            id:3,
            title:'Todo 3',
        },
        {
            id:4,
            title:'Todo 4',
        },
        {
            id:5,
            title:'Todo 5',
        },
        {
            id:6,
            title:'Todo 6',
        }
    ]
}

const getters = {
    allTodos: (state) =>state.todos
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}
