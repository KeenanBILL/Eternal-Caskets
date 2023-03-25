<template>

    <div class="container mb-5 mt-5">

        <div class="card">

            <div class="card-header">

                <h4>Add Product</h4>

            </div>

            <div class="card-body">

                <div class="mb-3">

                    <label for="">Product Name</label>

                        <input type="text" v-model="this.payload.prodName"  class="form-control"/>

                </div>

                <div class="mb-3">

                    <label for="">Price</label>

                        <input type="text" v-model="this.payload.price" class="form-control"/>

                </div>

                <div class="mb-3">

                    <label for="">Category</label>

                        <input type="text" v-model="this.payload.cateGory" class="form-control"/>

                </div>

                <div class="mb-3">

                    <label for="">Product Description</label>

                        <input type="text" v-model="this.payload.prodDes" class="form-control"/>

                </div>

                <div class="mb-3">

                    <label for="">Image</label>

                        <input type="text" v-model="this.payload.imgURL" class="form-control"/>

                </div>

                <div class="mb-3">

                    <button type="button" @click="addProduct" class="btn">Save</button>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

export default {

data() {
    return {
        payload: {
            prodName:"",
            price:"",
            cateGory:"",
            prodDes:"",
            imgURL:""
        },
    }
},
methods: {
    addProduct() {
        if(this.payload.results !== this.data) {
            alert("Product added successfully.")
        }
        else {
        this.$store.dispatch("addProduct", this.payload);
        }
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
.card-header{
    border: none;
}

.card{
    opacity: 0.7;
    border-radius: 15px;
    padding: 20px;
    background-color: #05668D;
    color: #F0F3BD;
}

</style>