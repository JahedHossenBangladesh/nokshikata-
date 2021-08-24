import {
  Button,
  Card,
  CardActionArea,
  CardActions, CardContent, CardMedia, createTheme, Grid, responsiveFontSizes,
  ThemeProvider, Typography
} from "@material-ui/core";
import NextLink from "next/link";
import Layout from '../components/Layout';
import Product from "../model/product";
import db from "../utils/db";





let theme = createTheme();
theme = responsiveFontSizes(theme);



export default function Home(props) {
  const { products } = props;
  return (
    <div>
      <Layout>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">Products</Typography>
        </ThemeProvider>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.id}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                      style={{ height: 200 }}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>৳{product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(){
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDataToObj),
    },
  };
}