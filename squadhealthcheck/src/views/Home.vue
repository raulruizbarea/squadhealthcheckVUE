<template>
  <div class="home">
    <p>Hello, nice to meet you!</p>
    <h2>Get moving with the Squad</h2>
    <div>
      <form class="frmCode" ref="form">
        <input type="number" v-model="code" placeholder="Enter code" onKeyPress="if(this.value.length==4) return false;">
        <button id="btnCode"><i class="fa fa-arrow-right"></i></button>
      </form>
      <h3><span>OR</span></h3>
      <router-link to="/create"><button id="btnCreate">CREATE</button></router-link>
    </div>
  </div>
</template>

<style scoped>
  .home {
    margin-right: 1em;
    margin-left: 1em;
    margin-top: 4em;
        flex: 1 0 auto;
  }

  .home div{
    text-align: center;
  }

  .frmCode {
     position: relative;
     display: inline-block;
  }

  .fa-arrow-right {
    color: white;
  }

  .frmCode button:hover{
    cursor:pointer;
  }

  .frmCode input{
    height: 60px;
    width: 300px;
    border-radius: 4px;
    border:none;
    outline:none;
    -moz-box-shadow:    1px 1px 1px 1px #ccc;
    -webkit-box-shadow: 1px 1px 1px 1px #ccc;
    box-shadow:         1px 1px 1px 1px #ccc;
    text-indent: 1em;
    font-size: 1.5em;
    color: black;
  }

  #btnCreate {
    background-color: #FFA200;
    height: 60px;
    width: 300px;
    border-radius: 4px;
    border:none;
    outline:none;
    -moz-box-shadow:    1px 1px 3px 3px #ccc;
    -webkit-box-shadow: 1px 1px 3px 3px #ccc;
    box-shadow:         1px 1px 3px 3px #ccc;
    font-size: 1.5em;
    font-weight: bold;
    color: white;
  }

  #btnCode {
    background-color: #FFA200;
  }

  .frmCode button {
    position: absolute;
    top: 10px;
    left: calc(100% - 4em);
    border:none;
    height:40px;
    width:40px;
    border-radius:100%;
  }

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: black;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: black;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: black;
  }

  h3 {
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
  } 

  h3 span { 
      background:#fff; 
      padding:0 10px; 
  }
</style>