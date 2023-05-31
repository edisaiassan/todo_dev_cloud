

<template >
  <div class="bg-[#F7FCFC] flex items-center justify-center h-screen">
    <div class="fixed top-4 right-4 flex items-center justify-center">
      <button
        @click="back()"
        class="hover:bg-gray-200 text-white font-bold p-4 rounded-full border border-gray-500 flex"
      >
        <el-icon color="#9e9e9e" size="24"><Close /></el-icon>
      </button>
    </div>
    <form @submit.prevent="add">
      <input
        class="text-3xl font-medium text-center bg-[#f5f5f5]"
        placeholder="Ingrese nuevo todo"
        v-model.trim="todoNew"
      />
    </form>
    <div class="fixed bottom-4 right-4 flex items-center justify-center">
      <button
        @click="add()"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold h-14 w-auto px-4 rounded-full shadow"
      >
        New task
      </button>
    </div>
  </div>
</template>
  
  <script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useTodoStore } from "../stores/tododata";
import { Close } from "@element-plus/icons-vue";

const router = useRouter();

const todoStore = useTodoStore();
const todoNew = ref("");

const back = () => {
  router.push("/");
};

const add = async () => {
  if (!todoNew.value) {
    alert("Llena el campo");
  } else {
    todoStore.todoDataList.push({
      id: todoStore.todoDataList.length + 1,
      content: todoNew.value,
      check: false,
    });
    todoNew.value = "";
    back();
  }
};
</script>
  