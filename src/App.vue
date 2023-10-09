<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav class="navbar bg-dark">
  <div class="container">
    <router-link class="navbar-brand text-white" to="/">
      <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Pokemons API
    </router-link>
    <div>
      <router-link class="btn btn-outline-info mx-1" to="/">Home</router-link>
      <router-link class="btn btn-outline-info mx-1" to="pokemons">Pokemons</router-link>
      <router-link class="btn btn-outline-info mx-1" to="favoritos">Favoritos</router-link>
    </div>
  </div>
</nav>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Pokemons">Pokemons</RouterLink>

      </nav>
    </div>
  </header> -->
  <div class="container text-center">
    <RouterView />
  </div>
  
</template>
