import React from 'react';
import DescriptionOptions from './DescriptionOptions';
import './_description.css';

const Description  = ({isShownOptions}) => (
            <div className="description">
                <span className="description__title">title</span>
                {isShownOptions && <DescriptionOptions/>}
            </div>
        );
 export default Description;