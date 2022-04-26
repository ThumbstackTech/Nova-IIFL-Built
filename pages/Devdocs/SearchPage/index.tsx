import Search from '../../../component/DevDocs/SearchPage/SearchPage';
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
				<Search />
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
