<template>
    <div id="shc-header">
        <div id="shc-title">
            <section>
                <h1>Squad Health Check</h1>
                <br />
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star-half-o"></span>
                <p>
                    Increased awareness of where the squad is at, it’s state, challenges and opportunities.
                </p>
                
            </section>
            <router-link to="/"><img src="../assets/logo.png" /></router-link>
        </div>
    </div>
</template>

<style scoped>
    #shc-header{
        color: white;
        text-align: center;
        background-color: #FFA200;
    }

    section {
        height: 14em;
    }

    img {
        width: 8em;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        top: 10em;
    }
</style>