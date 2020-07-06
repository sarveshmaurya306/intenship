import React from 'react'
var count = 0;
export default function LiveSession(props) {
	count++;
	return (
		<>
			<div className="col-12 col-sm-6 col-md-4">
				<h2 className="h2 text-center" style={{ border: "1px dotted black", padding: 5 }}>section-{count}</h2>
				<div>
					<h4 className="h4">Topic:</h4>{props.topic}<br/><br/>
					<h4>Date:</h4> {props.date}<br/><br/>
					<h4>Time:</h4> {props.time}<br/><br/>
					<h4>Link:</h4><a href={props.link}>click Here</a>
				</div>
				<hr/>
			</div>

		</>
	)
}