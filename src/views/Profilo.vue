<template>
<div class="bodx">
    
    <!-----------------------------------HEADER------------------------------------------>
    <Header @logout="showLogout=true" />
    <!-----------------------------------CONTAINERX------------------------------------------>
    <div class="containerx prova">
                  <!-----------------------------------MODIFICA POST------------------------------------------>

                  <div v-if="showProfiloCard || showLogout || showCardUpdate" class="overlay"></div>

                  <div v-if="showCardUpdate" class="cardUpdate text_post">
                    <span @click="chiudiQuattro" class="material-symbols-outlined">close</span>
                    <h3 >{{ dio.username }}</h3>
                    <div class="line"></div>
                        <label for="name">Testo:</label>
                        <input type="text" class="text-box" v-model="dio.titolo" placeholder="Modifica titolo.">
                        <label for="name">Descrizione:</label>
                        <input type="text" class="text-box" v-model="dio.testo" placeholder="Modifica descrizione">
                        <div class="button">
                            <input  @click="modificaPost(dio);chiudiQuattro()" type="submit" style="color: white;" value="Conferma modifica">
                        </div>
                    </div>

    <!-----------------------------------LOGOUT------------------------------------------>
        <div v-if="showLogout" class="logoutCard text_post">
            <h2>sei sicuro di voler uscire ?</h2>
            <span @click="chiudiTre" class="material-symbols-outlined">close</span>
           <div class="button">
             <input @click="esci" type="submit" value="Sì, voglio uscire!">
            </div>
        </div>

        <div class="sidebar">
            
            <span class="material-symbols-outlined iconP">account_box</span>
            <div class="button">
            <button @click="updateProfilo">Modifica Profilo</button>
            </div>
            <!---<h3>Username:{{ utenti.username }} </h3>
            <h3>Nome:{{ utenti.nome }}    Cognome:{{  utenti.cognome }}</h3>
        -->
            <div v-if="utentePresente" >
                <h3>Età:{{ utenti.eta }}</h3>
                <h3>Sesso:{{ utenti.sesso }}</h3>
                <h3>Email:{{ utenti.email }}</h3>
                <h3>Città:{{ utenti.citta }}</h3>
                <h3>Situazione sentimentale:{{ utenti.situazioneSentimentale }}</h3>
                <h3>Professione:{{ utenti.professione }}</h3>
                <h3>Hobby:{{ utenti.hobby }}</h3>
            </div>

        </div>
<!-----------------------------------PROFILO CARD(UTENTI)------------------------------------------>

        <div v-if="showProfiloCard" class="profiloForm text_post">
            <h3>Aggiorna il tuo profilo</h3>
            <span @click="chiudiDue" class="material-symbols-outlined">close</span>
            <div class="post_input">
            <label for="name">Età:</label>
            <input v-model="utenti.eta" class="text-box" type="text" id="name" name="name" placeholder="Inserisci Età..." >
    
            <label for="name">Sesso:</label>
            <input v-model="utenti.sesso"  class="text-box" type="text" id="surname" name="surname" placeholder="Inserisci Sesso...">
    
            <label for="name">Email:</label>
            <input v-model="utenti.email" class="text-box" type="text" id="username" name="username" placeholder="Inserisci Email...">
    
            <label for="name">Città:</label>
            <input v-model="utenti.citta" class="text-box" type="text" id="name" name="name" placeholder="Inserisci Città..." >
    
            <label for="name">Situazione sentimentale:</label>
            <input v-model="utenti.situazioneSentimentale" class="text-box" type="text" id="name" name="name" placeholder="Inserisci la tua Situazione Sentimentale..." >
    
            <label for="name">Professione:</label>
            <input v-model="utenti.professione" class="text-box" type="text" id="name" name="name" placeholder="Inserisci Professione..." >
    
            <label for="name">Hobby:</label>
            <input v-model="utenti.hobby" class="text-box" type="text" id="name" name="name" placeholder="Inserisci Hobby..." >
    
            <div class="button">
            <input  @click="aggiornaProfilo" type="submit" value="Invia">
            </div>
            </div>
        </div>
<!-----------------------------------AREA POST------------------------------------------>

<div class="area_post profilo" >
            <div class="post postProfilo" v-for="dio in posts" >
                <div class="line"><h3>{{ dio.username }}</h3></div>
                   
                    <h4><b>{{ dio.titolo }}</b></h4>
                    <p>{{ dio.testo }}</p> 
                    <h5>{{ dio.data }}</h5>
                    <span @click="eliminaPost(dio)" class="material-symbols-outlined delete">delete</span>
                    <div class="button">
                        <button @click="updatePost(dio)" style="color: white;">Modifica</button>
                     </div>
            </div>

</div>
        
        <br>
</div>
     <!-----------------------------------FOOTER------------------------------------------>
     <Footer />
</div>
</template>


