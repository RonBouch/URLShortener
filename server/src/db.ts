import mongoose from "mongoose";

async function db() {
    const dbUri = 'mongodb://http://localhost:5000/urlshortenerapp'
    try {
        await mongoose
            .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log(`DB connected to ${dbUri}`);
            });
    } catch (e) {
        console.error(e);
    }
}

export default db;