<template>

<div class="container mt-5 mb-5">

    <div v-if="Products == undefined">

        <LoaderComp/>

    </div>
    
    <h1 v-else>Products Table</h1>

    <table class="table">
    
        <thead>
    
        <tr>
    
            <th scope="col">Image</th>
    
            <th scope="col">Product Name</th>
    
            <th scope="col">Price</th>
    
            <th scope="col">Product Description</th>
    
            <th scope="col">Edit</th>
    
            <th scope="col">Delete</th>
    
        </tr>
    
        </thead>
    
        <tbody v-for="item in Products" :key="item.prodID">
    
            <tr>
                
            <td> <img :src="item.imgURL" alt="..."> </td>
    
            <td> {{item.prodName}}</td>
    
            <td> R{{item.price}}</td>
    
            <td>{{item.prodDes}}</td>
    
            <td><button type="button" class="btn" >Edit</button></td>
    
            <td><button type="button" @click="removeProd(item.prodID)" class="btn">Delete</button></td>
    
        </tr>
        
    </tbody>
    
    </table>
    
    <router-link to="/addProduct">
    
        <button type="button" class="btn" >Add Product</button>
    
    </router-link>
    
</div>

<div class="container mt-5 mb-5">

    <h1>Users Table</h1>
    
    <table class="table">
    
        <thead>
    
        <tr>
    
            <th scope="col">Profile Image</th>
    
            <th scope="col">First Name</th>
    
            <th scope="col">Last Name</th>
            
            <th scope="col">Gender</th>
    
            <th scope="col">Email Address</th>
    
            <th scope="col">Edit</th>
    
            <th scope="col">Delete</th>
    
        </tr>
    
        </thead>
    
        <tbody v-for="item in Users" :key="item.userID">
    
            <tr>
                
            <td> <img :src="item.userProf" alt="..."> </td>
    
            <td> {{item.firstName}}</td>
    
            <td> {{item.lastName}}</td>

            <td> {{item.genDer}}</td>
    
            <td>{{item.emailAdd}}</td>
    
            <td><button type="button" class="btn" >Edit</button></td>
    
            <td><button type="button" @click="removeUser(item.userID)" class="btn">Delete</button></td>
    
        </tr>
        
    </tbody>
    
    </table>

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
setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    store.dispatch("fetchUsers");
    const Products = computed(() => store.state.products);
    const Users = computed(() => store.state.users);
    return {
        Products,
        Users
        };
    },
    methods:{
        removeProd(id){
            this.$store.dispatch('removeProduct', id);
            location.reload()
        },
        removeUser(id){
            this.$store.dispatch('removeUser', id);
            location.reload()
        }
    }
};

</script>

<style scoped>
.btn{
    border-radius: 25px;
    background-color: #62c5ec;
    color: #05668D;
    transition: all 0.4s;
    border: solid 1px;
}

.btn:hover{
    transition: 0.3s;
    color:#F0F3BD;
    background: #05668D;
}

td{
    justify-content: center;
    padding: 6px;
    border: none;
    color: #F0F3BD;
}

th{
    border: none;
    color: #F0F3BD;
}

img{
    width: 3vw;
    height: 5vh;
}

.container{
    padding: 25px;
    border-radius: 15px;
    background-color:#05668D;
    color: #F0F3BD;
    opacity: 0.8;
}

</style>