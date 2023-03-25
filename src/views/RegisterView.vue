<template>

    <div class="container mb-5">

        <form class="form" @submit.prevent="addUser">

            <h1>Register</h1>

            <div class="input-box">

            <span class="form-label">First Name</span>

            <input type="text" class="form-control" name="name" required v-model="payload.firstName">

            </div>

            <div class="input-box">

            <span class="form-label">Last name</span>

            <input type="text" class="form-control" name="name" required v-model="payload.lastName">

            </div>

            <div class="input-box">

            <span class="form-label">Gender</span>

            <input type="text" class="form-control" name="name" required v-model="payload.genDer">

            </div>

            <div class="input-box">

            <span class="form-label">Cellphone Number</span>

            <input type="text" class="form-control" name="name" required v-model="payload.cellNumb">

            </div>

            <div class="input-box">

            <span class="form-label">Create Password</span>

            <input type="password" class="form-control" name="name" required v-model="payload.userPass">

            </div>

            <div class="input-box">

            <span class="form-label">User Role</span>

            <input type="text" class="form-control" name="name" required v-model="payload.userRole">

            </div>

            <div class="input-box">

            <span class="form-label">Email Address</span>

            <input type="text" class="form-control" name="name" required v-model="payload.emailAdd">

            </div>

            <div>

            <button class="btn" type="submit">Submit</button>

            </div>

        </form>

    </div>

</template>

<script>
// import {computed} from "@vue/runtime-core";
// import { useStore } from "vuex";

    export default {

    //     data() {
    //         const payload = {
    //                 firstName: "",
    //                 lastName: "",
    //                 genDer: "",
    //                 cellNumb:"",
    //                 userPass:"",
    //                 emailAdd:"",
    //                 userRole:"user",
    //                 userProf:"https://i.postimg.cc/fLG4sjtQ/6596121-removebg-preview.png"
    //         };
    //     const store = useStore();

    //     const userMsg = computed(()=>store.state.message)

    //     return {
    //         payload, userMsg
    //     }
    // },
    //     method: {
    //         addUser() {
    //             this.$store.dispatch("addUser", this.payload)
    //         }
    //     }
        data() {
    return {
        payload: {
            firstName: "",
                    lastName: "",
                    genDer: "",
                    cellNumb:"",
                    userPass:"",
                    emailAdd:"",
                    userRole:"user",
                    userProf:"https://i.postimg.cc/fLG4sjtQ/6596121-removebg-preview.png"
        },
    }
},
methods: {
    addUser() {
        if(this.payload.results !== this.data) {
            alert("User registered.")
        }
        else {
        this.$store.dispatch("addUser", this.payload);
        }
    }
}
}
</script>

<style scoped>

.container{
    opacity: 0.7;
    border-radius: 15px;
    padding: 20px;
    width: 55%;
    background-color: #05668D;
    color: #F0F3BD;
}

</style>