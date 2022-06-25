import nextConnect from "next-connect";
import middleware from "../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let doc = await req.db.collection("daily").findOne();
  console.table(doc);
  res.json(doc);
});

export default handler;
