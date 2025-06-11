

import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Home = () => {


    const [data, setData] = useState(["item1", "item2", "item3", "item4", "item5"])
    const index = useRef(null)

    const onDrop = (i) => {
        if(i==index.current){
            return 
        }
        setData((prev) => {
            let updated = [...prev]
            let draggedItem = updated[index.current]
            updated.splice(index.current, 1)
            updated.splice(i, 0, draggedItem)
            return updated


        })
    }


    return (
        <>
            <div className=' transition-all mt-[50px] flex flex-col items-center'>
                {
                    data.map((item, i) => (
                        <div
                            key={i}
                            draggable
                            onDragStart={() => {
                                index.current = i
                            }}
                            onDragEnd={() => {
                                index.current = null
                            }}
                            onDrop={() => {
                                onDrop(i)
                            }}
                            onDragOver={(e)=>{
                                e.preventDefault()
                            }}
                            className=' transition-all mt-[10px] w-[200px] h-[50px] border shadow-xl rounded-[5px] flex justify-center items-center'>{item} <span className='flex justify-end w-[110px]'> ::</span></div>

                    ))
                }
            </div>

        </>
    )
}

export default Home
