import Buttons from "./buttons"
import Divs from "./divs"
import Lists from "./list"
import Containers from "./containers"
import Svg from "./svg"
import styled from '@emotion/styled'


const fontSize = "22"


const CentralDiv = styled.div({
    width: "55vw",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
})


const NavUl = styled.ul({
    overflow:"auto",
    padding: "auto",
    paddingTop: "200px",
    margin: 0,
    height: "100%",
    minWidth: "130px",
    width: "20vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    background: 'black',
    color: "white",
    position: "absolute",
    top: 0,
    listStyle: "none",
})


const InnerNavUl = styled.ul({
    margin: 0,
    padding: 0,
    listStyle: "none",
})


const InnerNavLi = styled.li({
    margin: 0,
    padding: "2px",
    cursor: "pointer",
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
})


const NavLi = styled.li({
    margin: 0,
    listStyle: "none",
})






export { Svg, CentralDiv, NavUl, InnerNavUl, NavLi, InnerNavLi, Buttons, Divs,Containers, Lists }