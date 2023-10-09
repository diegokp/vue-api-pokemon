<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const home = () => {
    router.push("/")
}
</script>


<template>
    <div>
        404
    </div>
    <button @click="home" class="btn btn-primary">Home</button>
</template>