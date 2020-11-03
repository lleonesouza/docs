import React, { useState, Fragment } from "react"
import Central from "./central"
import Left from "./left"
import Right from "./right"

const SubIndex = ({ resource }: { resource: any }) => {
    const docs = resource.docs.read()
    const fistElement = Object.keys(docs.routes)[0]
    const [currentDoc, setCurrentDoc] = useState(docs.routes[fistElement][0])
    const [bodyInput, setBodyInput] = useState(currentDoc.input.body)
    const [response, setResponse] = useState({})

    console.log(bodyInput)
    console.log(currentDoc)
    return (
        <Fragment>
            <Central
                setResponse={setResponse}
                currentDoc={currentDoc}
                bodyInput={bodyInput}
                setBodyInput={setBodyInput}
                baseurl={docs.baseurl}
            />
            <Left
                setCurrentDoc={setCurrentDoc}
                setBodyInput={setBodyInput}
                docs={docs}
            />
            <Right
                currentDoc={currentDoc}
                response={response}
            />
        </Fragment>
    )
}

export default SubIndex