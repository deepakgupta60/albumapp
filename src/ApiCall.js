const ApiCall=()=>{
    const myData = [
        {
            name:"deepak",
            value:1
        },
        {
            name:"pankaj",
            value:2
        }
    ]
    return(<>
    
    {
        myData.map((data,idx)=>{
            return (
                <div key={idx}>
                    {data.name} {" "} {data.value}
                </div>
            )
        })
    }

    </>)
}

export default ApiCall;