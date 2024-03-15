const express = require("express")
const app = express()
const port = 4000

const calculatesum = function(n){
    let ans = 0 
    for (let i = 1; i <= n; i++) {
        ans = ans + i    
    }
    return ans
}



app.get("/" , (req,res) => {
    const a = req.query.n
    const ans = calculatesum(a)
    res.send("hi your answer is " + ans)
})
app.listen(port)