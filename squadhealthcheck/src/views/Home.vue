<template>
  <div class="home">
    <p>Hello, nice to meet you!</p>
    <h2>Get moving with the Squad</h2>
    <section>
      <form class="frmCode" ref="form">
        <input type="number" placeholder="Enter code" onKeyPress="if(this.value.length==4) return false;" autofocus>
        <button id="btnCode"><i class="fa fa-arrow-right"></i></button>
      </form>
      <div>
        <h5><span>OR</span></h5>
      </div>
      <router-link to="/create"><button id="btnCreate">CREATE</button></router-link>
    </section>
  </div>
</template>

<style scoped>
  .home {
    flex: 1 0 auto;
    margin-right: 1em;
    margin-left: 1em;
    margin-top: 5em;
  }

  .home h2 {
    margin-top: 0.25em;
  }

  .home section {
    text-align: center;
    padding: 1.5em 0 1.5em 0;
  }

  .frmCode {
     position: relative;
     display: inline-block;
     width: 100%;
  }

  .fa-arrow-right {
    color: white;
  }

  .frmCode button:hover{
    cursor:pointer;
  }

  .frmCode input{
    font-family: 'Poppins', sans-serif;
    height: 60px;
    width: 100%;
    border-radius: 15px;
    border:none;
    outline:none;
    -moz-box-shadow:    4px 4px 1em #ccc;
    -webkit-box-shadow: 4px 4px 1em #ccc;
    box-shadow:         4px 4px 1em #ccc;
    text-indent: 2em;
    font-size: 18px;
    color: black;
  }

  #btnCreate {
    background-color: #FFA200;
    height: 60px;
    width: 100%;
    border-radius: 15px;
    border:none;
    outline:none;
    -moz-box-shadow:    4px 4px 1em #ccc;
    -webkit-box-shadow: 4px 4px 1em #ccc;
    box-shadow:         4px 4px 1em #ccc;
    font-weight: bold;
    color: white;
  }

  #btnCode {
    background-color: #FFA200;
  }

  .frmCode button {
    position: absolute;
    top: 10px;
    left: calc(100% - 3em);
    border:none;
    height:40px;
    width:40px;
    border-radius:100%;
  }

  h5 {
    text-align: center; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
    margin: 1em 30% 1em 30%;
  } 

  h5 span { 
    background:#fff; 
    padding:0 10px; 
  }

  @media screen and (min-width: 640px) {
    .frmCode {
        max-width: 20em;
    }

    #btnCreate {
       max-width: 18em;
    }

    h5 {
      margin: 1em 45% 1em 45%;
    }
  }
</style>