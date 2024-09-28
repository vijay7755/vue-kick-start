<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from '@/components/JobListings.vue';
import { ref } from "vue";

const FN = ref("")
const LN = ref("")

</script>


<template>
    <div class="flex">
        <form class="my-2">
            <div class="my-3">
                <label>First Name: </label>
                <input class="border-2 border-gray-500 rounded" type="text" v-model="FN" />
            </div>
            <div>
                <label>Last Name: </label>
                <input class="border-2 border-gray-500 rounded" type="text" v-model="LN" />
            </div>
        </form>
    </div>
    <Hero title="Vue Jobs at HighLevel" subTitle="A potential SaaS platform company" :firstName="FN" :lastName="LN" />
    <HomeCards />
    <JobListings :limit="2" :showButton="true" />
</template>