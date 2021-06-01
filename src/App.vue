<template>
  <div id="app" class="container">
    <main>
      <nav class="navbar navbar-expand-lg navbar-light container">
        <a class="navbar-brand" href="#">Phindor</a>
        <div class="collapse navbar-collapse justify-content-center employee-search">
            <div class="input-group rounded">
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fa fa-search"></i>
                </span>
                <input type="search" class="form-control" placeholder="Search Transactions, Inventory or Help"
                    aria-label="Search" aria-describedby="search-addon" />
            </div>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-bell"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">|</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Munene</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa fa-caret-down"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><img src="./assets/userPhoto.jpeg" alt="userImage" class="rounded-circle"></a>
                </li>
            </ul>
        </div>
    </nav>
      <router-view />
    </main>

   
  </div>
</template>

<script>

export default {
  data() {
    return {      
    };
  }, 
    
};
</script>


<style lang="css">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
:root {
  --blue: #50abdf;
  --green: #9dcf66;
  --white: #ffffff;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;  
}
.navbar-brand {
  color: var(--blue) !important;
  font-weight: bold;
}

.navbar img {
  width: 30px;
  height: 30px;
}

.navbar {
  border-radius: 0px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #f5f5f5, -20px -20px 60px #ffffff;
}
.nav-button {
  margin-right: 10px;
}
</style>
