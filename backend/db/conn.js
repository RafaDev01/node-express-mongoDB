const mongoose = require("mongoose")

async function main(){

    mongoose.set("strictQuery", true)

    try {
        await mongoose.connect(
                "mongodb+srv://rafael:aPmsmhoUVz2X6AZt@cluster0.md2yrvs.mongodb.net/?retryWrites=true&w=majority"
            );

            console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main