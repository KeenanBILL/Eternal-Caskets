<template>

<section id="Home" class="Main py-5">

    <div class="container py-5">

        <div class="row py-5">

            <div class="col-lg-6 py-5">

                <p class="m-0">Welcome to</p>
                    
                    <h1 class="welcome-name">Eternal_Caskets</h1>

                <div class="line my-4"></div>

                <br>

                <router-link to="/products"><a class="btn" >Shop now</a></router-link>

            </div>

        </div>

    </div>

</section>

<!--Welcome-->

<section class="Welcome text-center pb-5">

    <div class="container py-5">

        <div class="row py-5 text-white">

            <div class="col-lg-6 m-auto">

                <p class="m-0">About Us</p>

                <h1>Personalized Products</h1>

                <div class="line my-4"></div>

                <p>We do the walking for you by getting the best products, that can be found internationally. </p>

            </div>

        </div>

        <div class="row">

            <div class="col-lg-4">

                <div class="card py-3">

                    <div class="card-body">

                        <span><i class="bi bi-file-person"></i></span>

                        <h2>Customer Service</h2>

                        <p>We serve our consumers with care and accompany individuals catered to their needs.</p>

                    </div>

                </div>

            </div>

            <div class="col-lg-4">

                <div class="card py-3">

                    <div class="card-body">

                        <span><i class="bi bi-truck"></i></span>

                        <h2>Free Delivery</h2>

                        <p>Deliveries anywhere in the proximity of Cape Town are free, we deliver anywhere and everywhere.</p>

                    </div>

                </div>

            </div>

            <div class="col-lg-4">

                <div class="card py-3">

                    <div class="card-body">

                        <span><i class="bi bi-wallet2"></i></span>

                        <h2>Secure Payments</h2>

                        <p>All payment methods are accepted and secured as well. Accept cash on delivery as well.</p>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>

</template>

<script>



</script>

<style scoped>

.bi{
    font-size: 40px;
    color:#05668D;
}

.line{
    height: 6px;
    width: 30%;
    background: #05668D;
    display: inline-block;
}

.Main{
    align-items: center;
}

.Main p:nth-child(1){
    font-size: 18px;
    font-weight: 500;
    padding-top: 100px;
}

.Main p:nth-child(2){
    font-size: 18px;
    color: #F0F3BD;
}

.btn{
    border-radius: 25px;
    background-color: #05668D;
    color: #F0F3BD;
    width: 50%;
    transition: all 0.4s;
}

</style>
