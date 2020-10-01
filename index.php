<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	<!-- Owl Stylesheets -->
	<link rel="stylesheet" href="css/owlcarousel/owl.carousel.min.css">
	<link rel="stylesheet" href="css/owlcarousel/owl.theme.default.min.css">
	<link rel="stylesheet" type="text/css" href="css/slider/style.css">
	<link rel="stylesheet" type="text/css" href="css/categories/style.css">
	<link rel="stylesheet" type="text/css" href="css/header/style.css">
	<link rel="stylesheet" type="text/css" href="css/carrusel/style.css">
</head>
<body style="font-family: 'Raleway', sans-serif;background: #fefefe;">
	
	<?php include 'includes/header/header.php'; ?>
	<?php include 'includes/slider/slider.php'; ?>
	<?php include 'includes/categories/categories.php'; ?>
	<?php include 'includes/bestSelling/bestSelling.php'; ?>
	<?php include 'includes/offers/offers.php'; ?>
	<?php include 'includes/brands/brands.php'; ?>
	<?php include 'includes/footer/footer.php'; ?>
	
	
	







<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
<style type="text/css">

</style>

<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
<!-- javascript -->

<script src="js/owlcarousel/owl.carousel.js"></script>
<script type="text/javascript" src="js/header/main.js"></script>
<script type="text/javascript" src="js/carrusel/main.js"></script>
<script type="text/javascript" src="js/bestSellingProducts.js"></script>
<script type="text/javascript">
	// work in progress - needs some refactoring and will drop JQuery i promise :)
	
</script>
<script type="text/javascript">
	$('.owl-carousel').owlCarousel({
		loop:false,
		margin:10,
		nav:true,
		autoWidth:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
</script>

</body>
</html>