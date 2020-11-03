import React from "react";
import { NavUl, InnerNavUl, NavLi, InnerNavLi, Buttons } from "../../style"
import { routes } from "../../../@types"

export default ({ setCurrentDoc, docs }: { setCurrentDoc: any, docs: any }) => {
  const keys = Object.keys(docs.routes)
  return (
    <NavUl>
      {keys.map((name: string, index) =>
        <NavLi key={index}>
          <h2>{name}</h2>
          <InnerNavUl>
            {
              docs.routes[name].map((doc: routes, index: number) =>
                <InnerNavLi key={index} onClick={() => setCurrentDoc(doc)}>
                  <Buttons.Simple color={doc.method} >  {doc.method.toUpperCase()}  </Buttons.Simple>
                  {doc.title}
                </InnerNavLi>)
            }
          </InnerNavUl>
        </NavLi>
      )}
    </NavUl>
  )
}
