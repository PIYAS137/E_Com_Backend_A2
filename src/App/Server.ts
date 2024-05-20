import mongoose from 'mongoose'
import app from './App'
import Config from './Config';


// Server Linstener Function ==========================================>>>

async function main() {
    await mongoose.connect(Config.db_url as string)
    app.listen(Config.port,()=>{
        console.log(`Server is runnig on http://localhost:${Config.port}`);
    })
}
main()
