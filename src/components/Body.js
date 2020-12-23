import React from 'react';
import panther from '../assets/panther-crawl.JPG';
import panther2 from '../assets/panther-growl.JPG';
import workin from '../assets/workin-man.jpg';
import chair from '../assets/chair-lovies.jpg';

const Body = () => {
	return (
		<div className='body-container'>
			{/* Section 1 */}
			<section className='body-intro'>
				Super Ellis toooooo the RESCUE!!!.
			</section>
			<section className='section-container'>
				<div className='section-title horizontal-title bg-gradient-orange-right'>
					Super Ellis!
				</div>
				<div className='content-bubble bubble-left'>
					<img className='superPic' src={panther} alt='panther'></img>
				</div>
			</section>

			{/* Section 2 */}
			<section className='section-container'>
				<div className='section-title horizontal-title bg-gradient-orange-right'>
					Surfin' CA
				</div>
				<div className='content-bubble bubble-left'>
					<iframe
						width='100%'
						height='100%'
						src='https://www.youtube.com/embed/Kk2iLMOKnPQ'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen='allowfullscreen'
						title='Ellis-B Tube'
					></iframe>
				</div>
			</section>

			{/* Section 3 */}
			<section
				className='section-container'
				id='flex-row'
				style={{ border: '2px solid pink' }}
			>
				<div className='section-title horizontal-title bg-gradient-orange-right'></div>
				<div className='content-container'>
					<div className='content-bubble bubble-right'>
						{' '}
						<iframe
							width='100%'
							height='100%'
							objectFit='contain'
							// style={{ width: '1343', height: '480' }}
							src='https://www.youtube.com/embed/I49VNQ6lmKk'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen='allowfullscreen'
							title='Barrack and Marquise'
						></iframe>
					</div>
				</div>
			</section>

			{/* //////////////////////// Section 4 /////////////////////////*/}
			<section
				className='section-container'
				style={{ border: '2px solid pink' }}
			>
				<div className='content-container'>
					<div className='content-bubble shape-portrait '>
						<img className='superPic' src={workin} alt='workin-man'></img>
					</div>
				</div>
				<div className='section-title square-title bg-gradient-orange-top' />
			</section>
			{/* //////////////////////// Section 4 /////////////////////////*/}
		</div>
	);
};

export default Body;
