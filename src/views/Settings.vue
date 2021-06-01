<template>
  <div class="home-component">
    <div class="container body-grid">
        <div class="row">
            <div class="col-md-3 order-md-1">
                <Sidebar />
            </div>
            <div class="col-md-9 order-md-2 mb-4">
                Settings
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  name: "settings",  
  components: { Sidebar }
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

</style>
