<script setup>
import { defineProps, ref, computed, watch, onMounted } from 'vue';
import { useFullName } from '@/composables/useFullName'

const props = defineProps({
    title: {
        type: String,
        default: "Become a Vue dev"
    },
    subTitle: {
        type: String,
        default: "All good company"
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
})

// // Create local ref
// const localFirstName = ref(props.firstName)
// const localLastName = ref(props.lastName)

// // Watch to sync localref with props whenever props change
// watch(() => props.firstName, (newValue) => {
//     localFirstName.value = newValue
// })
// watch(() => props.lastName, (newValue) => {
//     localLastName.value = newValue
// })

// // Compute method to concadinate fullname
// const fullName = computed({
//     get() {
//         return `${localFirstName.value} ${localLastName.value}`
//     },
//     set(newValue) {
//         const [first, last] = newValue.split(' ')
//         localFirstName.value = first || ''
//         localLastName.value = last || ''
//     }
// })

// onMounted(() => {
//     if (!props.firstName && !props.lastName) fullName.value = "Vijay Krishnan"
// })

const { fullName } = useFullName(props)

</script>

<template>
    <section class="bg-green-700 py-20 mb-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div class="text-center">
                <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                    {{ title }}
                </h1>
                <p class="my-4 text-xl text-white">
                    {{ subTitle }}
                </p>
                <h2 class="my-4 text-xl font-bold text-green-200">{{ fullName }}</h2>
            </div>
        </div>
    </section>
</template>