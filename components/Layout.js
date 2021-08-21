          
import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Head from 'next/dist/shared/lib/head'
import NextLink from 'next/link'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React,{useContext} from 'react'
import useStyles from '../utils/style.js'
import { Store } from "../utils/Store.js";
import Cookies from 'js-cookie';
function Layout({title,children,description}) {

  const {state,dispatch} = useContext(Store)
  const {darkMode} = state;
const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "1.6rem",
      fontWeight: "400",
      margin: "1rem 0",
    },
    h1: {
      fontSize: "1.4rem",
      fontWeight: "400",
      margin: "1rem 0",
    },
  },
  palette:{
    type: darkMode? 'dark':'light',
    primary:{
      main: '#f0c000',
    },
    secondary:{
      main: '#208080'
    }
  }
});

    const classes = useStyles()
    const darkModeChangeHandler= () =>{
      dispatch(
        {
          type: darkMode?'DARK_MODE_OFF':'DARK_MODE_ON'
        }
      );
      const newDarkMode = !darkMode;
      Cookies.set('darkMode',newDarkMode?'ON': 'OFF')
    }
    return (
      <div>
        <Head>
          <title>{title ? `${title} -গাঁও গেরাম ` : "গাঁও গেরাম"}</title>
          {description && <meta name="description" content={description} />}
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <AppBar
          position="static"
          className={classes.navbar}
          // style = {{ marginBottom:'20px'}}
          // position="fixed"
        >
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>
                  {" "}
                  <h1>
                    <span style={{ color: "white" }}>গাঁও </span>

                    <span style={{ color: "yellow" }}>গেরাম </span>
                  </h1>{" "}
                </Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch checked={darkMode}
              onClick={darkModeChangeHandler}></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/cart" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer
          className={classes.footer}
          style={{ backgroundColor: "black", height: "70px", color: "white" }}
        >
          <Typography>All right goes to গাঁও গেরাম </Typography>
        </footer>
        </ThemeProvider>
      </div>
    );
}

export default Layout
