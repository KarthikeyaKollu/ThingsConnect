import React from 'react'
import {Card} from "./card"
import { Button } from './Button'

export const HealthPage = () => {
  return (
    <>
    <div className="p-6 grid grid-cols-2 gap-5">
        
    <Card title={"SpO2"} range={"100-200"} value={"25"} timestamp={"5"}/>
    <Card title={"BPM"} range={"100-200"} value={"30"} timestamp={"5"}/>
    <Card title={"Temp"} range={"100-200"} value={"30"} timestamp={"5"}/>
     
    </div>

    <Button/>
    </>
  )
}
