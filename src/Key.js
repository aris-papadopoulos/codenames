import React from 'react';
import './key.scss';

const Key = (props) => {
    return (
        <div className="key">
            <div className="key__outer">
                <div className="key__inner">
                    {(props.data) ?
                        props.data.map((el, i) => {
                            let classValue;
                            if      (el === 1) { classValue = 'blue' }
                            else if (el === 2) { classValue = 'red' }
                            else if (el === 3) { classValue = 'neutral' }
                            else if (el === 4) { classValue = 'executor' }
                        return <span key={i} className={`key-element ${classValue}`}></span>
                    })
                    : null}
                        <span className={`indicator ${props.initiator} top`}></span>
                        <span className={`indicator ${props.initiator} bottom`}></span>
                        <span className={`indicator ${props.initiator} left`}></span>
                        <span className={`indicator ${props.initiator} right`}></span>
                </div>
            </div>
        </div>
    );
}

export default Key;
