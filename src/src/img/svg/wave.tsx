import React, { ReactElement } from 'react'
import {Svg} from "../../style"

export default function wave({ }: any): ReactElement {
    return (
        <Svg.Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L120,133.3C240,171,480,245,720,234.7C960,224,1200,128,1320,80L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></Svg.Wave >
    )
}
