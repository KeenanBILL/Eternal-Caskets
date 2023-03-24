<template>
    
    <div> 

        <nav class="navbar navbar-expand-md">

            <div class="container-fluid">

                <div class="dropdown">

                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                        <a class="btn"><i class="bi bi-person-circle"></i></a>

                    </button>

                    <ul class="dropdown-menu">

                        <router-link to="/login"><a class="btn">Login</a></router-link>

                        <router-link to="/register"><a class="btn">Register</a></router-link>

                    </ul>

                </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>

                </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

                    <li class="nav-item mx-3">

                        <router-link to="/">Home</router-link>

                    </li>

                    <li class="nav-item mx-3">

                        <router-link to="/admin">Admin</router-link>
                        
                    </li>

                    <li class="nav-item mx-3">

                    <router-link to="/products">Products</router-link>

                    </li>

                    <li class="nav-item mx-3">

                    <router-link to="/contact" class="contact">Contact</router-link>

                    </li>

                </ul>

            <form class="d-flex" role="search">

                <button class="btn"><i class="bi bi-suit-heart-fill"></i></button>

                <button class="btn"><i class="bi bi-cart-fill"></i></button>

            </form>

            </div>

            </div>

        </nav>

    </div>

</template>

<script>

    export default {
        
    }

</script>

<style>
button .btn dropdown-toggle{
background-color: #45b6c5;
}

.navbar {
    background-color: #45b6c5;
    margin: 15px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.2rem;
    padding: 20px;
    border-radius: 25px;
} 

.nav-item{
    text-decoration: none;
}
.navbar a {
    font-weight: bold;
    color: #F0F3BD;
    text-decoration: none;
}
.navbar a:hover {
    text-decoration: none;
    color: #05668D;
}
.navbar a.router-link-exact-active {
    color: #05668D;
    text-decoration: none;
}

.btn a {
    font-weight: bold;
    color: #F0F3BD;
    text-decoration: none;
}
.btn a:hover {
    text-decoration: none;
    color: #05668D;
}
.btn a.router-link-exact-active {
    color: #05668D;
    text-decoration: none;
}

.bi{
    font-size: 25px;
    color:#05668D;
}

</style>