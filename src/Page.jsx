import Breadcrumbs from './Breadcrumbs';
const Page = () => {
	return (
		<div style={{ padding: 20 }}>
			<h1>Breadcrumbs</h1>
			<Breadcrumbs
				routes={[
					{ name: 'Pages', path: '/pages' },
					{ name: 'Item page', path: '/pages/1' },
					{ name: 'Item page', path: '/pages/1' },
				]}
			/>
		</div>
	);
};
export default Page;
