<template>
  <div class="sidebar">
    <div class="row">
        <ul class="list-group">
                    <li class="list-group-item"><router-link to="/" class="link" ><i class="fa fa-home side-icons"></i> <span>Home</span> </router-link></li>
                    <li class="list-group-item"><router-link to="/inventory" class="link"><i class="fa fa-bar-chart side-icons"></i> <span>Inventory</span> </router-link></li>
                    <li class="list-group-item"><router-link to="/transactions" class="link"><i class="fa fa-envelope-square side-icons"></i> <span>Transactions</span> </router-link></li>
                    <li class="list-group-item"><router-link to="/analytics" class="link"><i class="fa fa-line-chart side-icons"></i> <span>Analytics</span></router-link></li>
                    <li class="list-group-item"> <router-link to="/market" class="link"><i class="fa fa-pie-chart side-icons"></i> <span>Market</span></router-link> </li>
                    <li class="list-group-item"><router-link to="/employees" class="link"><i class="fa fa-users side-icons"></i> <span>Employees</span></router-link></li>
                    <li class="list-group-item"> <router-link to="/categories" class="link"><i class="fa fa-list side-icons"></i> <span>Categories</span></router-link> </li>
                    <li class="list-group-item"><router-link to="/help" class="link"><i class="fa fa-question-circle side-icons"></i> <span>Help Center</span></router-link> </li>
                    <li class="list-group-item"><router-link to="/settings" class="link"><i class="fa fa-cog side-icons"></i> <span>Settings</span></router-link></li>
                </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: "Sidebar",
  
  data() {
    return {
      
    };
  },
  
};
</script>
<style>
:root {
  --blue: #50abdf;
  --green: #9dcf66;
  --white: #ffffff;
}
.body-grid {
  margin-top: 20px;
}

.list-group-item {
  margin-bottom: 5px;
  width: 200px;
  height: 50px;
  border: solid !important;
  border-color: var(--blue) !important;
  border-width: 1px !important;
}
.side-icons {
  color: var(--blue);
}
span {
    color: #000000!important;    
    margin-left: 10px;
}
.link{
    text-decoration: none!important;
    
}

</style>