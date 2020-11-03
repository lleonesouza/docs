import React, { ReactElement } from 'react'
import { routes } from '../../../@types'
import { Buttons, Divs } from "../../style"
import { Locked } from "../../lottie"
import { Wave } from "../../img/svg"
import axios from "axios"






export default function top({ route, baseurl, bodyInput }: { route: routes, baseurl: string, bodyInput:any }): ReactElement {
    const { title, address, description, method, isProtected } = route

    const url = `${baseurl}${address}`

    const makeRequestMethod = (method: "get" | "put" | "post" | "del" | string) => {
        switch (method) {
            case "get":
              return axios.get
            case "put":
              return axios.put
            case "post":
              return axios.post
            case "del":
              return axios.delete
            default:
              return axios.get
          }
    }

    const makeRequest = async () => {
        const request = makeRequestMethod(method)
        const res = await request(url, bodyInput)
        return res
    }

    return (
        <Divs.Header>
            <Divs.TopHeader>
                <h2> {title}  </h2>
                {isProtected ? <Locked /> : null}
            </Divs.TopHeader>

            <Divs.Description>
                <p> {description} </p>
            </Divs.Description>

            <Divs.TryIt>
                <Buttons.Simple color={method}> {method} </Buttons.Simple> <h2> {url} </h2>
                <Buttons.TryIt> Try It! </Buttons.TryIt>
            </Divs.TryIt>
        </Divs.Header>
    )
}
