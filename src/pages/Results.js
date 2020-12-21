import React from 'react';

const Results = () => {
	return (
		<div className='body-container forms'>
			<div className='results-container'>
				<div>Are these the results you're looking for?</div>
				{/* back button */}
				<a
					href='/contact'
					style={{ textDecoration: 'none', float: 'right', margin: '5px' }}
				>
					<div
						style={{
							height: '40px',
							width: '150px',
							color: 'white',
							fontFamily: 'inherit',
							fontSize: '20px',
							border: '2px solid white',
							borderRadius: '5px',
							textAlign: 'center',
							padding: '5px',
						}}
					>
						back
					</div>
				</a>
			</div>
		</div>
	);
};

export default Results;
