import Head from 'next/head';
import axios from 'axios';
import Devdocs from '../../component/DevDocs/Home/Home';
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
				<Devdocs data={data} />
		</>
	);
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const data = await axios({
		url: 'https://nova-mysql.herokuapp.com/api/overview-page',
		responseType: 'json',
	});


	return {
		props: {
			data: data.data,
		},
	};
};
