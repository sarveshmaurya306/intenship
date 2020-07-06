import React from 'react'
import LiveSession from './LiveSession'
export default function Live(props){
	return(<>
		<div className="container" style={{marginTop:"15vh",marginBottom:"10vh",zIndex:2}}>
    <div className="row">
      <LiveSession link="xyz" topic="front end" date="12/02/2020" time="12:10 pm"/>
      <LiveSession link="xyz" topic="front end" date="12/02/2020" time="12:10 pm"/>
      <LiveSession link="xyz" topic="front end" date="12/02/2020" time="12:10 pm"/>
    </div>
  </div>
	</>)
}

