const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors')();

app.use(cors);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); //axios 통신 시 필요한 구문

const user=[
    {username:'admin', userpass:'1234'},
    {username:'front', userpass:'abcd'},
    {username:'back', userpass:'end'}
];

app.post('/login',function(req,res){
    let id=req.body.username;
    let pass=req.body.userpass;
    
    var idcheck=user.filter(function(v){
        return id===v.username;
    });
    
    if(idcheck.length>0){
        if(idcheck[0].userpass===pass){
            res.json({success:1, message:'login success'});
        }else{
            res.json({error:-1, message:'no match password'});
        }
    }else{
        res.json({success:2, message:'go to register'});
    }
});


const server=app.listen(4000);