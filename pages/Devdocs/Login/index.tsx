import Head from 'next/head';
import Login from '../../../component/DevDocs/Login/Login';
import axios from 'axios';


import {
	NextPage,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next';

const Index: NextPage = ({data}: InferGetServerSidePropsType<
	typeof getServerSideProps
>) => {
	return (
		<>
				<Login data={data}/>
		</>
	);
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const data = await axios({
		url: 'https://nova-mysql.herokuapp.com/api/api-pages/1',
		responseType: 'json',
		
	});

	if (!data) {
		return {
		  notFound: true,
		}
	  }

	return {
		props: {
			data: data.data,
		},
	};
};
