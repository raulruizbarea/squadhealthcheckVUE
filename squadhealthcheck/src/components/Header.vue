<template>
    <div id="shc-header">
        <section>
            <h1>Squad Health Check</h1>
            <br />
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star-half-o"></span>
            <p>Increased awareness of where<br/>the squad is at, it’s state,<br/>challenges and opportunities.</p>
        </section>
        <router-link to="/"><img src="../assets/logo.png" /></router-link>
    </div>
</template>

<style scoped>
    #shc-header{
        color: white;
        text-align: center;
        background-color: #FFA200;
        border-bottom-left-radius: 50% 15%;
        border-bottom-right-radius: 50% 15%;
    }

    section {
        height: 16em;
    }

    section h1 {
        padding-top: 1.75em;
    }

    section span {
        padding-left: 0.5em;
        font-size: 0.75em;
    }

    section p {
        margin-top: 0.25em;
        line-height: 1em;
    }

    img {
        width: 7em;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        top: 12.5em;
    }
</style>