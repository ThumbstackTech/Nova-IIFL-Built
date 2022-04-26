import Head from 'next/head';
import axios from 'axios';
import {
	NextPage,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next';
import DemoComponent from '../../component/DemoComponent';

const Index: NextPage = ({data}: InferGetServerSidePropsType<
	typeof getServerSideProps
>) => {
	return (
		<>
				<DemoComponent data={data} />
		</>
	);
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const data = await axios({
		url: 'https://nova-mysql.herokuapp.com/api/api-pages/1',
		responseType: 'json',
	});


	return {
		props: {
			data: data.data,
		},
	};
};
