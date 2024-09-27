<script>
export default {
  data() {
    return {
      name: "Vijay Krishnan",
      status: "active",
      tasks: ["task one", "task two", "task three", "task four"],
      link: "https://vuejs.org/guide/essentials/template-syntax.html"
    }
  },
  methods: {
    toogleStatus() {
      if(this.status === "active") {
        this.status = "pending"
      } else if(this.status === "pending") {
        this.status = "non active"
      } else {
        this.status = "active"
      }
    }
  }
}
</script>

<template>
  <h1>Hello Vue :)</h1>
  <h2 v-if="status === 'active' ">This is {{ name }}</h2>
  <h2 v-else-if="status === 'pending' ">Status is pending!</h2>
  <h2 v-else>Please sign in</h2>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <hr/>
  <a v-bind:href="link">Vue guide</a>
  <a :href="link">Vue guide</a>
  <br />
  <button v-on:click="toogleStatus">Toogle Stauts</button>
  <button @click="toogleStatus">Toogle Stauts</button>
</template>


