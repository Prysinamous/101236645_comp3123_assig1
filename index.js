//Robertha Alvarez 101236645
//Assignment 1 for Full Stack class
//Hi prof I hope you like it :D

let express= require('express');
let fs=require('fs');
let app=express();

app.get('/',(req,res) =>
{
    res.send('Assignment 1- 101236645 Robertha Alvarez');
});

app.get('/user',(req,res) =>
{
        let userFound= true;
        let JSONusers= fs.readFileSync("./users.json")
        let users= JSON.parse(JSONusers)

        let emptyUser = users.find(e => e.id == req.query.uid)

        let newUser = {
            id: emptyUser.id,
            name: emptyUser.name,
            email: emptyUser.email,
            address: emptyUser.address.city,
            phone: emptyUser.phone
        }

    res.send(newUser)


        if(userFound==false)
        {
            res.send('"message": "No user found"\n')
        }

});

app.get('/users/all', (req,res)=>
{
    let JSONusers= fs.readFileSync("./users.json")
    let users= JSON.parse(JSONusers)

    users.sort((name1,name2) => //The sort() method sorts the elements of an array in place and returns the sorted array
    {
        if(name1.name > name2.name)
        {
           return 1;
        }
        else if(name1.name < name2.name)
        {
            return -1;
        }
        else
        {
            return 0;
        }
    });

    res.json(users)
});


app.listen(8091,()=>
{
    console.log("Port 8091: Application started!")
});
