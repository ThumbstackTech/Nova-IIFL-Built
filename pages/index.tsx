import Head from 'next/head';
import axios from 'axios';
import HomeComponent from '../component/Root/HomeComponent/HomeComponent';
import {
	NextPage,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next';

const Home: NextPage = ({data}: InferGetServerSidePropsType<
	typeof getServerSideProps
>) => {
	return (
		<>
			<Head>
				<title>Nova IIFL</title>
			</Head>
				<HomeComponent data={data} />
		</>
	);
};
export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { res } = context;
	res.statusCode = 500;

	const data = await axios({
		url: 'https://nova-mysql.herokuapp.com/api/home-page',
		responseType: 'json',
	});
	
	if (!data) {
		return {
		  notFound: true,
		  redirect: {
			destination: "/",
			permanent: 500,
		  },
		}
	  }

	return {
		props: {
			data: data.data,
		},
	};
};
