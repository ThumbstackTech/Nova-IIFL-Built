import styles from './Root.module.scss';
import cx from 'classnames';
import { useRouter } from 'next/router';
import SignUpComponent from '../SignUpComponent/SignUpComponent';
import { useEffect } from 'react';
interface Props {
	children?: JSX.Element;
}

export default function Root(props: Props) {
	const { children } = props;
	const router = useRouter();
	const { signUp } = router.query;
	console.log(router);
	
	useEffect(() => {
		signUp === '1'
			? document
					.getElementsByTagName('body')[0]
					.classList.add(cx(styles.modalOpen))
			: document
					.getElementsByTagName('body')[0]
					.classList.remove(cx(styles.modalOpen));
	}, [signUp]);

	return (
		<>
				<div className={cx(styles.body)}>{children}</div>

			{signUp === '1' && <SignUpComponent />}
		</>
	);
}
