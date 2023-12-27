<script setup lang="ts">

</script>

<template>
  <header>
    <div class="container">
      <div class="logo"></div>
    </div>
    <input class="name" type="text" maxlength="30" value="성민이 바보"/>

    <div class="menuContainer">
      <div class="menuBtnContainer">
        <a href="" class="menuBtn blockBtn"></a>
        <a href="" class="menuBtn fileBtn"></a>
        <a href="" class="menuBtn saveBtn"></a>
        <a href="" class="menuBtn helpBtn"></a>
        <div class="printBtn"></div>

        <hr>

        <div class="prevBtn"></div>
        <div class="nextBtn"></div>

        <hr>

        <div class="dropContainer">
          <div class="drop">
            <span class="dropType">기본형</span>
          </div>
        </div>

        <hr>

        <div class="dropContainer">
          <div class="drop">
            <span class="dropType">dya_only</span>
          </div>
        </div>

        <hr>

        <div class="langBtnContainer">
          <div class="langBtnInner">
            <div class="langBtn">
              <span class="langType">한국어</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sceneContainer">
      <!-- Scene -->
      <div class="sortable">
        <div class="rcs-custom-scroll" style="height: 100%;">
          <div class="rcs-outer-container" style="height: 100%;">
            <div class="rcs-inner-container" style="height: 100%; margin-right: -20px;">
              <div style="height: 100%; overflow-y: visible; margin-right: 20px;">
                <div class="sortable__de989">
                  <div>

                    <!-- One Scene -->
                    <div class="sortableItem">
                      <div id="7dwq" class="selectedScene">
                        <span class="entrySceneLeftWorkspace"></span>
                        <span class="entrySceneInputCover">
                          <input class="entrySceneFieldWorkspace" value="장면 1" />
                        </span>
                        <span class="entrySceneRemoveButtonCoverWorkspace">
                          <button class="entrySceneRemoveButtonWorkspace"></button>
                        </span>
                      </div>
                    </div>
                    <!-- -->

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add Scene Btn -->
      <span class="addSceneBtn"></span>
    </div>
  </header>

  <div class="playPanel">
    <button class="speedBtn"></button>
    <button class="scaleBtn"></button>
    <button class="gridBtn"></button>

    <canvas width="640" height="360"></canvas>
  </div>

  <div class="engineBtnContainer">
    <button class="objectAddBtn">오브젝트 추가하기</button>
    <button class="startEngineBtn">시작하기</button>
  </div>
</template>

<style scoped>
@import "../styles/project.css";
</style>