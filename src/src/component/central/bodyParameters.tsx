import React from 'react';
import { routes } from "../../../@types"
import { Buttons, Divs, Lists } from "../../style"

const Parameters = ({ route, setBodyInput, bodyInput }: { route: routes, setBodyInput:any, bodyInput:any }) => {
    const { input } = route
    return (
        <Divs.BodyInput>
            {input ? input.body && <React.Fragment>
                <Lists.BodyUl>
                      <h3> Body </h3>
                    {input.body.map(({ description, hasChildren, required, title, type }) =>
                        <Lists.BodyLi>
                            <Lists.FieldsUl>
                                <Lists.FieldsLi>
                                    {title}
                                </Lists.FieldsLi>
                                <Lists.FieldsLi>
                                    
                                    <input />

                                    <em>{type}  {required ? "required" : null} </em> 
                                </Lists.FieldsLi>
                                <Lists.FieldsLi>
                                    <p>  {description}  </p>
                                </Lists.FieldsLi>
                            </Lists.FieldsUl>
                        </Lists.BodyLi>
                    )}
                </Lists.BodyUl>
            </React.Fragment> : null}
        </Divs.BodyInput>
    )
}


export default Parameters