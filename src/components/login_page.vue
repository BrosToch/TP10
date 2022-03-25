<template>
          <div class="parent">
       <div>

<form  method="post">
  <div class="imgcontainer">
    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <label for="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username" required>

    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required>
        
    <div class="mybtn">
        <div>
            <router-link to="/home" id="btn">Home</router-link>
        </div>
        <div>
            <router-link to="/register" id="btn">Register</router-link>
         </div>
  
    </div>
  </div>
</form>

</div>
  </div>
</template>

<script>
export default {
    name: 'login-page',

    // data(){
    //     return{

    //     }
    // }
}
</script>


<style>
.mybtn{
    display: flex;
    justify-content: space-between;
}
.mybtn div{

    padding: 10px 20px;
    background-color: #04AA6D;

}
.mybtn div #btn{
    color: #f1f1f1;
}

.parent{
  display: flex;
  justify-content: center;
  width: 100%;
}

.parent div form{
  width: 600px ;
  margin-top: 80px;
  
}
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
#btn{
 margin-top: 20px;
 text-decoration: none;
 border-radius: 10px;
background-color: #04AA6D;
 padding: 7px 40px;
 color: #f1f1f1;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>