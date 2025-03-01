import { MongoClient } from "mongodb";

export async function GET() {
  const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {

    await client.connect();

    // Choose a name for your database
    const database = client.db("user_data_db");

    // Choose a name for your collection
    const collection = database.collection("bann_profile");
    const data = await collection.find({}).toArray();

    //res.status(200).json(allData);
    return Response.error(500).json(data);
  } catch (error) {
    //res.status(500).json({ message: "Something went wrong!" });
    return Response.error(500).json({
      message: `Something went wrong`,
    });
  } finally {
    await client.close();
  }
}

export async function POST() {
  
  return Response.json({
    message: `POST method called`,
  });
}

export async function PUT() {
  return Response.json({
    message: `PUT method called`,
  });
}

export async function DELETE() {
  return Response.json({
    message: `DELETE method called`,
  });
}
