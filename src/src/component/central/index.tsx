import React from 'react';
import BodyParameters from "./bodyParameters"
import Top from "./top"
import Warnnings from "./warnnings"
import { routes } from "../../../@types"
import { CentralDiv } from '../../style';

const Docs = ({ currentDoc, baseurl, setBodyInput, bodyInput }: 
    { currentDoc: routes,
         baseurl:string, 
        setBodyInput:any,
         bodyInput:any, 
        setResponse:any 
    }) => {
    return (
        <CentralDiv>
            <Top route={currentDoc} baseurl={baseurl} bodyInput={bodyInput} />
            <BodyParameters setBodyInput={setBodyInput} bodyInput={bodyInput} route={currentDoc} />
            <Warnnings route={currentDoc} />
        </CentralDiv>
    )
}


export default Docs