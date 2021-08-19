import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  CardContent,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";

import Layout from '../components/Layout'
import data from '../utils/data'

let theme = createTheme();
theme = responsiveFontSizes(theme);



export default function Home() {
  return (
    <div>
      <Layout>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">Products</Typography>
        </ThemeProvider>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.id}>
              <Card>
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
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button variant="contained" color="primary">
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
