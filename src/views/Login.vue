<template>
  <div class="body">
    <!-- <div v-if="messaggio"   class="pop" >
       <h3>{{  messaggio }}</h3>
    </div>-->
<!----------------------------------------------MESSAGGIO------------------------------------------------------------------------>
  <div v-if="messaggioT"   class="pop t" >
    <h3>  <span class="material-symbols-outlined">done_outline </span> {{messaggioT }}  </h3>
  </div> 
  <div v-if="messaggioF"   class="pop f" >
    <h3> <span class="material-symbols-outlined">warning</span> {{  messaggioF }} </h3>
  </div>
    <div class="container">
        <h3>Accedi!</h3>
<!----------------------------------------------FORM LOGIN------------------------------------------------------------------------>
        <div class="form">
  
            <label for="name">Username:</label>
            <input v-model="utente.username" class="text-box" type="text" id="username" name="username" placeholder="Inserisci Username...">
    
            <label for="name">Password:</label>
            <div class="occhio">
              <input :type="passwordVisible ? 'text' : 'password'" v-model="utente.password" class="text-box" id="password" name="password" placeholder="Inserisci Password..." />
              <span class="material-symbols-outlined" @click="passwordVisible = !passwordVisible">{{passwordVisible ? "visibility": "visibility_off"}}</span>
            </div>
           
            <div class="button">
            <input  @click="login" type="submit" value="Invia">
            </div>
        </div>
        <p>Non sei iscritto? <router-link to="/registrazione">Registrati!</router-link></p>
    </div>
    <img  class="logo" src="../assets/Chattastrofe__2.png" alt="logo" style="width: 300px;">
  </div>
</template>


<script setup>
import { ref } from 'vue';
import  axios  from 'axios';
import { onMounted } from 'vue';
import { routeLocationKey } from 'vue-router';
import router from '@/router';

//const messaggio=ref();
const messaggioT=ref();
const messaggioF=ref();
const passwordVisible=ref(false)

const utente= ref({
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
//---------------------------------------------------LOGIN--------------------------------------------------------------
async function login(){
    try {
        const response=await axios.post("http://192.168.125.165:3000/login",  {username:utente.value.username, password:utente.value.password})
        console.log(response.data);
        //messaggio.value= response.data;
        messaggioT.value= response.data.message;
        await sleep(3000);
        //messaggio.value="";
        messaggioT.value="";
            // Save data to sessionStorage
        sessionStorage.setItem("token", response.data.token)

        router.push("/home")
    }catch (error){
        //messaggio.value= error.response.data;
        messaggioF.value= response.data.message;
        console.log(error.response.data.message);
        await sleep(3000);
        //messaggio.value="";
        messaggioF.value="";
    }
}
onMounted(()=> {
    sessionStorage.clear();
});


</script>

<style>
</style>