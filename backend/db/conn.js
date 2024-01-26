const mongoose = require("mongoose")

async function main(){

    mongoose.set("strictQuery", true)

    try {
        await mongoose.connect(
                //conexao com o DB
                ""
            );

            console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main
