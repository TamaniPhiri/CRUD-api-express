import express from "express";
import cors from "cors"

const app= express();
const port=5000;

app.use(express.json());
app.use(cors());
app.use( express.urlencoded({extended:true}))

const list=[
    {
        id:"1",
        name:"Rabbi",
        reg:"08"
    },
    {
        id:"2",
        name:"Tamani",
        reg:"31"
    }
]

app.get('/',(req,res)=>{
    res.send(list);
});

app.post('/', (req,res)=>{
    list.push(req.body);
    res.send(list);
});

app.patch('/:index', (req,res)=>{
    list[req.params.index]=req.body;
    res.send(list);
});

app.delete('/:index',(req,res)=>{
    list.splice(req.params.index,1);
    res.send(list);
});

app.listen(port,()=>{
    console.log(`app is running at http://localhost:${port}`);
});