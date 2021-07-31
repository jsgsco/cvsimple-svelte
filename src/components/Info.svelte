<svelte:head>
	<title>John's Ranch</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="shortcut icon" href="https://i.imgur.com/4SzTP0s.png">
</svelte:head>

<main>
    <div class="container">
        <h1>Hi, I am <span>Jhon Steven Saavedra</span> </h1>
        <h2>Front-end Developer in ReactJS</h2>
        <div class="contain-info">
            <p>It goes without saying my name again, I am from Colombia from a city called Villavicencio, I started in the development world about 2 years ago, clearly starting with HTML CSS and without knowing anything about JavaScript, today I feel very happy with it. that I achieved thanks to my self-taught effort and with courses from different platforms.</p>
            <p>I have been a web developer for a little less than 1 year, I have experience in web technologies such as ReactJS and Svelte.</p>
        </div>
        <div class="contain-social">
            <a href="https://www.facebook.com/jhondev2/" class="btn"> <i class="bi bi-facebook" target="_blank"></i> Facebook</a>
            <a href="https://github.com/jsgsco" class="btn"> <i class="bi bi-github" target="_blank"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/jsgsco/" class="btn" target="_blank"> <i class="bi bi-linkedin"></i> LinkedIn</a>
        </div>
        
    </div>
    <div class="scroll">
        <p class="scroll-text">Scroll Down</p>
        <span class="scroll-icon"> <i class="bi bi-arrow-down-short"></i> </span>
    </div>
</main>

<style>

    .scroll {
        text-align: center;
        position: relative;
    }

    .scroll-text {
        text-transform: uppercase;
        font-size: 11px;
    }

    .scroll-icon {
        font-size: 50px;
    }

    p {
        margin: 7px 0;
        font-size: 15px;
        font-style: oblique;
    }

    main {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #0D0D0D;
        color: white;
    }

    .container {
        width: 80%;
        margin: auto;

        animation-name: info;
        animation-duration: 3s;
    }

    h1 {
        font-size: 50px;
        font-weight: normal;
    }

    h2 {
        margin-bottom: 10px;
    }

    span {
        font-weight: 700;

    }

    .contain-info {
        width: 50%;
    }

    .btn {
        padding: 5px;
        background-color: #0D0D0D;
        font-size: 13px;
        border-radius: 5px;
        text-decoration: none;
        color: white;
        font-weight: 500;
        border: 1px solid white;
        transition: 1s all;
    }

    .btn:hover {
        background-color: white;
        color: black;
    }

    .contain-social {
        margin-top: 15px;
    }

    @keyframes info {
        0% {
            opacity: 0.1;
            transform: translateY(10%);
        }
        
        100% {
            transform: translateY(0%);
        }
    }

    @media screen and (max-width: 960px ) {
        .container {
            width: 90%;
        }

        .contain-info {
            width: 100%;
        }
    }

</style>