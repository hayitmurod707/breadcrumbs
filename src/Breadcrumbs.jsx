import { array } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Right = () => (
	<svg width='7' height='10' viewBox='0 0 6 8' fill='none'>
		<path
			d='M4.88663 3.5268L2.05996 0.700129C1.99799 0.637643 1.92425 0.588047 1.84301 0.554201C1.76177 0.520355 1.67464 0.50293 1.58663 0.50293C1.49862 0.50293 1.41148 0.520355 1.33024 0.554201C1.249 0.588047 1.17527 0.637643 1.1133 0.700129C0.989128 0.825037 0.919434 0.994005 0.919434 1.17013C0.919434 1.34625 0.989128 1.51522 1.1133 1.64013L3.47329 4.00013L1.1133 6.36013C0.989128 6.48504 0.919434 6.65401 0.919434 6.83013C0.919434 7.00625 0.989128 7.17522 1.1133 7.30013C1.17559 7.36192 1.24947 7.4108 1.33069 7.44398C1.41192 7.47715 1.49889 7.49397 1.58663 7.49346C1.67437 7.49397 1.76134 7.47715 1.84257 7.44398C1.92379 7.4108 1.99767 7.36192 2.05996 7.30013L4.88663 4.47346C4.94911 4.41149 4.99871 4.33775 5.03256 4.25651C5.0664 4.17527 5.08383 4.08814 5.08383 4.00013C5.08383 3.91212 5.0664 3.82498 5.03256 3.74374C4.99871 3.6625 4.94911 3.58877 4.88663 3.5268Z'
			fill='#7f8a9e'
		/>
	</svg>
);
const StyledElement = styled.ul`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	font-size: 14px;
	font-weight: 500;
	list-style-type: none;
	padding: 0;
	word-break: break-all;
	& li {
		margin: 0 12px 0 0;
		&:last-child {
			margin: 0;
			& a {
				color: #7f8a9e;
			}
		}
		& svg {
			margin: 0 12px 0 0;
		}
		& a {
			color: #000000;
			text-decoration: none;
		}
	}
`;
const Component = ({ routes }) => {
	return (
		<StyledElement>
			<li>
				<Link to='/'>Home</Link>
			</li>
			{routes?.map(({ name, path }, index) => (
				<li key={index}>
					<Right />
					<Link to={path}>{name}</Link>
				</li>
			))}
		</StyledElement>
	);
};
Component.defaultProps = {
	routes: [],
};
Component.propTypes = { routes: array };
export default Component;
