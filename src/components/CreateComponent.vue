<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Ingresar Registro</h3>
      <div>
        ________________________________________________________________________________________________
      </div>
      <form @submit.prevent="handleSubmitForm">
        
        <div class="form-group">
          <center>
            <label id="dropdown-label" for="select" class="form-group">Tipo de Documento</label>
          </center>
          <div>
            .
          </div>
          <center>
            <select id="dropdown" type="button"  class="form-group">
              <option>Seleccione...</option>
              <option>Cedula de Cuidadania</option>
              <option>Cedula de Extrangeria</option>
              <option>Pasaporte</option>
            </select>
          </center>
        </div>

        <div class="form-group">
          <label>Documento</label>
          <input
            type="text"
            class="form-control"
            v-model="user.doc"
            required
          />
        </div>

        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="user.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Apellido</label>
          <input
            type="text"
            class="form-control"
            v-model="user.lastname"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Telefono</label>
          <input
            type="text"
            class="form-control"
            v-model="user.phone"
            required
          />
        </div>
        <div>
          ________________________________________________________________________________________________
        </div>
        <center>
          <div class="form-group">
            <button @click.prevent="handleSubmitForm(user._id)" type="button" class="btn btn-warning btn-lg btn-block">Create</button>
          </div>
        </center>
        
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        doc: "",
        name: "",
        lastname: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-user";

      axios
        .post(apiURL, this.user)
        .then(() => {
          this.$router.push("/view");
          this.user = {
            doc: "",
            name: "",
            lastname: "",
            email: "",
            phone: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>