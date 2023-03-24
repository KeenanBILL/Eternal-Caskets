<template>
    <div class="contain m-4 mb-5">

        <div v-if="Products == undefined">

            <LoaderComp/>

        </div>

        <div v-else class="container">
        
            <div class="row gap-3">
                    
                <div class="card" style="width: 17rem ;" v-for="item in Products" :key="item.prodID" >

                    <img :src="item.imgURL" class="card-img-top" alt="...">
    
                        <div class="row card-body">     
    
                            <h5 class="card-title">{{item.prodName}}</h5>
    
                            <p class="card-text">R {{item.price}}</p>
    
                            <p class="card-text">{{item.prodDes}}</p>
    
                        <router-link :to="{name:'SingleProd',  params:{id:item.prodID}}">

                            <a class="btn">View More</a>

                        </router-link>
    
                    </div>
    
                </div>
    
            </div>
        
        </div>

    </div>

    </template>
    
    <script>

    import { computed } from "@vue/runtime-core";
    import { useStore } from "vuex";
    import LoaderComp from "@/components/LoaderComp.vue";

    export default {
        components: {
            LoaderComp
        },

    setup(){
            const store = useStore();
            store.dispatch("fetchProducts");
            const Products = computed(() => store.state.products);
            return {
                Products,
            }
        }

    };

    </script>
    
    <style scoped>
        .row{
            justify-content: center;
            align-content: space-around
        }
        .Products{
        margin-top: 195px;
        margin-bottom: 50px;
        }
        .card{
            background-color:#05668D;
            opacity: 0.8;
            height: 25rem;
            border: none;
            border-radius: 15px;
        }
        .card-text{
            color:#F0F3BD;
        
        }
        .card-title{
            color: #F0F3BD;
            font-size: x-large;
        }
        img{
            height: 39%;
        }

        .btn{
            border-radius: 25px;
            background-color: #05668D;
            color: #F0F3BD;
            transition: all 0.4s;
        }

    </style>