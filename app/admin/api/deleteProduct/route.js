import { MongoClient, ObjectId } from 'mongodb';

export async function DELETE(req) {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    const dbName = 'crudbits';

    try {
        await client.connect();
        const data = await req.json();
        const db = client.db(dbName);
        const collection = db.collection('products');

        // Ensure that an ID is provided
        if (!data._id) {
            return new Response(JSON.stringify({ error: 'No ID provided' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Convert _id to ObjectId
        const objectId = new ObjectId(data._id);
        const result = await collection.deleteOne({ _id: objectId });

        if (result.deletedCount === 0) {
            return new Response(JSON.stringify({ error: 'No product found with the given ID' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ result: "OK", deletedId: data._id }), {
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
