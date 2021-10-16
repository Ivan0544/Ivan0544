<template>
  <div class="row">
    <div class="col-md-12">
    <center>
      <h3>Lista de Registros</h3>
    </center>  
    
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.doc }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: user._id } }"
                class="btn btn-secondary"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteUser(user._id)"
                class="btn btn-warning"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    /*let apiURL = "http://localhost:4000/api";*/
    let apiURL = "https://calling-site.herokuapp.com/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.users = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteUser(id) {
      /*let apiURL = `http://localhost:4000/api/delete-user/${id}`;*/
      let apiURL = `https://calling-site.herokuapp.com/api/delete-user/${id}`;
      let indexOfArrayItem = this.users.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.users.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-secondary {
  margin-right: 10px;
}
</style>
