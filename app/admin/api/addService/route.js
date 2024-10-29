import { MongoClient } from 'mongodb';

export async function POST(req) {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    const dbName = 'crudbits';

    try {
        await client.connect();
        const data = await req.json();
        const db = client.db(dbName);
        const collection = db.collection('services');
        let result;

        if (Array.isArray(data)) {
            result = await collection.insertMany(data);
        } else {
            result = await collection.insertOne(data);
        }

        return new Response(JSON.stringify({ result: "OK", insertedId: result.insertedId }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return new Response(JSON.stringify({ error: 'Failed to connect to the database' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    } finally {
        await client.close();
    }
}