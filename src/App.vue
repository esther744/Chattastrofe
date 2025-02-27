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

body{
  margin: 0;
}
label{
   padding-bottom: 5px;
   padding-top: 2px;
   text-align: left;
   display: block;
}
h3 {
    text-align: center;
    font-weight: bold;
}
p{
    display: block;
    text-align: left;
    padding-left: 20px;
}
ul{
    text-align: left;
}
a{
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.overlay{
    background-color: rgba(0, 0, 0, 0.44);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 500;
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
.form{
    display: flex;
    flex-direction: column;
}.text-box{
    border-radius: 4px;
    border:1px solid lightgrey;
    height: 30px;
    
}
.pop{
  z-index: 1000;
  background-color: #4b6382;
  color: rgb(222, 231, 230);
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  height: 100px;
  position: fixed;
  align-items: center;
  justify-content: center;
}
.t span {
    color: greenyellow;
}
.f span {
    color: red;
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
  cursor: pointer;
}

.container{
    /*background-color:rgb(103, 224, 233);*/
    z-index: 900;
    background-color: #6d9773;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 35%;
    border-radius: 8px;
    padding: 10px;
    color: white;
}

.text_post{
    z-index: 900;
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
.text_post label{
    padding-bottom: 5px;
    padding-top: 2px;
    text-align: left;
    display: block;
}
span{
  cursor: pointer;
}
.button{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.button > input[type="submit"]{
    background-color: #0c3b2e;
    text-transform: uppercase;
    margin-top: 20px;
    border-radius: 20px;
    border: none;
    height: 40px;
    width: 200px;
    color: white;
    cursor: pointer;
    transition: all 0.5s;
}
.button > input[type="submit"]:hover{
   font-weight:bold ;
    background-color: #155240;
    border: 2px solid #0c3b2e;
   /* transition: background-color 0.5s, transform 0.5s;
    transform: scale(1.1);*/
    animation-name: example;
    animation-duration: 4s;
    position: relative;
    cursor: pointer;
    transform: scale(1.1);
}
.button button{
  background-color: #0c3b2e;
    text-transform: uppercase;
    margin-top: 20px;
    border-radius: 20px;
    border: none;
    height: 40px;
    width: 200px;
    color: white;
    cursor: pointer;
    transition: all 0.5s;
}
.button button:hover{
   font-weight:bold ;
    background-color: #155240;
    border: 2px solid #0c3b2e;
    animation-name: example;
    animation-duration: 4s;
    position: relative;
    cursor: pointer;
    transform: scale(1.1);
}

</style>
