<template>
<div class="home">
  <div class="header">
    <h1 class="header-logo">独り言App</h1>
    </div>
  <div class="main">
    <p class="main-text">つぶやく内容を入力してください</p>
    <div class="send-text">
      <input type="text" v-model="text" class="sendtext">
      <button @click="send(id,name,button)" class="submit-button button">つぶやく</button>
    </div>
  </div>
  <div class="tubuyaki">
    <p class="tubuyaki-logo">つぶやき一覧</p>
    <div class="tubuyaki-border">
    <table v-for="(data,index) in list" :key="index" class="tubuyaki-square" >
      <tr class="tubuyaki-word">
      <td>{{data.name}}</td>
      <button class="tubuyaki-button" @click="delb(data.id)">{{data.button}}</button>
      </tr>
    </table>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created(){
    await this.$store.dispatch("login");
    console.log(this.$store.state.text.data);
  },
  data(){
    return{
      text:"",
      list:[
          {name:"test7",button:"削除する"},
          {name:"test6",button:"削除する"},
          {name:"test5",button:"削除する"},
          {name:"test4",button:"削除する"},
          {name:"test3",button:"削除する"},
          {name:"test2",button:"削除する"},
          {name:"test1",button:"削除する"}
      ]
    }
  },
  methods:{
    async getContact(){
      const resData=await axios.get("http://127.0.0.1:8000/api/tweet/");
      this.list=resData.data.data;
    },
    async send(){
      this.list.unshift({
        name:this.text,button:"削除する"
      })
      const sendData={
        name:this.text,
        button:"削除する"
      };
      this.text="";
      this.router.go({
        path:this.$router.currentRoute.path,
        force:true,
      })
      await axios.post( "http://127.0.0.1:8000/api/tweet",sendData);
      await this.getContact();
    },
    async delb(id) {
      this.list.shift({name:this.text,button:"削除する"})
      await axios.delete("http://127.0.0.1:8000/api/tweet/" + id);
      await this.getContact();
    },
  },
  };
</script>

<style>
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

html {
  background-color: #ffffff;
}
* {
  color: #000;
  font-family: "Noto Sans JP";
}

.button{
  color: #000;
}

.header{
  text-align: center;
  margin-top: 20px;
}

.header-logo{
  font-weight: bold;
  font-size: 28px;
  color: #000;
}

.main{
  text-align: center;
  margin-top: 50px;
}

.main-text{
  color: #000;
  font-size: 17px;
}

.sendtext{
  margin-right: 5px;
  height: 15px;
}

.submit-button{
  font-weight: bold;
}

.tubuyaki-logo{
  text-align: center;
  margin: 50px;
  font-weight: bold;
  font-size: 23px;
}

.tubuyaki-border{
  border: 1px solid #000;
  width: 50%;
  margin: 0 auto;
}
.tubuyaki-square{
  margin: 0 auto;
  margin: 15px;
  display: inline-block;
  width: 100%;
}

.tubuyaki-word{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

td::before{
  content: "●";
  color: RED; 
  font-size: 50px;
  vertical-align: middle;
}

.tubuyaki-button{
  margin-right: 50px;
}
</style>