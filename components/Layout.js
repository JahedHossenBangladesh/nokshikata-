import { AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/dist/shared/lib/head'
import NextLink from 'next/link'

import React from 'react'
import useStyles from '../utils/style.js'
function Layout({title,children,description}) {
    const classes = useStyles()
    return (
      <div>
        <Head>
          <title>{title ? `${title} -গাঁও গেরাম ` : "গাঁও গেরাম"}</title>
          {description && <meta name="description" content={description} />}
        </Head>
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
      </div>
    );
}

export default Layout
