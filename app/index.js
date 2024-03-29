const app = require("express")();
const appid = process.env.APPID;

app.get("/", (req, res)=>{
    res.send(`appid: ${appid} home page : says hellooo`)
});


app.get("/app1", (req, res)=>{
    res.send(`appid: ${appid} app1 page : says hellooo`)
});

app.get("/app2", (req, res)=>{
    res.send(`appid: ${appid} app2 page : says hellooo`)
});

app.get("/admin", (req, res)=>{
    res.send(`appid: ${appid} admin page : says hellooo`)
});


app.listen(appid, () => console.log(`${appid} is listening on 9999`));