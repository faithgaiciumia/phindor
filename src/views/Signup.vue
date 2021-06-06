<template>
  <div class="login-component">
    <div class="container">
        <form>
            <div class="container form-heading justify-content-center">
                <h1>Phindor</h1>
                <p>Please Complete to create your account</p>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="userFirstName" aria-describedby="emailHelp"
                    placeholder="First Name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="userLastName" aria-describedby="emailHelp"
                    placeholder="Last Name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="userPhone" aria-describedby="emailHelp" placeholder="Phone">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Email">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="userPassword" aria-describedby="emailHelp"
                    placeholder="Password">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="userConfirmPassword" placeholder="Confirm Password">
            </div>

            <div class="row">
                <div class="col-sm">
                    <button type="submit" class="btn btn-primary">Continue</button>
                </div>
            </div>
            <div class="form-group">
                <a href="#">Already Have an Account? Sign In</a>
            </div>

        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",    
};
</script>
 <style>
        form{
            max-width: 600px;
            margin-top: 100px;
            margin-left: 300px;
        }
        .form-heading{
            margin-left: 100px;
        }
        .form-heading h1{
            margin-left: 110px;
            color: #50abdf;
        }
        .form-heading p{
            color: #808080;
        }
        .form-control{
            border-top: none!important;
            border-right: none!important;
            border-left: none!important;
            border-radius: 0px;
            border-color: #000000!important;
        }
        .form-check-input{
            border-color: #000000!important;
        }
        button{
            width: 250px;
            background-color: #50abdf!important;
            border-color: #50abdf!important;
        }
        .btn-signup{
            background-color: #ffffff!important;
            color: #000000;
        }
        .row, input{
            margin-top:15px;
        }

    </style>