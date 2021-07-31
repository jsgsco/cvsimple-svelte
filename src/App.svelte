<svelte:head>
	<title>Jhon's Ranch</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="shortcut icon" href="https://i.imgur.com/4SzTP0s.png">
	<meta name="description" content="Jhon's Ranch, website personal">
	<meta name="keywords" content="Svelte">
	<meta name="author" content="Jhon Steven Saavedra">
</svelte:head>

<script>
	import Info from './components/Info.svelte'
	import Portfolio from './components/Portfolio.svelte';
</script>

<main>
	<Info />
	<Portfolio />
</main>