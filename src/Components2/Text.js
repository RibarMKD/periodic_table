import React from 'react';

const Text = (props) => {
    return(
        <div className='Text'>
            <button className='btnText float-right'>...</button>
            <p className='textText'>{props.text}</p>
            <p className='textPDF float-right'>Element Details - PDF</p>
        </div>
    )
}
export default Text;