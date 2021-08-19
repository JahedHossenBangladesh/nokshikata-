import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/dist/shared/lib/head'
import React from 'react'
import useStyle from '../utils/style.js'
function Layout({children}) {
    const classes = useStyle()
    return (
      <div>
        <Head>
          <title>Next Amazon</title>
        </Head>
        <AppBar
          position="static"
          className={classes.navbar}
          // style = {{ marginBottom:'20px'}}
          // position="fixed"
        >
          <Toolbar>
            <Typography>
              {" "}
              <h1>
                <span style={{ color: "white" }}>গাঁও  </span>

                <span style={{ color: "yellow" }}>গেরাম </span>
              </h1>{" "}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer
          className={classes.footer}
          style={{ backgroundColor: "black", height: "70px", color: "white" }}
        >
          <Typography>All right goes to Gao Geram </Typography>
        </footer>
      </div>
    );
}

export default Layout
