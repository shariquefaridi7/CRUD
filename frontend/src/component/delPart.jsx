const DelPart =(props)=>{
   const {del}=props;
   
return(
    <>
    {
        
        del?.map((resp)=>{
            return(
                <>
                <br/>
                <br/>
                <div style={{background:"black",color:"white",paddingLeft:"20px",paddingTop:"20px",paddingRight:"20px"}}>

                <h3>Book Name : {resp.name}</h3>
                <h3>Amount Paid : Rs {resp.wallet}</h3>
                <hr/>
                <br/><br/>
             
        
            </div>
            </>

            )
   



        })


    }
    
    </>
)

}

export default DelPart;