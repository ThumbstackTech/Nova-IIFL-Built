import Head from 'next/head';
import Cart from '../../component/Root/CartComponent/CartComponent';
import {
	NextPage,
	GetServerSideProps,
	InferGetServerSidePropsType,
} from 'next';

const Index: NextPage = ({}: InferGetServerSidePropsType<
	typeof getServerSideProps
>) => {
	return (
		<>
				<Cart />
		</>
	);
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
	console.log(context.query);

	return {
		props: {},
	};
};
