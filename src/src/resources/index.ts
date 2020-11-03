
import makeClient from "./client"

const client = makeClient()

const wrapPromise = (promise:Promise<any>) => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(r => {
    status = "success"
    result = r;
  }, (e:any) => {
    status = "error"
    result = e
  })


  return {
    read() {
      if(status === "pending"){
        throw suspender
      }else if(status === "error"){
        throw result
      }
      return result
    }
  }
}

const createResources = () => {
  return {
    docs: wrapPromise(client.getDocs()),
  }
}


export default createResources