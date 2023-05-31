import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todoDataList: ref([{
            id: 1,
            content: 'ABC',
            check: false,
        },

        {
            id: 2,
            content: '123',
            check: false,
        },
        {
            id: 3,
            content: 'ZZZ',
            check: false,
        },
        {
            id: 4,
            content: 'Yes',
            check: false,
        },
        ])
    })
})