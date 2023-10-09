<script setup>
import { RouterLink} from 'vue-router';
import { useGetData } from '@/composables/getData'

const {getData, data, loading, errorData} = useGetData()

getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">cargando información...</p>
    <div class="alert alert-danger" v-if="errorData">{{ errorData }}</div>
    <div v-if="data">
        <ul class="list-group">
            <li v-for="poke in data.results" class="list-group-item" :key="poke.id">
                <RouterLink :to="`/pokemons/${poke.name}`">{{ poke.name }}</RouterLink>
            </li>
        </ul>
        <button
            :disabled="!data.previous" 
            class="btn btn-warning me-2" 
            @click="getData(data.previous)">
            Prev
        </button>
        <button 
            :disabled="!data.next"
            class="btn btn-warning" 
            @click="getData(data.next)">
            Next
        </button>
    </div>

</template>  