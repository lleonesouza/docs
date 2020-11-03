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
const Simple = styled.div((props:any) => ({
  background: backgroundMethodColor(props.color),
  height: "25px",
  width: "45px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  fontsize: "0.6em",
  margin: "5px",
  border: "1px black solid"
}))


const TryIt = styled.button((props:any) => ({
  background: "black",
  height: "25px",
  width: "65px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  fontsize: "0.6em",
  cursor: "pointer",
  color: "white",
  margin: "5px",
  border: "1px black solid"
}))

export { Simple }
export default { Simple, TryIt }