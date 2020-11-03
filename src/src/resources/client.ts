
import axios from "axios"
import config from "../config"
import {routes} from "../../@types"


const makeRequests = () => {
    return {
      // Main Router Proxy
      getDocs: async (): Promise<routes[]> => {
      
          const res = await axios.get(`${config.address}/docs`);
          return res.data;
      
      }
    };
}




export default makeRequests