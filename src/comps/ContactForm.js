import React, { useState, useEffect } from 'react'

const ContactForm = (props) => {

	const initialFieldName = {
		fullName: '',
		mobile: '',
		email: '',
		address: ''
	}
	var [values, setValues] = useState(initialFieldName)

	useEffect(()=>{
		if(props.currentId===''){
			setValues({
				...initialFieldName
			})
		}else{
			setValues({
				...props.contactObjects[props.currentId]
			})
		}
	},[props.currentId,props.contactObjects])
	const handleChange = e => {
		var { name, value } = e.target
		setValues({
			...values,
			[name]: value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		props.addOrEdit(values)
	}
	return (
		<form autoComplete="on" onSubmit={handleSubmit}>
			<div className='form-group input-group'>
				<div className="input-group-prepend">
					<div className="input-group-text">
						<i className="fas fa-user"></i>
					</div>
				</div>
				<input className='form-control' placeholder='FullName' name='fullName'
					value={values.fullName}
					onChange={handleChange}
				/>
			</div>

			<div className="form-row">
				<div className='form-group input-group col-md-6'>
					<div className="input-group-prepend">
						<div className="input-group-text">
							<i className="fas fa-mobile"></i>
						</div>
					</div>
					<input className='form-control' placeholder='Mobile' name='mobile'
						value={values.mobile}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group input-group col-md-6'>
					<div className="input-group-prepend">
						<div className="input-group-text">
							<i className="fas fa-envelope"></i>
						</div>
					</div>
					<input className='form-control' placeholder='Email' name='email'
						value={values.email}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group col-md-12">
					<textarea className="form-control" placeholder="Address" name='address'
						value={values.address}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="form-group">
				<input type="submit" value={props.currentId==''?'Save':'Upadate'} className="btn btn-primary btn-block" />
			</div>
		</form>
	)
}

export default ContactForm
