<template>
<!---<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
--> 
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
*{
font-family: "Montserrat", serif;
}
.overlay{
    background-color: rgba(0, 0, 0, 0.44);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 500;
}

body{
  margin: 0;
}

.body{
    
    background-color: #e3c39d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    row-gap: 100px;
}

.pop{
  z-index: 1000;
  background-color: #071739;
  background-image: linear-gradient(to right, rgb(4, 173, 80) , #071739);
  color: rgb(222, 231, 230);
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 10px 10px 20px rgb(179, 229, 243);
  width: 200px;
  height: 100px;
  position: fixed;
  align-items: center;
  justify-content: center;
}
.t span {
    color: greenyellow;
    background-image: linear-gradient(to right, rgb(4, 173, 80) , rgb(14, 37, 64));
}
.f span {
    color: red;
    background-image: linear-gradient(to right, rgb(173, 4, 4) , rgb(14, 37, 64));
}
.occhio{
  position: relative;
  display: flex;
  flex-direction: column;
}

.occhio span{
  position: absolute;
  right: 18px;
  bottom: 4px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: gray;
}
.container{
    /*background-color:rgb(103, 224, 233);*/
    z-index: 900;
    background-color: #a4b5c4;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 35%;
    border-radius: 8px;
    padding: 10px;
    
}
.text_post{
    z-index: 900;
    background-color: #a4b5c4;
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
.text_post label{
    padding-bottom: 5px;
    padding-top: 2px;
    text-align: left;
    display: block;
}

.button{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.button > input[type="submit"]{
    background-color: #4b6382;
    text-transform: uppercase;
    margin-top: 20px;
    border-radius: 20px;
    border: none;
    height: 40px;
    width: 200px;

}
.button > input[type="submit"]:hover{
    color: black;
    background-color: #cdd5db;
    border: 2px solid #4b6382;
   /* transition: background-color 0.5s, transform 0.5s;
    transform: scale(1.1);*/
    animation-name: example;
    animation-duration: 4s;
    position: relative;
}
.button button{
  background-color: #4b6382;
    text-transform: uppercase;
    margin-top: 20px;
    border-radius: 20px;
    border: none;
    height: 40px;
    width: 200px;

}
.button button:hover{
  color: black;
    background-color: #cdd5db;
    border: 2px solid #4b6382;
    animation-name: example;
    animation-duration: 4s;
    position: relative;
}

</style>
