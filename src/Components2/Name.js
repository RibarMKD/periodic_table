import React from 'react';

const Name = (props) => {
    return(
        <div className='Name'>
            <div className="d-flex">
            <div className='square'>
                <p>
                    {props.number}  
                </p>
                <p className='fontForSquare'>
                    {props.symbol}
                </p>
                <p>
                    {props.atomic_mass}
                </p>
            </div>

            <div className='wraperImage'>
                <img className="imgName" src='/img/dot.png'/>
                <p className="nameOfElement">{props.name}</p>
            </div>
            </div>


            <div className='d-flex'> 
                    <ul className='unordered ulList'>
                        <li className='colodwhite'>
                            {props.info[0][0]}
                        </li>
                        <li className='colodwhite'>
                            {props.info[1][0]}
                        </li>
                        <li className='colodwhite'>
                            {props.info[2][0]}
                        </li>
                        <li className='colodwhite'>
                            {props.info[3][0]}
                        </li>
                    </ul>

                    <ul className="ulList">
                        <li className='colodwhite'>
                            {props.info[0][1]}
                        </li>
                        <li className='colodwhite'>
                            {props.info[1][1]}
                        </li>
                        <li className='colodwhite'>
                            {props.info[2][1]}
                        </li>
                        <li className='colodwhite'>
                            {props.info[3][1]}
                        </li>
                    </ul>
            </div>
        </div>
    )
}
export default Name;