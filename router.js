
const express=require('express');
const  router=express.Router()
const {projects}=require('./permission');

router.get('/',(req,res)=>{
    res.json(projects)
})


router.get('/:projectId', (req,res)=>{
    res.json(req.projects)
});


function setProject(req,res,next){
    const projectId=parseInt(req.params.projectId)
    req.project=projects.find(project=>project.id===projectId)
    if(req.project==null){
        res.status(400)
        return res.send("project not found");
    }
    next()
}



module.exports=router;