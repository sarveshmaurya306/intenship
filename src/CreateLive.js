import React from 'react'
export default function CreateLive(params) {
	const [Value,setValue]=React.useState({topic:'',date:"",time:"",link:""})
	function onChange(props){
		var name=props.target.name;
		var value=props.target.value;
		console.log(name+","+value)
		setValue({...Value,[name]:value})
	}
	function save(event){
		event.preventDefault();
		console.log(Value.topic)
		console.log(Value.link)
		console.log(Value.time)
		console.log(Value.date)
	}
	return (
		<div className="container">
		<br/><br/><br/>
			<form onSubmit={save}>
			<div className="row">
				<div className="col-12 col-sm-6">
					<label>Topic: </label><input type="text" id="topic" className="form-control" 
					onChange={onChange} name="topic"/>
					<br />
					<label>Date: </label><input type="date" className="form-control" onChange={onChange} name="data"/><br />
				</div>
				<div className="col-12 col-sm-6">

					<label>Time: </label><input type="time" className="form-control" onChange={onChange} name="time"/>
					<br />
					<label>Link: </label><input type="text" className="form-control" onChange={onChange} name="link"/>
					<br />
				</div>
			</div>
			<button className="btn btn-outline-primary">Save</button>
			</form>
			<br/><br/><br/>
		</div>
	)
};

console.log(Value.topic)