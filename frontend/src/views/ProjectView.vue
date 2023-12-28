<script setup lang="ts">

import BlockMenu from "@/components/blockMenu.vue"
import {ref} from "vue"
import { VueDraggableNext } from 'vue-draggable-next'

const availableBlocks = ref([
  {
    id: 1,
    name: '시작되었을 때',
    blockType: 'start',
    position: { x: 100, y: 100 },
  },
  {
    id: 2,
    name: '앞으로 10 움직이기',
    blockType: 'action',
    blockAction: 'x + 10',
    position: { x: 100, y: 150 }
  }
])
const usedBlocks = ref([])
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
                          <input class="entrySceneFieldWorkspace" value="장면 1"/>
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

  <div class="panelContainer">
    <div class="left">
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

      <div class="objectListContainer"></div>
    </div>

    <div class="right">
      <ul class="tabList">
        <li class="tabItem">블록</li>
        <li class="tabItemDisable">모양</li>
        <li class="tabItemDisable">소리</li>
        <li class="tabItemDisable">속성</li>
      </ul>


      <div class="workSpace">
        <ul class="blockMenuContainer">
          <blockMenu logo='https://playentry.org/lib/entry-js/images/start.svg' name='시작' />
          <blockMenu logo='https://playentry.org/lib/entry-js/images/flow.svg' name='흐름' />
          <blockMenu logo='https://playentry.org/lib/entry-js/images/moving.svg' name='움직임' />
          <blockMenu logo='https://playentry.org/lib/entry-js/images/looks.svg' name='생김새' />
          <blockMenu logo='https://playentry.org/lib/entry-js/images/brush.svg' name='붓' />
          <blockMenu logo='https://playentry.org/lib/entry-js/images/sound.svg' name='소리' />
          <blockMenu logo='https://playentry.org/lib/entry-js/images/judgement.svg' name='판단' />
          <blockMenu logo='https://playentry.org/lib/entry-js/images/calc.svg' name='계산' />
          <blockMenu logo='https://playentry.org/lib/entry-js/images/variable.svg' name='자료' />
          <blockMenu logo='https://playentry.org/lib/entry-js/images/func.svg' name='함수' />
        </ul>

        <div class="blockContainer">
        </div>

        <div class="workspacePanel">
          <div class="entryBg">
<!--            <img v-for="n in 300" :key="n" class="bg" src="https://playentry.org/lib/entry-js/images/entry_bg.svg" alt="">-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../styles/project.css";
</style>