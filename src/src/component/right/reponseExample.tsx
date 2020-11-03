import React, { ReactElement } from 'react'

interface Props {
    response:any
}

export default function reponseExample({response}: Props): ReactElement {
    return (
        <div>
            {JSON.stringify(response)}
        </div>
    )
}
