import mongoose from 'mongoose';

export default async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://dontz3210:shit161@touchingdevelopment.eh68mta.mongodb.net/?retryWrites=true&w=majority' ?? '')
        console.log('DB connected', connect.connection.host, connect.connection.name)
    } catch (err) {
        console.log('err')
        process.exit(1)
    }
};