<template>
  <div class="h-screen w-full bg-[#F9FAFF] px-4">
    <h1 class="h-14 items-center flex justify-between">
      <el-icon color="#9FACC7" size="24">
        <Fold />
      </el-icon>

      <div class="space-x-4">
        <el-icon color="#9FACC7" size="24">
          <Search />
        </el-icon>
        <el-icon color="#9FACC7" size="24">
          <Bell />
        </el-icon>
      </div>
    </h1>

    <h1 class="text-3xl font-bold text-[#314062]">Whats up joy!</h1>
    <div class="font-medium text-[#9CA2C3] py-4">CATEGORIES</div>
    <div class="overflow-x-auto">
      <div class="flex space-x-4 py-2">
        <Card title="Personal" subtitle="40 taks"></Card>
        <Card title="Business" subtitle="18 taks" color="bg-blue-500"></Card>
        <Card
          title="Categoría"
          subtitle="información"
          color="bg-red-500"
        ></Card>
        <Card
          title="Categoría"
          subtitle="información"
          color="bg-green-500"
        ></Card>
        <Card
          title="Categoría"
          subtitle="información"
          color="bg-orange-500"
        ></Card>
      </div>
    </div>
    <div class="font-medium text-[#9CA2C3] py-4">TODAYS TASKS</div>
    <div>
      <ul>
        <li v-for="(todo, index) in todoStore.todoDataList" :key="todo.id">
          <div
            class="bg-[#FDFFFD] p-4 rounded-2xl flex items-center gap-4 mt-2 hover:bg-gray-200"
          >
            <el-checkbox
              :model-value="todo.check"
              size="large"
              @change="handleCheckboxChange(index)"
            />
            <div class="flex space-x-2">
              <button
                class="bg-red-500 rounded-full p-2 flex justify-center items-center"
                @click="deleteNow(index)"
              >
                <el-icon color="#ffffff"><Close /></el-icon>
              </button>
            </div>
            <div
              :class="todo.check ? 'line-through text-[#9CA2C3]' : 'text-black'"
            >
              {{ todo.content }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="fixed bottom-4 right-4 flex items-center justify-center">
      <button
        @click="navigateDetail()"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow p-4 justify-center items-center flex"
      >
        <el-icon size="24"><CirclePlus /></el-icon>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useTodoStore } from "../stores/tododata";
import Card from "../components/Card.vue";

import { Fold, Search, Bell, Close, CirclePlus } from "@element-plus/icons-vue";
import { ref } from "vue";
const todoStore = useTodoStore();
const router = useRouter();
const navigateDetail = () => {
  router.push("/detail");
};

const isLine = ref(false);

const deleteNow = (index) => {
  todoStore.todoDataList.splice(index, 1);
};

const handleCheckboxChange = (index) => {
  const todo = todoStore.todoDataList[index];

  if (todo.check) {
    todo.check = false;
    clearTimeout(todo.deleteTimeout);
  } else {
    todo.check = true;
    todo.deleteTimeout = setTimeout(() => {
      deleteNow(index);
    }, 3000);
  }
};
</script>


