import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Image from "next/image";
import Layout from "../../components/Layout";
import NextLink from "next/link";
import {
  Link,
  Grid,
  Card,
  List,
  ListItem,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "../../utils/style";
import Product from "../../model/product";
import db from '../../utils/db'
export default function ProductScreen(props) {
  const { product} = props;

  const classes = useStyles();
  // const router = useRouter();

  // const { slug } = router.query;
  // const product = data.products.find((p) => p.slug === slug);

  if (!product) {
    return <div> notfound </div>;
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              {" "}
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>{" "}
            </ListItem>

            <ListItem>
              {" "}
              <Typography>Category:{product.category}</Typography>{" "}
            </ListItem>
            <ListItem>
              <Typography>Brand:{product.brand} </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating:{product.rating} stars ({product.numReviews} reviews){" "}
              </Typography>
            </ListItem>
            <ListItem>
              Description:
              <Typography>{product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>৳{product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{product.countInStock}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add to Cart
                </Button>
              </ListItem>
            </List>
          </Card>{" "}
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {params} = context;
  const {slug} = params;
  await db.connect();
  const product = await Product.findOne({slug}).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDataToObj(product),
    },
  };
}