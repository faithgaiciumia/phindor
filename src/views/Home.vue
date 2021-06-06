<template>
  <div class="home-component">
    <div class="container body-grid">
        <div class="row">
            <div class="col-md-3 order-md-1">
                <Sidebar />
            </div>
            <div class="col-md-9 order-md-2 mb-4">
                <div class="container">
                    <div class="row">
                        <!-- search bar -->
                        <input type="search" class="form-control" id="generalSearch" placeholder="Search Anything">
                        <!-- top cards -->
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    <p class="heading">Total Sales Today</p>
                                    <h2>KES 246K</h2>
                                    <p class="footer"><i class="fa fa-arrow-down"></i> 13.8%</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    <p class="heading">Profit Today</p>
                                    <h2>KES 46K</h2>
                                    <p class="footer"><i class="fa fa-arrow-down"></i> 13.8%</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    <p class="heading">Stock Gauge</p>
                                    <h2>KES 246K</h2>
                                    <p class="footer"><i class="fa fa-arrow-down"></i> 13.8%</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    <p class="heading">Best Seller (Units)</p>
                                    <h2>Banana</h2>
                                    <p class="footer"><i class="fa fa-arrow-down"></i> 13.8%</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    <p class="heading">Worst Seller (Units)</p>
                                    <h2>Nuts</h2>
                                    <p class="footer"><i class="fa fa-arrow-down"></i> 13.8%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h4 class="chart-header">Statistics</h4>
                        <div class="container">
                            <canvas id="myChart" style="height: 300px;"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  name: "home",  
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
.card{
    margin-top: 10px;
    height: 150px;
}
.card .heading{
    color: #808080;
}
.card h2{
    font-size: 20px;
}
.card .footer{
    color: #ff0000;
}
.chart-header{
    margin-top: 10px;
}


</style>
