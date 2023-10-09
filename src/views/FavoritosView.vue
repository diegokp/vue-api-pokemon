<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs} from 'pinia';
import { RouterLink } from 'vue-router'

const useFavoritos = useFavoritosStore();
const { favoritos } = storeToRefs(useFavoritos);
const { remove }= useFavoritos;

</script>


<template>
    <h1>
       Favoritos 
    </h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul class="list-group" v-else>
        <li 
        class="list-group-item"
        v-for="poke in favoritos"
        :key="poke.id"
        >
        {{ poke.name }}
                <router-link  class="btn btn-sm btn-info" :to="`/pokemons/${poke.name}`">Mas Info</router-link>
                <button @click="remove(poke.id)" class="btn btn-sm btn-danger">Delete</button>
        </li>
    </ul>
</template>