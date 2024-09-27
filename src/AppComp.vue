<script setup>
import { onMounted, ref } from 'vue';

// export default {
// setup() {
const name = ref("Vijay Krishnan")
const status = ref("active")
const tasks = ref(["task one", "task two", "task three", "task four"])
const link = ref("https://vuejs.org/guide/essentials/template-syntax.html")
const newTask = ref("")

const toogleStatus = () => {
  if (status.value === "active") {
    status.value = "pending"
  } else if (status.value === "pending") {
    status.value = "non active"
  } else {
    status.value = "active"
  }
}

const addTask = () => {
  console.log("new Task: ", newTask.value)
  if (newTask.value.trim !== "") {
    tasks.value.push(newTask.value)
    newTask.value = ""
  }
}

const deleteTask = (deleteItem) => {
  tasks.value.splice(deleteItem, 1)
}

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    console.log(data)
    tasks.value = data.map(item => item.title).filter((item, index) => index < 10)
  }
  catch(e) {
    console.log(e.message)
  }
})
// return {
//   name,
//   status,
//   tasks,
//   link,
//   toogleStatus
// }
//   }
// }
</script>

<template>
  <h1>Hello Vue :D</h1>
  <h2 v-if="status === 'active'">This is {{ name }}</h2>
  <h2 v-else-if="status === 'pending'">Status is pending!</h2>
  <h2 v-else>Please sign in</h2>
  <br />
  <br />
  <form @submit.prevent="addTask">
    <label for="add-task">Add Task</label>
    <hr />
    <input type="text" id="add-task" name="newTask" v-model="newTask" />
    <br />
    <button type="submit">Submit</button>
  </form>
  <br />
  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <br />
  <a v-bind:href="link">Vue guide</a>
  <a :href="link">Vue guide</a>
  <br />
  <!-- <button v-on:click="toogleStatus">Toogle Stauts</button> -->
  <button @click="toogleStatus">Toogle Stauts</button>
</template>
