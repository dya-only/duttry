<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <main>
    <NavBar/>

    <div class="bannerContainer">
      <div class="banner">
        <div class="bannerInner">

          <div class="textbox">
            <strong class="titleStyle">엔트리 10주년 '브랜드 필름'</strong>
            <p class="subTitleStyle">가슴이 웅장해지는 48초, 지금 확인해 보세요!</p>

            <a class="bannerBtn" href="https://campaign.naver.com/entry-10th-anniversary/">자세히 보기</a>
          </div>
        </div>
      </div>
    </div>

    <div class="staffContainer">
      <div class="staff">

      </div>
    </div>

    <div class="popularContainer">
      <div class="popularMenu">
        <h2>인기 작품</h2>
        <a href="/" class="popularBtn">
          <span>더 보기</span>
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "../styles/home.css";
</style>