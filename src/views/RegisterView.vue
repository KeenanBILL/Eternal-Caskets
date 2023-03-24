<template>

    <div class="container mb-5">

        <form class="form" @submit.prevent="$event=> addUser()">

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

            <span class="form-label">Email Address</span>

            <input type="password" class="form-control" name="name" required v-model="payload.emailAdd">

            </div>

            <div class="input-box">

            <span class="form-label">User Role</span>

            <input type="text" class="form-control" name="name" required v-model="payload.userRole">

            </div>

            <div class="input-box">

            <span class="form-label">Validate Password</span>

            <input type="text" class="form-control" name="name" required v-model="payload.confirm_pass">

            </div>

            <div>

            <button class="btn" type="submit">Submit</button>

            </div>

        </form>

    </div>

</template>

<script>

    export default {

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
                confirm_pass: ""
            }
        },
        methods: {
            addUser() {
                if(this.payload.userPass !== this.confirm_pass) {
                    console.log("Password not valid.");
                }
            else {
                this.$store.dispatch('addUser', this.payload);
            }
        }
        
    }
};
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