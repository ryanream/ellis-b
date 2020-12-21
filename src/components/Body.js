import React from 'react';
import panther from '../assets/panther-crawl.JPG';

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
			<section className='section-container' id='flex-row'>
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
				<div className='section-title vertical-title title-right bg-gradient-orange-top'></div>
			</section>

			{/* Section 4 */}
			<section className='section-container'>
				<div className='section-title square-title bg-gradient-orange-top'></div>
				<div className='content-bubble bubble-top-left'></div>
			</section>

			{/* <div className='box'>Box 1</div>
			<div className='box'>Box 2</div>
			<div className='box'>Box 3</div>
			<div className='box'>Box 4</div>
			<div className='box'>Box 5</div>
			<div className='box'>Box 6</div>
			<div className='box'>Box 7</div>
			<div className='box'>Box 8</div>
			<div className='box'>Box 9</div>
			<div className='box'>Box 10</div>
			<div className='box'>Box 11</div>
			<div className='box'>Box 12</div>
			<div className='box'>Box 1b</div>
			<div className='box'>Box 2b</div>
			<div className='box'>Box 3b</div>
			<div className='box'>Box 4b</div>
			<div className='box'>Box 5b</div>
			<div className='box'>Box 6b</div>
			<div className='box'>Box 7b</div>
			<div className='box'>Box 8b</div>
			<div className='box'>Box 9b</div>
			<div className='box'>Box 10b</div>
			<div className='box'>Box 11b</div>
			<div className='box'>Box 12b</div> */}
		</div>
	);
};

export default Body;
