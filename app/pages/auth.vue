<template>
  <div class="auth-view">
    <div class="half-view">
      <div class="sign-in-container">
        <div class="form-container">
          <p>User Name</p>
          <input type="text" class="text-box" />
          <p>Password</p>
          <input type="password" class="text-box" />
          <input type="button" class="sign-button sign-in" value="Sign In" />
        </div>
      </div>
      <div class="sign-up-container">
        <div class="form-container">
          <p>E-mail Address</p>
          <input type="text" class="text-box" />
          <p>Nick Name</p>
          <input type="text" class="text-box" />
          <p>Password</p>
          <input type="password" class="text-box" />
          <input type="button" class="sign-button sign-up" value="Sign Up" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="sass">
  .auth-view,
  .half-view {
    width: 100%;
    height: 100%;
  }
  
  .half-view {
    display: flex;
    flex-direction: row;
  }
  
  .sign-in-container,
  .sign-up-container {
    width: 50%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .sign-in-container {
    background-color: rgb(22, 22, 22);
  }
  
  .sign-up-container {
    background-color: rgb(0, 219, 139);
  }
  
  .form-container {
    text-align: center;
    width: 400px;
    -webkit-animation: alphaChange 2.5s;
    .text-box {
      width: 300px;
      height: 50px;
      font-size: 20px;
      border: 0;
      border-radius: 5px;
      outline: none;
      text-indent: 10px;
    }
    p {
      font-size: 20px;
      cursor: default;
    }
  }
  
  .sign-button {
    width: 300px;
    height: 50px;
    margin-top: 50px;
    border-radius: 5px;
    border: 0;
    outline: none;
    font-size: 25px;
  }
  
  .sign-in {
    color: #000000;
    background-color: rgb(0, 219, 139);
  }
  
  .sign-up {
    color: #ffffff;
    background-color: rgb(22, 22, 22);
  }
  
  @-webkit-keyframes alphaChange {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>