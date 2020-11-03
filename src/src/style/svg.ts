import styled from '@emotion/styled'


const backgroundMethodColor = (method: "get" | "put" | "post" | "del") => {
  switch (method) {
    case "get":
      return "green"
    case "put":
      return "purple"
    case "post":
      return "blue"
    case "del":
      return "red"
    default:
      return "green"
  }
}

// Method Button
const Wave = styled.svg((props:any) => ({
  height: "100%",
  width: "100%",
  position: "absolute"
}))



export { Wave }
export default { Wave }