import React, { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import Store from "../Redux/Store";
import withRedux from "next-redux-wrapper";
import LoadingScreen from "../component/Root/ErrorHandler/Loading";
import Router from "next/router";
import Header from "../component/Root/HeadeComponent/Header";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import StepForm from "../component/Login/stepForm";
import { Button, Modal } from "react-bootstrap";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  let persistor = persistStore(Store);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // React.useEffect(() => {
  // 	setLoading(true);
  //   }, []);

  // Router.events.on('routeChangeStart', (url)=> {
  // 	console.log('router change');
  // 	setLoading(true);
  // })
  // Router.events.on('routeChangeComplete', (url)=> {
  // 	console.log('router complete');
  // 	setLoading(false);
  // })

  return (
    <>
      {!loading ? (
        <Provider store={Store}>
          <PersistGate persistor={persistor}>
            <React.Fragment>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                  crossOrigin="anonymous"
                />
              </Head>
              <Header handleShow={handleShow} />
              <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossOrigin="anonymous"
              />
              <Component {...pageProps} />
            </React.Fragment>
            <Modal show={show}>
              {/* <Modal.Header closeButton></Modal.Header> */}
              <Modal.Body>
                <StepForm handleClose={handleClose} setShow={setShow} />
              </Modal.Body>
            </Modal>
          </PersistGate>
        </Provider>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
const makeStore = () => Store;

export default withRedux(makeStore)(MyApp);
