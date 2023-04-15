<template>
  <nav class="navbar">
    <ul>
      <li class="navbar-item"><a href="/"><i class="fa fa-home"></i></a></li>
      <li class="navbar-item"><a href="#"><i class="fa fa-book"></i></a></li>
      <li class="navbar-item"><a href="#"><i class="fa fa-user"></i></a></li>
      <li class="navbar-item"><a href="#"><i class="fa fa-plus"></i></a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'SideBar'
  }
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: center;
    padding: 25px 10px;
    position: fixed;
    left: 0;
    height: 100vh;
    width: 4rem;
    background-color: #111;
  }

  .navbar ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 25px;
  }

  .navbar-item a {
    text-decoration: none;  
  }

  .navbar-item:last-child {
    margin-top: auto;
  }

  .navbar-item a i {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff66;
    height: 35px;
    width: 35px;
    scale: 1.3;
    transition: 150ms ease;
  }

  .navbar-item a i:hover {
    color: #fff;
    background-color: #ffffff11;   
    border-radius: 5px;
    transition: 250ms;
  }

  @media screen and (max-width: 900px) {
    .navbar {
      bottom: 0;
      overflow: hidden;
      height: 2rem;
      width: 100vw;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #000;
      z-index: 2;
    }

    .navbar ul {
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
    }
  }
</style>
