import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWordpress, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Social() {

    return (
        <div>
            <a href="https://www.linkedin.com/in/gaurav-maggoo/"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
       
            <a href="https://www.delicioustalks.wordprress.com"
                className="wordpress social">
                <FontAwesomeIcon icon={faWordpress} size="2x" />
         </a>
         <a href="mailto:go.gaurav.go@gmail.com"
             className="mail social">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
        </div>
    );
}
export default Social