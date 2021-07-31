<script>
    export let title
    export let summary
    export let url
    export let technologyes
</script>

<main>
    <p class="title">{title}</p>
    <div class="info">
        <p class="technologyes">Frameworks: {technologyes}</p>
        <p class="summary">{summary}</p>
        <a href={url} target="_blank" rel="noreferrer"> <i class="bi bi-github"></i> GitHub</a>
    </div>
</main>

<style>
    main {
        width: 40%;
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
        margin-left: 20px;
        font-size: 14px;
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