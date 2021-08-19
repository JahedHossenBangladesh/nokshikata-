import React from 'react';
import {useRouter} from 'next/router'
import data from '../../utils/data'
import Layout from '../../components/Layout';
import NextLink from "next/link";
import Link from '@material-ui/core'



export default function ProductScreen() {
const router = useRouter();
const {slug} = router.query;
const product = data.products.find(p => p.slug === slug);

if(!product) {
 return <div> notfound </div>
}


    return (
     <Layout title={product.name}>
         <div>
             {/* <NextLink href='' passHref >
                 <Link>
                 Back to products
                 </Link>
             </NextLink> */}
         </div>
         <h1>{product.name}</h1>

     </Layout>
    );
};

