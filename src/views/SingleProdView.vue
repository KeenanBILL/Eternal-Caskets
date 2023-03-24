<template>

    <div class="container">

            <div class="card">
                
                <img :src="item?.imgURL" class="card-img-top" alt="...">
            
                    <div class="row card-body">

                        <h5 class="card-title">{{item?.prodName}}</h5>

                        <p class="card-text">R {{item?.price}}</p>

                        <p class="card-text">{{item?.prodDes}}</p>

                    <router-link to="/cart"><a class="btn" >Add to Cart</a></router-link>

                </div>

            </div>
        
    </div>

</template>

<script>
    export default {
        name: "SingleProd",
        computed: {
        item() {
            return this.$store.state.product
        }
    },
    created() {
    this.$store.dispatch("SingleProd", this.$route.params.id)
    }
    };
</script>

<style scoped>
.card{
    background-color:#05668D;
    opacity: 0.8;
    height: 35rem;
    margin-bottom:50px;
    margin-top: 35px;
    border: none;
    border-radius: 15px;
    align-items: center;
}
.card-text{
    color:#F0F3BD;

}
.card-title{
    color: #F0F3BD;
    font-size: x-large;
}

img{
    height: 45%;
    width: 40%;
}

.btn{
    border-radius: 25px;
    background-color: #05668D;
    color: #F0F3BD;
    transition: all 0.4s;
}


</style>