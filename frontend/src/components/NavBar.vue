<script setup lang="ts">

</script>

<template>
  <header>
    <div class="container">
      <h1 class="logo">
        <a href="/" />
      </h1>

      <nav>
        <ul>
          <li><a href="">생각하기</a></li>
          <li><a href="">만들기</a></li>
          <li><a href="">공유하기</a></li>
          <li><a href="">커뮤니티</a></li>
        </ul>
      </nav>

      <div class="menu_container">
        <div class="menu">
          <a class='icon'>
            <img class='search' src="https://playentry.org/img/IcoTopSearch.svg" alt="">
          </a>

<!--          IsLogined-->
<!--          <a class='icon'>-->
<!--            <img class='notice' src="https://playentry.org/img/IcoTopAlarm.svg" alt="">-->
<!--          </a>-->
<!--          <a class='icon' href="/">-->
<!--            <img class='profile' src="https://playentry.org/uploads/87/4w/874wed1gklsv5s5w003hf51f2bgj6ui2.svg" alt="">-->
<!--          </a>-->

          <a class="icon" href="">
            <div class="login">로그인</div>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import "../styles/nav.css";
</style>