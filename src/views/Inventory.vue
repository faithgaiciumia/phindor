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
                        <div class="row">
                            <div class="col-md-9 mb-4">
                                <input type="search" class="form-control" id="searchCategory"
                                    placeholder="Search Categories">
                            </div>
                            <div class="col-md-3">
                                <button type="button" class="btn btn-primary">Add New Item</button>
                            </div>
                        </div>
                        <!-- table -->
                        <table class="table">
                            <thead class="inventory-table-heading">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">In</th>
                                    <th scope="col">Out</th>
                                    <th scope="col">Available Now</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Woman Peacoat</td>
                                    <td>500</td>
                                    <td>68</td>
                                    <td>432</td>
                                    <td>$9,928</td>
                                    <td>update</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Woman Peacoat</td>
                                    <td>500</td>
                                    <td>68</td>
                                    <td>432</td>
                                    <td>$9,928</td>
                                    <td>update</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Woman Peacoat</td>
                                    <td>500</td>
                                    <td>68</td>
                                    <td>432</td>
                                    <td>$9,928</td>
                                    <td>update</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Woman Peacoat</td>
                                    <td>500</td>
                                    <td>68</td>
                                    <td>432</td>
                                    <td>$9,928</td>
                                    <td>update</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Woman Peacoat</td>
                                    <td>500</td>
                                    <td>68</td>
                                    <td>432</td>
                                    <td>$9,928</td>
                                    <td>update</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Woman Peacoat</td>
                                    <td>500</td>
                                    <td>68</td>
                                    <td>432</td>
                                    <td>$9,928</td>
                                    <td>update</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Woman Peacoat</td>
                                    <td>500</td>
                                    <td>68</td>
                                    <td>432</td>
                                    <td>$9,928</td>
                                    <td>update</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Woman Peacoat</td>
                                    <td>500</td>
                                    <td>68</td>
                                    <td>432</td>
                                    <td>$9,928</td>
                                    <td>update</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Woman Peacoat</td>
                                    <td>500</td>
                                    <td>68</td>
                                    <td>432</td>
                                    <td>$9,928</td>
                                    <td>update</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Woman Peacoat</td>
                                    <td>500</td>
                                    <td>68</td>
                                    <td>432</td>
                                    <td>$9,928</td>
                                    <td>update</td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- navigation buttons -->
                        <nav class="navbar navbar-expand-lg navbar-light justify-content-end">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-outline-dark nav-button"><i
                                        class="fas fa-chevron-left"></i></button>
                                <button type="button" class="btn btn-outline-dark nav-button active">1</button>
                                <button type="button" class="btn btn-outline-dark nav-button">2</button>
                                <button type="button" class="btn btn-outline-dark nav-button">3</button>
                                <button type="button" class="btn btn-outline-dark nav-button">4</button>
                                <button type="button" class="btn btn-outline-dark nav-button">5</button>
                                <button type="button" class="btn btn-outline-dark nav-button">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>

                        </nav>


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
  name: "inventory",  
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
