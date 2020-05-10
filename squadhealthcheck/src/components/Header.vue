<template>
    <div id="shc-header">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
        <div id="shc-title">
            <section>
                <h1>Squad Health Check</h1>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star-half-o"></span>
                <p>
                    Increased awareness of where the squad is at, it’s state, challenges and opportunities.
                </p>
            </section>
        </div>
    </div>
</template>

<style scoped>
    #shc-header{
        color: white;
        text-align: center;
        overflow: hidden;
    }
    #nav{
        text-align: right;
        font-size: 1em;
        letter-spacing: 1px;
        padding: 1em;
        background-color: #FFA200;
    }
    #nav a{
        color:white;
        margin: 1em;
    }
    #nav a:link, a:visited, a:active{
        text-decoration: none;
    }
    #nav a:hover {
        text-decoration: underline;
    }

    #shc-title {
        height: 20vh;
        background-color: #FFA200;
    }

    #shc-title h1{
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 3em;
    }
</style>