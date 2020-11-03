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
const ListMenu = styled.div((props:any) => ({
  background: backgroundMethodColor(props.color),
  height: "25px",
  width: "45px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "30px"
}))

export { ListMenu }
export default { ListMenu }