import React from "react";

function ModalImage({image}) {
	
  return <div style={{'max-width':'400px'}}>
	<img src={image.url} alt="" />
  </div>;
}

export default ModalImage;
