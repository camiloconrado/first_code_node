import express from "express";
const app = express();
const PORT = 3000;
import user from "./routes/user.js";
import product from "./routes/product.js";

app.use("/product", product);
app.use("/user", user);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    console.log(`http://127.0.0.1:${PORT}`);
    console.log(`http://[::]:${PORT}`);
})