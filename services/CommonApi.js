import axios from "axios";

const commonApi = async (method, url, reqbody) => {
  let configObject = {
    method: method,
    url: url,
    data: reqbody,
  };

  return await axios (configObject)
  .then((res)=>{
    return res
  })
  .catch((err)=>{
    return err
  })
};
export default commonApi
