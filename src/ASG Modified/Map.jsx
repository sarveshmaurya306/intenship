import React, {useState} from 'react'
import ReactMapGl from 'react-map-gl'

// read me 
// https://www.gps-coordinates.net/

//account.mapbox.com
//studio.mapbox.com
// mapbox token=pk.eyJ1Ijoic2FydmVzaG1hdXJ5YTMwNiIsImEiOiJjazlic2s0eWExM2F4M2dwbHMxbm1lYjFoIn0.feCfHiHqHCcgm5GnifnQjA

export default function Map(params) {

	const [viewport, setViewport]=useState({
		lattitude:28.6138954 ,
		logiture:77.2090057,
		zoom:10,
		width:"100vw",
		height:"100vh"
	})

	return(
		<div>
			<ReactMapGl {...viewport} mapboxApiAccessToken={"pk.eyJ1Ijoic2FydmVzaG1hdXJ5YTMwNiIsImEiOiJjazlic2s0eWExM2F4M2dwbHMxbm1lYjFoIn0.feCfHiHqHCcgm5GnifnQjA"}
			mapStyle="mapbox://styles/sarveshmaurya306/ckcdnjd7c04xb1ip5gtnadxlc"
			onViewStateChange={viewport=>{
				setViewport(viewport)
			}}
			
			>
			</ReactMapGl>
		</div>
	)
};
