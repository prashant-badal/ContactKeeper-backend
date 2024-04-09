const {constants}=require('../constants/constants')
const { VALIDATION_ERROR, UNAUTHORIZED ,FORBIDDEN,NOT_FOUND,SERVER_ERROR}=constants
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode :SERVER_ERROR;
    switch (statusCode){

        case VALIDATION_ERROR:
            res.json({
                title:"Validation Error",
                message:err.message,
                stackTree:err.stackTree

            })
            break;

            case UNAUTHORIZED:
                res.json({
                    title:"UNAUTHORIZED",
                    message:err.message,
                    stackTree:err.stackTree
    
                });

            case  FORBIDDEN :
                res.json({
                    title:"ORBIDDEN",
                    message:err.message,
                    stackTree:err.stackTree
    
                });

                case NOT_FOUND:
                res.json({
                    title:"Not Found",
                    message:err.message,
                    stackTree:err.stackTree
    
                });

            case SERVER_ERROR:
                res.json({
                    title:"SERVER_ERROR",
                    message:err.message,
                    stackTree:err.stackTree
    
                });
                default:
                    console.log("NO ERROr , all gud")
                break;
    }
}

module.exports=errorHandler