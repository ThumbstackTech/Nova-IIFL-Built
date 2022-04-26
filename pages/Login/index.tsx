import Head from "next/head";
import axios from "axios";
import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import StepForm from "../../component/Login/stepForm";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <StepForm handleClose={undefined} setShow={undefined} />
    </>
  );
};
export default Home;
