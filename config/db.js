import moongoose from 'mongoose'

const conectarDB = async () => {
    try {
        const db = await moongoose.connect('mongodb+srv://danielbj:pollo123@cluster0.vyoewbw.mongodb.net/apv?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    const url = `${db.connection.host}:${db.connection.port}`
    console.log(`MongoDB conectado en ${url}`);

    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1)
    } 
}


export default conectarDB;