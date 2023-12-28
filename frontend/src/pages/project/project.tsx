import { useState } from 'react'
import Draggable from 'react-draggable'
import './project.css'

export default function Project() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [availableBlocks, setAvailableBlocks] = useState([
    {
      id: 1,
      element: (
        <Draggable key={1} onDrag={(data) => trackPos(data)} defaultClassName='1 startBlock' onStart={(e, data) => isNewBlock(e, data)} onStop={(e, data) => saveBlocks(e, data)} defaultPosition={{ x: 10, y: 0 }}>
          <div>시작 되었을 때</div>
        </Draggable>
      )
    },
    {
      id: 2,
      element: (
        <Draggable key={2} onDrag={(data) => trackPos(data)} defaultClassName='2 moveBlock' onStart={(e, data) => isNewBlock(e, data)} onStop={(e, data) => saveBlocks(e, data)} defaultPosition={{ x: 10, y: 60 }}>
          <div>이동방향으로 10만큼 움직이기</div>
        </Draggable>
      )
    }
  ])
  const [usedBlocks, setUsedBlocks] = useState([] as any)
  let availableN = availableBlocks.length
  let usedN = usedBlocks.length

  // Following mouse
  const trackPos = (data: any) => {
    setPosition({ x: data.x, y: data.y })
  }

  // Check this block is new
  const isNewBlock = (e: any, data: any) => {
    if (data.x < 200) {

      if (e.target.className[0] === '1') {

        // 시작블록 개수 제한: 1개
        // availableBlocks.push(
        //   {
        //     id: ++availableN,
        //     element: (
        //       <Draggable key={availableN} onDrag={(data) => trackPos(data)} defaultClassName='1 startBlock' onStart={(e, data) => isNewBlock(e, data)} onStop={(e, data) => saveBlocks(e, data)} defaultPosition={{ x: 10, y: 0 }}>
        //         <div>시작 되었을 때</div>
        //       </Draggable>
        //     )
        //   }
        // )
        return
      }

      if (e.target.className[0] === '2') {
        availableBlocks.push(
          {
            id: ++availableN,
            element: (
              <Draggable key={availableN} onDrag={(data) => trackPos(data)} defaultClassName='2 moveBlock' onStart={(e, data) => isNewBlock(e, data)} onStop={(e, data) => saveBlocks(e, data)} defaultPosition={{ x: 10, y: 60 }}>
                <div>이동방향으로 10만큼 움직이기</div>
              </Draggable>
            )
          }
        )
        return
      }
    }
  }

  // Save in used block
  const saveBlocks = (e: any, data: any) => {
    if (data.x < 200) {
      setAvailableBlocks(availableBlocks.filter(x => x.id === e.target.id))
      setUsedBlocks(usedBlocks.filter((x: any) => x.id === e.target.id))
      return
    }

    let blockType: string = 'start'
    if (e.target.className[0] === '1') blockType = 'start'
    else if (e.target.className[0] === '2') blockType = 'action'

    if (blockType === 'start') {
      usedBlocks.push({
        id: ++usedN,
        element: {
          objectId: 1,
          blockType,
          nextBlockId: 1
        }
      })

      return
    }
    if (blockType === 'action') {
      usedBlocks.push({
        id: ++usedN,
        element: {
          objectId: 1,
          blockType,
          blockAction: 'x + 10',
          prevBlockId: 1,
          nextBlockId: 2
        }
      })

      return
    }
  }

  return (
    <main className='main'>
      <div className='leftPanel' id='leftPanel'>
        {availableBlocks.map((el) => {
          return (
            el.element
          )
        })}

      </div>

      <div className='rightPanel'>
        <button onClick={() => console.log(usedBlocks)}>확인하기</button>
      </div>
    </main>
  )
}