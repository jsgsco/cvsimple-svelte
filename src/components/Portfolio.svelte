<script>
    import { onMount } from 'svelte'
    import Box from "./utils/Box/Box.svelte";
    let proyects = []

    onMount(async () => {
        const url = 'https://jsgsco-server.herokuapp.com/features'
        const res = await fetch(url)
        proyects = await res.json() 
    })

</script>

<main>
    <div class="container">
        <div class="text-behind">
            <h3>Portfolio</h3>
            <h4>Proyects</h4>
        </div>

        <div class="proyects">
            {#each proyects as proyect}
                <Box 
                    summary={proyect.summary}
                    technologyes={proyect.technologyes}
                    title={proyect.title}
                    url={proyect.url}
                />
            {:else}
                <p>Loading...</p>
            {/each}
        </div>

    </div>
</main>

<style>

    h4 {
        position: absolute;
        font-size: 110px;
        opacity: 0.1;
        font-family: Ubuntu Condensed;
    }

    h3 {
        font-size: 50px;
        text-transform: uppercase;
        font-style: oblique;
    }

    .proyects {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 25px;

        animation-name: proyect;
        animation-duration: 3s;
    }

   .text-behind {
       padding-top: 70px;
       width: 100%;
       text-align: center;
       display: flex;
       justify-content: center;
       align-items: flex-end;
   }

    main {
        width: 100%;
        height: 100vh;
        background-color: #0d0d0dfd;
        color: white;
    }

    .container {
        width: 80%;
        margin: auto;
    }

    @media screen and (max-width: 960px ) {

        main {
            height: auto;
        }

        .container {
            width: 90%;
        }
    }

    @keyframes proyect {
        0% {
            opacity: 0.1;
            transform: translateX(10%);
        }
        
        100% {
            transform: translateX(0%);
        }
    }
</style>