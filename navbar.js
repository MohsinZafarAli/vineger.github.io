var h=document.getElementById("navbar");
h.innerHTML=`
<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container-fluid">
        <img src="imgs/logo1.png" alt="" class="img-fluid" style="height:70px;">
        <h3 class="text-white ms-2">Vinegar Food</h3>

        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="nav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="About.html">About Us</a></li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Meals</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="Regular.html#regular">Regular</a></li>
                        <li><a class="dropdown-item" href="Regular.html#lunch">Lunch</a></li>
                        <li><a class="dropdown-item" href="Regular.html#snack">Snacks</a></li>
                        <li><a class="dropdown-item" href="Regular.html#desert">Desert</a></li>
                        <li><a class="dropdown-item" href="Regular.html#Beverages">Beverages</a></li>
                    </ul>
                </li>

                <li class="nav-item"><a class="nav-link" href="garelly.html">Gallery</a></li>
                <li class="nav-item"><a class="nav-link" href="award.html">Awards</a></li>
                <li class="nav-item"><a class="nav-link" href="catering.html">Catering</a></li>
                <li class="nav-item"><a class="nav-link" href="recipe.html">Recipe</a></li>
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                <li class="nav-item"><a class="nav-link" href="feedback.html">Feedback</a></li>
                <li class="nav-item"><a class="nav-link" href="sitemap.html">Sitemap</a></li>
            </ul>
        </div>
    </div>
</nav>




`