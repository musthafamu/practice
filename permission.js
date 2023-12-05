const role={
    admin:"admin",
    basic:"basic"
}

module.exports={
   role:role,
   
   users:[
    {id:1,name:"kyle",role:role.admin},
    {id:1,name:"sally",role:role.basic},
    {id:3,name:"joe",role:role.basic}
   ],
   
   projects:[
    {id:1,name:"kyles project",userId:1},
    {id:2,name:"sallys project",userId:2},
    {id:3,name:"joes project",userId:3}
   ]
}