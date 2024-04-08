const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode : 50000;
    switch (statusCode){

        case 400:
            res.json({
                title:"Validation Error",
                message:err.message,
                stackTree:err.stackTree

            })
            break;

            case 404:
                res.json({
                    title:"Not Found",
                    message:err.message,
                    stackTree:err.stackTree
    
                });
                default:
                break;
    }
}

module.exports=errorHandler