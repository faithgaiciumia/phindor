<template>
  <div class="home-component">
    <div class="container body-grid">
        <div class="row">
            <div class="col-md-3 order-md-1">
                <Sidebar />
            </div>
            <div class="col-md-9 order-md-2 mb-4">
                <div class="container">
                     <div class="container">
                    <div class="row">
                        <div class="card small-card">
                            <div class="card-body">
                                Today <i class="fa fa-caret-down"></i>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="card">
                                <div class="card-body">
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="sales-heading">Sales Analysis</h3>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm">
                                                    <div class="card small-card">
                                                        <div class="card-body">
                                                            Revenue <i class="fas fa-caret-down"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm">
                                                    <div class="card small-card">
                                                        <div class="card-body">
                                                            Last 6 Months <i class="fas fa-caret-down"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="list-group">
                                            <li class="list-group-item sales-list-group active">Item - Totals</li>
                                            <li class="list-group-item sales-list-group">Women Peacoat - $50,000</li>
                                            <li class="list-group-item sales-list-group">Women Peacoat - $50,000</li>
                                            <li class="list-group-item sales-list-group">Women Peacoat - $50,000</li>
                                            <li class="list-group-item sales-list-group">Women Peacoat - $50,000</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm">
                                                    <span style="font-size: 12px;">Performance Over Time</span>
                                                </div>
                                                <div class="col-sm">
                                                    <div class="card small-card">
                                                        <div class="card-body">
                                                            Last 6 Days <i class="fas fa-caret-down"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm">
                                                    <div class="card small-card">
                                                        <div class="card-body">
                                                            Select Time <i class="fas fa-caret-down"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="container">
                                                    <canvas id="myChart" style="height: 100px;"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
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
  name: "analytics",  
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
