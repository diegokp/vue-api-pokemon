import { defineStore } from 'pinia';
import {computed, ref} from 'vue';

// COMPOSITION API
export const useCounterStore = defineStore('counter', () =>{
    const count = ref(0);

    const increment = () => count.value ++;

    const double = computed(()=> count.value*2)


    return {
        count,
        increment,
        double

    };
});





// API OPCIONES
// export const useCounterStore = defineStore('counter',{
//     // data reactiva
//     state: () => ({
//         count: 0,
//     }),
//     // methods
//     actions: {
//         increment() { 
//             this.count++;
//         },
//     },
//     // computed
//     getters: {
//         double: (state) => state.count * 2,
//     },
// })