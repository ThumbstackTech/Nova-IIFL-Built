import Head from "next/head";
import axios from "axios";
import TermsAndConditions from "../../component/TermsAndCondition/TermsAndConditions";
import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";

const Index: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <TermsAndConditions data={data} />
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await axios({
    url: "https://nova-mysql.herokuapp.com/api/tnc",
    responseType: "json",
  });

  return {
    props: {
      data: data.data,
    },
  };
};
