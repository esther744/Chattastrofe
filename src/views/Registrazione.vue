<template>
  <div class="body">
   <!--<div v-if="messaggio"   class="pop" >
       <h3>{{  messaggio }}</h3>
    </div> -->
    <!----------------------------------------------MESSAGGIO------------------------------------------------------------------------>
  <div v-if="messaggioT"   class="pop t" >
    <h3>  <span class="material-symbols-outlined">done_outline </span> {{messaggioT }}  </h3>
  </div> 
  <div v-if="messaggioF"   class="pop f" >
    <h3> <span class="material-symbols-outlined">warning</span> {{  messaggioF }} </h3>
  </div>
    <div class="container">
        <h3>Registrati!</h3>
        <div class="form">
<!----------------------------------------------FORM REGISTRAZIONE------------------------------------------------------------------------>
            <label for="name">Nome:</label>
            <input v-model="utenti.nome" class="text-box" type="text" id="name" name="name" placeholder="Inserisci Nome..." >
    
            <label for="name">Cognome:</label>
            <input v-model="utenti.cognome"  class="text-box" type="text" id="surname" name="surname" placeholder="Inserisci Cognome...">
    
            <label for="name">Username:</label>
            <input v-model="utenti.username" class="text-box" type="text" id="username" name="username" placeholder="Inserisci Username...">
    
            <label for="name">Password:</label>
            <div class="occhio">
            <input :type="passwordVisible ? 'text' : 'password'" v-model="utenti.password" class="text-box" id="password" name="password" placeholder="Inserisci Password..." />
            <span class="material-symbols-outlined" @click="passwordVisible = !passwordVisible">{{passwordVisible ? "visibility": "visibility_off"}}</span>
            </div>
            <div class="button">
            <input  @click="inviaDati" type="submit" value="Invia">
            </div>
        </div>
        <p>Sei già iscritto? <router-link to="/">Accedi</router-link></p>
    </div>
    <img  class="logo" src="../assets/Chattastrofe__2.png" alt="logo" style="width: 300px;">
  </div>
</template>

<script setup>
import { ref } from 'vue';
import  axios  from 'axios';
import router from '@/router';

//const messaggio=ref();
const messaggioT=ref();
const messaggioF=ref();
const passwordVisible=ref(false)

const utenti= ref({
  nome:"",
  cognome:"",
  username:"",
  password:""
})
function sleep(t){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve (); 
    },t)
  });
}
//---------------------------------------------------INVIA DATI- REGISTRAZIONE--------------------------------------------------------------
async function inviaDati(){

  try {

  const response = await axios.post("http://192.168.125.165:3000/registrazione", utenti.value)
    console.log(response.data);
    //messaggio.value= response.data;
    messaggioT.value= response.data;
    await sleep(3000);
    //messaggio.value="";
    messaggioT.value="";
    router.push("/")
  } catch (error){
    //messaggio.value= error.response.data;
    messaggioF.value= response.data;
    console.log(error.response.data);
    await sleep(3000);
    //messaggio.value="";
    messaggioF.value="";
    //alert(error.response.data)
  }
}




</script>


<style>
</style>