import React from 'react';
import {useRouter} from 'next/router'
import data from '../../utils/data'
import Image from "next/image";
import Layout from '../../components/Layout';
import NextLink from "next/link";
import {Link,Grid} from '@material-ui/core'
import useStyles from '../../utils/style';



export default function ProductScreen() {

 const classes = useStyles();   
const router = useRouter();

const {slug} = router.query;
const product = data.products.find(p => p.slug === slug);

if(!product) {
 return (<div> notfound </div>)
}


    return (
      <Layout title={product.name}>
        <div className={classes.section}>
          <NextLink href="/" passHref>
            <Link>Back to products</Link>
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
            <Grid item md={3} xs={12}></Grid>
          </Grid>
        </Grid>
        <h1>{product.name}</h1>
      </Layout>
    );
};



