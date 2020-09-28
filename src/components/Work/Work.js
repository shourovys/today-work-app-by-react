import React, { useState } from 'react';
import './Work.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { Container, Row, Col } from 'react-bootstrap';

const Work = () => {
    const [done, setDone] = useState(true)
    const [cancel, setCancel] = useState(false)

    const handelDone = (e) => {
        setDone(!done)
        const element = e.target.parentNode.parentNode.parentNode.firstChild

        done ? element.className += ' itDone ' : element.classList.remove('itDone');
        console.log(element);
    }
    const handelCancel = (e) => {
        setCancel(true)
        const element = e.target.parentNode.parentNode.parentNode.style.display = 'none'
    }
    return (
        <ul>
            <div>
                <div className='work'>

                    <li>Learn digital marketing</li>
                    <div className="icon">
                        <CheckCircleIcon
                            onClick={handelDone}
                            className='CheckCircleIcon'
                        />
                        <CancelIcon
                            onClick={handelCancel}
                            className='CancelIcon '
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className='work'>
                    <li>Learn digital marketing and learn how to learn</li>
                    <div className="icon">
                        <CheckCircleIcon
                            onClick={handelDone}
                            className='CheckCircleIcon'
                        />

                        <CancelIcon
                            onClick={handelCancel}
                            className='CancelIcon '
                        />
                    </div>
                </div>
            </div>





        </ul>
    );
};

export default Work;