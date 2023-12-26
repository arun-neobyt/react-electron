let basev2=process.env.REACT_APP_BASE_URL_V2



export const postApiCaller=async(body,headers,endPoint)=>{
    let url=basev2+endPoint
    const response=await fetch(url,{
        method: "POST",
        body:body,
        headers:headers,
        })
        const res=await response.json();
        return res
}
