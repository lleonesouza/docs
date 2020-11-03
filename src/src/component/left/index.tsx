import React, { ReactElement } from 'react'
import Nav from "./endpointsMenu"


export default function index({
  setCurrentDoc,
  setBodyInput,
  docs
}: {
  setCurrentDoc: any,
  setBodyInput:any,
  docs: any
}): ReactElement {
  return (
    <React.Fragment>
      <Nav setCurrentDoc={setCurrentDoc} docs={docs} />
    </React.Fragment>
  )
}
