<script>
    export let title
    export let summary
    export let url
    export let technologyes
</script>

<main>
    <p class="title">{title}</p>
    <div class="info">
        <p class="technologyes">{technologyes}</p>
        <p class="summary">{summary}</p>
    </div>
</main>

<style>
    main {
        width: 90%;
        background-color: #0d0d0dfd;
        padding: 10px;
        margin: 5px;
        border-radius: 6px;
        transition: 2s all;
    }

    .title {
        font-size: 20px;
        font-style: oblique;
        padding: 5px 0;
    }

    .info {
        margin-left: 15px;
        font-size: 14px;
        text-align: justify;
    }

    a {
        text-decoration: none;
        padding: 7px;
        background-color: #0d0d0dfd;
        border-radius: 5px;
        color: white;
        border: 1px solid white;
        display: inline-block;
        margin-top: 10px;
        font-size: 13px;
        transition: 1s all;
    }
    
    a:hover {
        background-color: white;
        color: black;
    }

    @media screen and (max-width: 960px ) {
        main {
            width: 100%;
        }
    }
</style>