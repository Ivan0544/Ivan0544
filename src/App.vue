<template>
  <div>
    <center>
    <div class="banner">
      <img src="./aws-siesa.webp" alt="A banner image">
    </div>
    </center>

    <!-- Nav bar -->
    
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left">Amazon Web Service</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/home">Registrar Empleado</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">Ver empleados</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>

    

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.banner {
  width: 100%;

}

.banner>img {
  width: 100%;
  height: 300px;
  max-width: 2000px;
  object-fit: cover;
}
</style>




