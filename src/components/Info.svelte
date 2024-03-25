<main>
    <div class="container">
        <h1>Hi, I am <span>Jhon Steven Saavedra</span> </h1>
        <h2>Data Developer</h2>
        <div class="contain-info">
            <p>I am a professional passionate about Cloudera cluster management and the open source ecosystem, with solid experience in Python, PySpark, and frontend development with React.js. My professional career has focused on creating robust and efficient web applications to manage large volumes of data and develop interactive and intuitive web applications.</p>
        </div>
        <div class="contain-social">
            <a href="https://www.facebook.com/lmgcco/" class="btn" target="_blank" rel="noreferrer"> <i class="bi bi-facebook"></i> Facebook</a>
            <a href="https://github.com/jsgsco" class="btn" target="_blank" rel="noreferrer"> <i class="bi bi-github"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/jsgsco/" class="btn" target="_blank" rel="noreferrer"> <i class="bi bi-linkedin"></i> LinkedIn</a>
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
        text-align: justify;
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
        font-size: 45px;
        font-weight: normal;
    }

    h2 {
        margin-bottom: 10px;
        font-size: 25px;
    }

    span {
        font-weight: 700;

    }

    .contain-info {
        width: 50%;
        margin-top: 15px;
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
        margin-top: 20px;
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