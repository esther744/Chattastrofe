<template>
    <div class="bodx">
        <!-----------------------------------HEADER------------------------------------------>
        <Header @logout="showLogout=true" />
        <!-----------------------------------CONTAINERX------------------------------------------>
        <div class="containerx">
        <div v-if="showLogout" class="overlay"></div>

    <!-----------------------------------LOGOUT------------------------------------------>
            <div v-if="showLogout" class="text_post logoutCard">
                <span @click="chiudi" class="material-symbols-outlined">close</span>
                <h2>sei sicuro di voler uscire ?</h2>
                <div class="button">
                    <input  @click="esci" type="submit" value="Sì, voglio uscire!">
                </div>
            </div>
             <!--------------------------------------------------PUBBLICA POST(POX)------------------------------------------------------------->
             <div class="text_post" >
                <h3>Condividi i tuoi pensieri!</h3>
                <div class="post_input">
                <label for="">Inserisci titolo:</label>
                <input v-model="pox.titolo" type="text" class="post_box" placeholder="...">
                <label for="">Inserisci descrizione:</label>
                <textarea v-model="pox.testo" class="post_box" name="" id="" rows="3" cols="50" placeholder="A cosa stai pensando?"></textarea>
                <div class="button">
                <input  @click="pubblicaPost" type="submit" value="Pubblica!">
                </div>
            </div>
            </div>
            <!--------------------------------------------------MOSTRA POST(POSTS)------------------------------------------------------------->
            <div class="area_post" >
                <div class="post" v-for="post in posts" >
                 <div class="line"><h3>{{ post.username }}</h3></div>
                 <h4><b>{{ post.titolo }}</b></h4>
                 <p>{{ post.testo }}</p> 
                 <h5>{{ post.data }}</h5>
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
const messaggio=ref();
const showLogout=ref(false);


//-------------------------------------------LOGOUT-------------------------------------------------------------------
async function esci() {
    sessionStorage.removeItem("token"); 
    router.push("/");
}
//-------------------------------------------CLLOSE LOGOUT-------------------------------------------------------------------
async function chiudi() {
    showLogout.value=false;
}

const posts=ref({
    username:"",
    titolo:"",
    testo:"",
    data:""
})
const pox=ref({
    titolo:"",
    testo:"",
    username:""
})

function sleep(t){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve (); 
    },t)
  });
}
//-------------------------------------------PUBBLICA POST(POX)-------------------------------------------------------------------
async function pubblicaPost(){
try {
    let config = {
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }}
    const response = await axios.post("http://192.168.125.165:3000/post", {...pox.value}, config)
    console.log(response.data);
    messaggio.value= response.data;
    await sleep(1000);
    messaggio.value="";
    mostraPosts();

} catch (error){
    messaggio.value = error.response.data;
    console.log(error.response.data);
    await sleep(1000);
    messaggio.value="";
    //alert(error.response.data)
}
}
//-------------------------------------------MOSTRA POST(POSTS)-------------------------------------------------------------------
async function mostraPosts(){
    try { 
        let config = {
            headers: {'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        }}
        const response=await axios.get("http://192.168.125.165:3000/home", config)
        posts.value = response.data;
        console.log(response)
    }catch (error) {
        console.log(error.message);
    }
}
onMounted(()=> {
    mostraPosts();
});
</script>

<style>
.bodx{
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    grid-template-rows: auto 1fr auto ;
    grid-template-columns: 1fr;
    height: 100vh; 
    margin: 0;
    background-color: #e3c39d;

}
a{
    text-decoration: none;
}
ul{
    list-style-type: none;
}
h3{
    text-align: center;
    font-weight: bold;
}
/*-----------------------------------------HEADER-----------------------------------------------------*/
.header {
    z-index: 800;
    position: fixed;
    grid-row: 1/2;
    background-color: #a68868;
    color: rgb(231, 232, 231);
    width: 100%;
}
.nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.logo{
    padding-left: 10px;
    width: 200px;
    height: auto;

}
.nav_bar{
    display: flex;
    flex-direction:row;
}
.nav_item{
    display: flex;
    flex-direction: row;
    padding:15px;
    font-size: 20px;
    cursor: pointer;
}
/*-----------------------------------------CONTAINERX-----------------------------------------------------*/

.containerx{
    grid-row: 2/3;
    background-color: #e3c39d;
    color: rgb(34, 48, 63);
}
.logoutCard{
    color: white;
    margin-top: 500px;
    margin-left: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    z-index: 600;
    position: absolute;
}
.logoutCard span{
    position: absolute;
    right: 10px;
    top: 10px;
}
.text_post{
    z-index: 900;
    color: white;   /**VERIFICA PER PALETTE */
    background-color: #6d9773;
    display: flex;
    flex-direction: column;
    width: 35%;
    border-radius: 8px;
    padding: 10px;
    margin-top: 150px;
    justify-content: center;
    align-items: space-between;
    margin-left: 33.33%;

}
.line{
    background-color: #6d9773;
    height: 40%;
    border-radius: 8px;
    width: 100%;
    color: #4b6382;
    padding-bottom: 10px;
}
.post {
    z-index: 100;
    background-color: #155240;
    color: rgb(231, 232, 231);
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 35%;
    /*border-radius: 10px 60px 30px; */
    padding: 10px;
    margin: 20px 20px 20px 638px;
    border-radius: 8px;
    
}
.post button:hover{
    background-color: #2b6454;
}
/*
.post:nth-child(even){
   /* background-image:  linear-gradient(to bottom right,  rgb(57, 74, 86),rgb(44, 100, 133),rgb(143, 191, 218));*/
    /*background-color: #a4b5c4;
    border: #4b6382;*/
  /*  & .line{
        background-color: rgb(143, 191, 218);
    } */
/*}*/
.post h3{
    text-align: right;
    padding-right: 10px;
    color: white;
}
.post p{
    text-align: center;
}
.post h5{
    text-align: right;
}
.post_input{
    display: flex;
    flex-direction: column;
}
.text_post label{
    padding-bottom: 5px;
    padding-top: 2px;
    text-align: left;
    display: block;
}
.post_box{
    /*border-radius: 4px;
    border:3px solid lightgrey;
    background-color:  rgb(229, 235, 247);
    height: 200px;
    width: 550px;*/
    border-radius: 4px;
    border: 1px solid lightgrey;
    height: 30px;
}

textarea{
    resize: none;
}
/*-----------------------------------------FOOTER-----------------------------------------------------*/

.footer{
    grid-row: 3/4;
    background-color: #0c3b2e;
    color: rgb(231, 232, 231);
}

.social{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap:20px ;
}

.footer_item{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap:20px ;
}
</style>
