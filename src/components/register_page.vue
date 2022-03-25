<template>
   
<form @submit.prevent="signUp" style="border:1px solid #ccc;  ">
  <div class="mycontainer">
    <div>
         <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <label for="email"><b>Email</b></label>
    <input v-model="email" type="text" placeholder="Email" name="email" required>

    <label for="username"><b>User Name</b></label>
    <input v-model="username" type="text" placeholder="Username" name="username" required>

    <label  for="firstname"><b>First Name</b></label>
    <input v-model="firstname"  type="text" placeholder="First Name" name="firstname" required>

    <label for="lastname"><b>Last Name</b></label>
    <input v-model="lastname"  type="text" placeholder="Last Name" name="lastname" required>
    
    <label for="password"><b>Password</b></label>
    <input v-model="password" type="password" placeholder="Enter Password" name="password" required>

    <div class="clearfix">
      <button  type="submit" class="signupbtn">Sign Up</button>
    </div>
    </div>
  </div>
</form></template>

<script>

import axios from 'axios'

export default {
    name: 'register_page',
    data(){
      return {
        email: '',
        username: '',
        firstname: '',
        lastname: '',
        password: ''

      }
    },
    methods: {
      signUp(){
        let newUser = {
        email : this.email,
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password

        }
        
        axios.post('http://localhost:5000/register',newUser).then(
          res =>{
            console.log(res)
            alert("Your register is successful!!!")
          }, err=>{
            console.log(err.response)
            alert(err.response.data.title)
          }
        )

      }
    }
}
</script>

<style>
/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.mycontainer div{
    width: 600px;

    }
button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.mycontainer {
  padding: 16px;
  display: flex;
  justify-content: center;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
</style>