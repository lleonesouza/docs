import React, { ReactElement } from 'react'
import CodeExample from "./codeExample"
import ResponseExample from "./reponseExample"
import Nav from "./nav"
import { Divs, Buttons } from "../../style"


interface Props {
    currentDoc:any
    response:any
}

export default function index({response}: Props): ReactElement {
    return (
        <Divs.Right>
            <Nav/>
            <CodeExample/>
            <ResponseExample response={response}/>
        </Divs.Right>
    )
}
