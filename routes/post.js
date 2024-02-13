const express=require('express');
const router=express.Router();
const arr=[{id:1 , name:"eya", email:"eya17@gamil.com", adress:"tunis"}
,{id:2 , name:"bilel", email:"bilel@gamil.com", adress:"mahdia"}
,{id:3 , name:"ahmed", email:"ahmed@gamil.com", adress:"nabeul"}
,{id:4 , name:"henda", email:"henda@gamil.com", adress:"tunis"}];
router.get('/all', (req, res)=> {
    res.send(arr)
});
router.get('/:id', (req, res)=> {
    const id = req.params.id;
    const entry = arr.find(item => item.id === parseInt(id));
    if (entry) {
        res.send(entry);
    } else {
        res.status(404).send("Entry not found");
    }
});
module.exports = router;