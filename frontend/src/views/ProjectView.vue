<script setup lang="ts">

import draggable from 'vuedraggable'
import BlockMenu from "@/components/BlockMenu.vue"
import {ref} from "vue"

let availableBlocks = ref([
  {
    id: 1,
    name: '시작되었을 때',
    blockType: 'start',
    width: 100
  },
  {
    id: 2,
    name: '앞으로 10 움직이기',
    blockType: 'action',
    blockAction: 'x + 10',
    width: 150
  },
  {
    id: 3,
    name: '방향을 90% 만큼 회전하기',
    blockType: 'action',
    blockAction: 'deg + 90',
    width: 200
  },
  {
    id: 4,
    name: '모양 보이기',
    blockType: 'action',
    blockAction: 'appear',
    width: 80
  },
  {
    id: 5,
    name: '모양 숨기기',
    blockType: 'action',
    blockAction: 'hide',
    width: 80
  }
])

let usedBlocks = ref([
  {
    id: 0,
    name: ''
  }
])
let drag = false
usedBlocks.value.shift()

const checkMove = (e: any) => {
  return e.from !== e.to;
}

const getStart = () => {
  console.log(availableBlocks.value)
  console.log(usedBlocks.value)
}

</script>

<template>
  <header>
    <div class="container">
      <a href="/">
        <div class="logo"></div>
      </a>
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
        <button class="startEngineBtn" v-on:click="getStart">시작하기</button>
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
          <BlockMenu logo='https://playentry.org/lib/entry-js/images/start.svg' name='시작'/>
          <BlockMenu logo='https://playentry.org/lib/entry-js/images/flow.svg' name='흐름'/>
          <BlockMenu logo='https://playentry.org/lib/entry-js/images/moving.svg' name='움직임'/>
          <BlockMenu logo='https://playentry.org/lib/entry-js/images/looks.svg' name='생김새'/>
          <BlockMenu logo='https://playentry.org/lib/entry-js/images/brush.svg' name='붓'/>
          <BlockMenu logo='https://playentry.org/lib/entry-js/images/sound.svg' name='소리'/>
          <BlockMenu logo='https://playentry.org/lib/entry-js/images/judgement.svg' name='판단'/>
          <BlockMenu logo='https://playentry.org/lib/entry-js/images/calc.svg' name='계산'/>
          <BlockMenu logo='https://playentry.org/lib/entry-js/images/variable.svg' name='자료'/>
          <BlockMenu logo='https://playentry.org/lib/entry-js/images/func.svg' name='함수'/>
        </ul>

        <div class="blockContainer">
          <draggable
              class="list-group"
              :list="availableBlocks"
              :group="{ name: 'blocks', pull: 'clone', put: false }"
              :move="checkMove"
              itemKey="name"
              :animation="300"
          >
            <template #item="{ element, index }">
              <div :id="element.id" class="list-group-item block"
                   :style="{ top: index * 50 + 135 + 'px', width: element.width + 'px' }">{{ element.name }}
              </div>
            </template>
          </draggable>
        </div>

        <div class="workspacePanel">
          <div class="entryBg">
            <draggable
                class="workspaceBlockContainer"
                :list="usedBlocks"
                group="blocks"
                itemKey="name"
                @start="drag = true"
                @end="drag = false"
                :animation="300"
            >
              <template #item="{ element, index }">
                <div class="list-group-item block"
                     :style="{ top: index * 50 + 135 + 'px', width: element.width + 'px' }">{{ element.name }}
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../styles/project.css";
</style>