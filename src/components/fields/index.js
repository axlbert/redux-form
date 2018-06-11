import React from 'react';
import cx from 'classnames';
//import ReactJson from 'react-json-view';

export const customInput = props => {
	const {label, input, type, meta } = props;
	return (
	<div
		className={cx(
			'custom-input-container',
			{'flex-row-reverse' : type === 'checkbox'},
			{ dirty : meta.dirty })}
		>
		
		<input {...input} type={type}/>
		<label>{label}</label>
		{(meta.error && meta.touched) && (
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