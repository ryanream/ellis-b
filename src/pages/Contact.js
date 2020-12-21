import React, { useState } from 'react';

const Contact = () => {
	const [input, setInput] = useState('');
	const [label, setLabel] = useState('Your Name Here: ');
	const [alrt, setAlrt] = useState('Thanks, ');
	const [inputField, setInputField] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here is where we'll store or use this data.
		// What will we do with it?
		alert(alrt + input + '!');
		setInput('');
		setLabel('Message: ');
		if (alrt === '') {
			setInput('');
			setLabel(`Thank you for your message.`);
			setInputField(false);
		} else {
			setAlrt((alrt) => '');
		}
	};

	return (
		<div className='body-container forms'>
			<form onSubmit={handleSubmit}>
				<label>{label}</label>
				{(() => {
					switch (inputField) {
						case true:
							return (
								<input
									type='text'
									value={input}
									required
									onChange={(e) => setInput(e.target.value)}
								/>
							);

						default:
							return;
					}
				})()}
			</form>
		</div>
	);
};

export default Contact;
