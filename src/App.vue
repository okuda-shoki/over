<template>
<div id="app">
  <div class="header">
    <h1 class="header-logo">独り言App</h1>
    </div>
  <div class="main">
    <p class="main-text">つぶやく内容を入力してください</p>
    <div class="send-text">
      <input type="text" v-model="text" class="sendtext">
      <button @click="send" class="submit-button button">つぶやく</button>
    </div>
  </div>
  <div class="tubuyaki">
    <h2 class="tubuyaki-logo">つぶやき一覧</h2>
    <div class="tubuyaki-text">
      <ul class="tubuyaki-border">
        <li v-for="(item,index) in list" :key="index" class="square">{{item.name}}</li>
        <button @click="drop" class="submit-button button">削除する</button>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      text:"",
      list:[
          {name:"text1"},
          {name:"text2"}
      ]
    }
  }
}
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
  color: black;
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

.tubuyaki{
  text-align: center;
}


.tubuyaki-logo{
  color: #000;
}

.tubuyaki-text{
  border: 1px solid #000;
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
}

.tubuyaki-border{
  display: flex;
}

.square{
  display: inline-block;
  width: 100%;
  text-align: left;
}
</style>