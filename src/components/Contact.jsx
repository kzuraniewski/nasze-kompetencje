import React from 'react';

export default function Contact() {
	return (
		<div className='Contact'>
			<form className='Contact__form'>
				<div className='Contact__fields-wrapper'>
					<input
						className='Contact__input'
						id='name'
						name='name'
						type='text'
						placeholder='Imię i nazwisko'
					/>

					<input
						className='Contact__input'
						id='phone'
						name='phone'
						type='phone'
						placeholder='Telefon'
					/>

					<input
						className='Contact__input'
						id='email'
						name='email'
						type='text'
						placeholder='E-mail'
					/>

					<input
						className='Contact__input'
						id='company'
						name='company'
						type='text'
						placeholder='Firma'
					/>

					<select className='Contact__input' name='workers' id='workers'>
						<option value='' disabled selected hidden>
							Ilość pracowników
						</option>
						<option value='small'>Opcja 1</option>
						<option value='medium'>Opcja 2</option>
						<option value='large'>Opcja 3</option>
					</select>

					<select className='Contact__input' name='income' id='income'>
						<option value='' disabled selected hidden>
							Roczny dochód firmy
						</option>
						<option value='small'>Opcja 1</option>
						<option value='medium'>Opcja 2</option>
						<option value='large'>Opcja 3</option>
					</select>

					<textarea
						className='Contact__textare'
						name='message'
						id='message'
						cols={30}
						rows={5}
					></textarea>
				</div>

				<input
					className='Contect__checkbox'
					type='checkbox'
					name='agreement'
					id='agreement'
				/>
				<label htmlFor='agreement'>
					Zapozanałem(-łam) się z
					<a className='link' href="#">Polityką prywatności</a>
					oraz z
					<a className='link' href="#">Zastrzeżeniami prawnymi</a>.
				</label>
			</form>
		</div>
	);
}
