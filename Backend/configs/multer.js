import  multer from "multer"
const upload=multer({storage:multer.diskStorage({
  destination:'uploads/',
  filename:function(req,file,callback){
    callback(null,file.originalname)
  }
})})
export default upload