<script setup> 
import { ref } from 'vue';
import  axios  from 'axios';
import { onMounted } from 'vue';
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
//-------------------------------------------LOGOUT-------------------------------------------------------------------
const showLogout=ref(false);
async function esci() {
  sessionStorage.removeItem("token"); 
  router.push("/")

}
const utentePresente=ref(false)
const showProfiloCard=ref(false);
//-------------------------------------------MOSTRA UPDATE PROFILO-------------------------------------------------------------------
async function updateProfilo() {
    showProfiloCard.value=true;
}
//-------------------------------------------CHIUDE PROFILO CARD-------------------------------------------------------------------
async function chiudiDue() {
    showProfiloCard.value=false;
}
//-------------------------------------------CHIUDE LOGOUT-------------------------------------------------------------------
async function chiudiTre() {
    showLogout.value=false;
}
//-------------------------------------------MOSTRA CARD UPDATE-------------------------------------------------------------------
async function updatePost(postSelezionato) {
    dio.value={...postSelezionato}
    showCardUpdate.value=true;
}
//-------------------------------------------CHIUDE CARD UPDATE-------------------------------------------------------------------
const showCardUpdate=ref(false);
async function chiudiQuattro() {
    showCardUpdate.value=false;
}
const dio=ref({    
    titolo:"",
    testo:"",
    username:"",
    data:"",
    id:""
});
const messaggio=ref();
const posts=ref({
    titolo:"",
    testo:"",
    username:"",
    data:"",
    id:""
})

const utenti= ref({ 
    id:"",
    nome:"",
    cognome:"",
  username:"",
  eta:"",
  sesso:"",
  email:"",
  citta:"",
  situazioneSentimentale:"",
  professione:"",
  hobby:""
})
const utente=ref({
    nome:"",
    cognome:"",
    username:""
})

function sleep(t){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve (); 
    },t)
  });
}
async function datiUtente(){
try {
    let config = {
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }}
    const response = await axios.get("http://192.168.125.165:3000/profilo/datiutente", config)
       utenti.value = response.data;
       console.log(response)
    }catch (error) {
        console.log(error.message);
    } 
}

onMounted(()=> {
    datiUtente();
});
//------------------------------------------------AGGIORNA PROFILO----------------------------------------------------------------

async function aggiornaProfilo(){
try {
    let config = {
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }}
    const response = await axios.post("http://192.168.125.165:3000/profilo/areapersonale", {...utenti.value}, config)
    console.log(response.data);
    messaggio.value= response.data;
    utentePresente.value=true;

    await sleep(1000);
    messaggio.value="";
 

} catch (error){
    messaggio.value = error.response.data;
    console.log(error.response.data);
    await sleep(1000);
    messaggio.value="";
    //alert(error.response.data)
}
}
//------------------------------------------------MODIFICA POST----------------------------------------------------------------
async function modificaPost(dio){
try {
    let config = {
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }}
    const response = await axios.post("http://192.168.125.165:3000/post/modifica", {...dio}, config)
    console.log(response.data);
    messaggio.value= response.data;
    chiudiQuattro();
    mostraMieiPosts();
    await sleep(1000);
    messaggio.value="";
} catch (error){
    messaggio.value = error.response.data;
    console.log(error.response.data);
    await sleep(1000);
    messaggio.value="";
    //alert(error.response.data)
}
}
//------------------------------------------------PROFILO AGGIORNATO----------------------------------------------------------------

async function profiloAggiornato(){
    try {
        let config = {
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }}
        const response=await axios.post("http://192.168.125.165:3000/profilo/datiutente", config)
        utenti.value = response.data;
        console.log(response)
    }catch (error) {
        console.log(error.message);
    }
}
//------------------------------------------------MOSTRA POST----------------------------------------------------------------

async function mostraMieiPosts(){
    try {
        let config = {
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }}
        const response=await axios.get("http://192.168.125.165:3000/profilo", config)
        posts.value = response.data;
        console.log(response)
    }catch (error) {
        console.log(error.message);
    }
}

onMounted(()=> {
    mostraMieiPosts();
    profiloAggiornato();
});

//------------------------------------------------ELIMINA POST----------------------------------------------------------------

async function eliminaPost(dio){
    try {
        let config = {
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }}
        const response = await axios.post(`http://192.168.125.165:3000/post/elimina`,{...dio}, config)
        utenti.value = response.data;
        console.log(response);
        await mostraMieiPosts();
    }catch (error) {
        console.log(error.message);
    }
}


</script>

<style>
/*-----------------------------------------SIDEBAR-------------------------------------- */
.prova{
    display: flex;
    margin-top: 80px;
    position: relative;
}
.postProfilo{
    margin-left: 450px;
    width: 45%;
}
.sidebar{
  background: #6d9773;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
}
.iconP{
font-size: 100px;
}

.profilo{
    width: 80%;
}

.profiloForm{
    height: 600px;
    position: absolute;
    z-index: 1000;
    margin-top: 0px;
    top: 20px;
}
.profiloForm span{
    position: absolute;
    right: 10px;
    top: 10px;
    color: rgb(34, 48, 63);
}
.cardUpdate{
    position: absolute;
    top: 0;
    color: black;
    margin-left: 90px;
   z-index: 800;
}
.area_post{
    position: relative;
    margin: 0;
    z-index: 6;
}
.delete{
cursor: pointer;
    
}
</style>