import Head from 'next/head';
import Apikits from '../../component/Apikits/ApiKitsComponent/ApiKitComponent';
import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';
import axios from 'axios';
const Index: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Apikits data={data} />
    </>
  );
};
export default Index;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log(context.query);

//   return {
//     props: {},
//   };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const data = await axios({
    url: 'https://nova-mysql.herokuapp.com/api/all-kit-page',
    responseType: 'json',
  });

  return {
    props: {
      data: data.data,
    },
  };
};
