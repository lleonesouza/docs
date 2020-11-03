import styled from '@emotion/styled'

const Right = styled.div({
    margin: 0,
    padding: 0,
    height: "100vh",
    minWidth: "130px",
    width: "20vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: 'black',
    color: "white",
    position: "absolute",
    top: 0,
    right: 0,
    borderRight: "1px yellow solid"
})



// Method Button
const Header = styled.div((props:any) => ({
  background: "rgba(111,0,111,0.2)",
  height: "300px",
  width: "110%",
  margin: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}))

const TopHeader = styled.div({
    height: "60px",
    width: "80%",
    margin: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
})

const Description = styled.div({
    height: "140px",
    minHeight: "130px",
    width: "70%",
    letterSpacing: "0.5px"
})



const TryIt =  styled.div((props:any) => ({
    background: "rgba(255,255,255,0.8)",
    height: "60px",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "30px"
  }))

const ResponseExample = styled.div((props:any) => ({
    background: "rgba(255,255,255,0.8)",
    height: "60px",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "30px"
  }))

const RequestExample = styled.div((props:any) => ({
    background: "rgba(255,255,255,0.8)",
    height: "60px",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "30px"
  }))



const BodyInput = styled.div((props:any) => ({
    // background: "rgba(111,0,111,0.2)",
    padding: "10px",
    height: "100%",
    width: "100%",
    margin: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }))



export { Header, TryIt, Right, Description, TopHeader, ResponseExample, BodyInput }
export default { Header, TryIt, Right, Description, TopHeader, ResponseExample, BodyInput }