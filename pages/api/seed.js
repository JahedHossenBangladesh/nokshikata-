import nc from "next-connect";
import Product from "../../model/product";
import data from "../../utils/data";
import db from "../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
// delet many
  await Product.deleteMany();
//   insert many 
 await Product.insertMany(data.products);
  await db.disconnect();
  res.send('Added all data successfully');
});

export default handler;
