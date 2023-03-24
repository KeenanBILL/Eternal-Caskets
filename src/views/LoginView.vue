<template>

    <div class="container">

        <form  @submit.prevent="Login">

            <h1>Login</h1>

            <div class="input-box">

            <span class="form-label">Email Address</span>

            <input type="text" class="form-control" name="name" required v-model="payload.emailAdd">

            </div>

            <div class="input-box">

            <span class="form-label">Password</span>

            <input type="password" class="form-control" name="name" required v-model="payload.userPass">

            </div>

            <div>
                
            <button class="btn" type="submit">Login</button>

            </div>

        </form>

    </div>

</template>

<script>

    export default {
        data() {
            return {
                payload: {
                    emailAdd: "",
                    userPass: ""
                }
            }
        },
        methods: {
            Login() {
                this.$store.dispatch("Login", this.payload);
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>

.container{
    opacity: 0.7;
    border-radius: 15px;
    padding: 20px;
    width: 45%;
    background-color: #05668D;
    color: #F0F3BD;
}

</style>