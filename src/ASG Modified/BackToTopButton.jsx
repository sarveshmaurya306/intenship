import React from 'react'
export default function BackToTopButton(params) {
	function scrollUp(){
		window.scrollTo(0,0)
	}
	return(<>
			<div className="button_hover_reverse" style={{position:'fixed',bottom:"5%",right:"5%",padding:15,borderRadius:"80px",zIndex:10}} onClick={scrollUp}>
				<i className="fa fa-angle-up" onClick={scrollUp}></i>
			</div>
	</>)
};
