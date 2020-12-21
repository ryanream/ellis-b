import React from 'react';

import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		// <Router>
		<div className='nav-container'>
			<div className='navbar'>
				<div>
					<FadeIn transitionDuration={800}>
						<details>
							<summary className='nav-link'>Navigation</summary>
							<ul className='drop-menu'>
								<li>
									<Link to='/contact' id='link'>
										Contact
									</Link>
								</li>
								<li>
									<Link to='/' id='link'>
										Home
									</Link>
								</li>
							</ul>
						</details>
					</FadeIn>
				</div>
				<div>
					<FadeIn transitionDuration={800}>
						<div className='nav-menu'>
							<a
								className='nav-link'
								href='https://www.youtube.com/channel/UCPC0lU5-hpahh0splLXwTGA/featured'
								target='_blank'
								rel='noopener noreferrer nofollow'
							>
								YouTube
							</a>{' '}
							<a
								href='https://www.education.com/'
								target='__blank'
								rel='noopener noreferrer nofollow'
								className='nav-link'
							>
								Education.com
							</a>
						</div>
					</FadeIn>
				</div>
			</div>
			<div className='nav-border'></div>
		</div>
		// </Router>
	);
};

export default Navbar;
