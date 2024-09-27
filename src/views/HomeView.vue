<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from '@/components/JobListings.vue';
</script>


<template>
    <Hero title="Vue Jobs at HighLevel" subTitle="A potential SaaS platform company" />
    <HomeCards />
    <JobListings :limit="2" :showButton="true" />
</template>