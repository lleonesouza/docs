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


const BodyUl = styled.ul((props: any) => ({
    background: "rgba(255,255,255,0.4)",
    height: "100%",
    width: "90%",
    listStyle: "none",
    marign: 0,
    padding: 0,
    paddingBottom: "50px",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}))

const BodyLi = styled.li((props: any) => ({
    height: "100px",
    width: "100%",
}))


const FieldsUl = styled.ul((props: any) => ({
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr 2fr",
    columnGap: "15px",
    marign: 0,
    padding: 0,
    width: "100%",
    listStyle: "none",
}))

const FieldsLi = styled.li((props: any) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    padding: "5px",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
}))

export { BodyUl, BodyLi, FieldsUl, FieldsLi  }
export default { BodyUl, BodyLi, FieldsUl, FieldsLi  }