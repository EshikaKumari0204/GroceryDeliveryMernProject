import  multer from "multer"
const upload=multer({storage:multer.diskStorage({
  destination:'uploads/',
  filename:function(req,file,callback){
    callback(null,Date.now()+"-"+file.originalname)
  }
})})
export default upload