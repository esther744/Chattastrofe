<template>

 <!-----------------------------------HEADER------------------------------------------>
    <div class="header">
            <div class="nav">
               
               <router-link to="/home"><img  class="logo" src="../assets/Chattastrofe-removebg-preview.png" alt="logo"></router-link>
                <ul class="nav_bar">
                    <li class="nav_item"><span class="material-symbols-outlined">home</span>  <router-link to="/home">Home</router-link>
                    </li>
                    <li class="nav_item" ><span class="material-symbols-outlined" >person </span > <router-link to="/profilo">Profilo</router-link></li>
                    <li @click="logout" class="nav_item" style="font-weight: bold; color: white;" ><span class="material-symbols-outlined">logout</span>Logout</li>
                    
                </ul>
            </div>
    </div>

</template>

<script setup>
import { ref, onMounted} from 'vue';

const emit=defineEmits(["logout"])
async function logout() {
 
    emit("logout")
}
</script>

<style>

</style>