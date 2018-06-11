import React from 'react';
import cx from 'classnames';
//import ReactJson from 'react-json-view';

export const customInput = props => {
	const {label, input, type, meta } = props;

	const getValidityClassname = meta => {
		if (meta.active) {
			return;
		}
		if (meta.touched && meta.invalid) {
			return 'invalid';
		}
		if (meta.touched && meta.valid) {
			return 'valid';
		}
	}

	return (
	<div
		className={cx(
			'custom-input-container',
			{'flex-row-reverse' : type === 'checkbox'},
			{ dirty : meta.dirty },
			getValidityClassname(meta)

			)}
		>

		
		<input {...input} type={type}/>
		<label>{label}</label>
		{meta.error &&
			 meta.touched &&
			 !meta.active && 
			  (
				<div className="feedback-text error-text">{meta.error}</div>
				)}
		{/*<ReactJson src={props.meta}/>*/}
	</div>
				
	)

}

export const customSelect = props => {
	return (
	<div>
		<label>{props.label}</label>
		<select {...props.input}>
			<option value="tabs">Tabs</option>
			<option value="spaces">Spaces</option>
		</select>
		{/*<ReactJson src={props}/>*/}
	</div>
	)
}