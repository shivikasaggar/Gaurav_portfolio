import React from "react";
import  { useEffect, useState } from "react";


function Progress({ width, percent,tech }) {
    const [progress, setValue] = useState(0);

    useEffect(() => {
        setValue((percent * width)/10);
    }, [percent, width]);
    return (
        <div >
            <div>
                <h5>{tech}</h5>
            </div>
            <div className="progress-div">
                <div style={{ width: `${progress}px` }} className="percen" />
            </div>
        </div>	
		);	
    
}
export default Progress; 