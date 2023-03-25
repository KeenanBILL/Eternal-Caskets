import axios from "axios";
import { createStore } from "vuex";
import router from "@/router"; 
// import { useCookies } from "vue3-cookies";
// const { cookies } = useCookies();

const renderURL = "https://capstone-project-t9u3.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    message: null,
    loadSpinner: true
  },

  getters: {
    getUsers:(state)=>state.users,
  },

  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
    setProducts(state, values) {
      state.products = values;
    },
    setItem(state, value) {
      state.product = value;
    }
  },

  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${renderURL}users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${renderURL}products`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async SingleProd(context, id) {
      const res = await axios.get(`${renderURL}products/${id}`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setItem", results[0]);
      } else {
        context.commit("setMessage", err);
      }
    },
    async addProduct(context, payload) {
      const res = await axios.post(`${renderURL}products`, payload);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setItem", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async updateProd(context) {
      const res = await axios.put(`${renderURL}products/:id`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setProduct", err);
      }
    },
    async removeProduct(context, id) {
      const res = await axios.delete(`${renderURL}products/${id}`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setItem", results);
        context.commit('fetchProducts', results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async removeUser(context, id) {
      const res = await axios.delete(`${renderURL}users/${id}`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUser", results);
        context.commit('fetchUsers', results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async addUser(context, payload) {
      console.log(payload);
      fetch(`https://capstone-project-t9u3.onrender.com/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          router.push('/login')
        })
        .catch((err) => {
          console.log(err);
        });
      // const res = await axios.post(`${renderURL}register`, payload);
      // const { msg, err } = await res.data;
      // if (msg) {
      //   router.push("/login");
      // } else {
      //   alert(err);
      // }
    },
    async Login(context, payload) {
      const res = await axios.post(`${renderURL}login`, payload);
      const { result, msg, err } = await res.data;
      if (result) {
        context.commit('setUser', result);
        context.commit("setMessage", msg);
        // cookies.set("User confirmed.", jwToken);
        router.push("/");
      } else if(err) {
        context.commit("setMessage", err)
        alert(err);
      }
    },
  },
  modules: {},
});
