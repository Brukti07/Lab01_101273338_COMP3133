var fs = require("fs")
console.log("Lab 1")


fs.readFile("input_countries.csv", (err, data) => {
    try {
        if (fs.existsSync())
        console.log(err)
        return
        
    } catch (error) {
        
    }
    console.log(data.toString())
})