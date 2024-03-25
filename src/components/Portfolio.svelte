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
            <h3>Works</h3>
            <h4>Experience</h4>
        </div>

        <div class="proyects">
            <Box 
                summary="Performed the migration from Cloudera CDH to Cloudera CDP, ensuring data integrity and minimizing system downtime. Adapted and migrated PySpark code to ensure compatibility and optimize performance on the new platform. Developed dynamic and visually appealing dashboards in Power BI, providing real-time analysis and facilitating informed decision making. Successfully implemented Kafka and Flume for real-time data ingestion and processing, improving scalability and efficiency of the data system. Additionally, I configured and installed Kafka and Flume to ensure connectivity and reliability of data flow across Cloudera infrastructure. Developed interactive web applications using React.js to enhance user experience and provide an intuitive interface for data visualization and manipulation."
                title="Woombat Consulting Group"
                technologyes="2021/09 - At the moment"
            />
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