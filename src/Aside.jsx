import React from 'react';



import part1 from './part1.png';
import part2 from './part2.png';
import part3 from './part3.png';
import { FaPlusSquare, FaShoppingBag, FaTaxi, FaNeos, FaPen } from 'react-icons/fa';




const data = [
    { name: <FaTaxi color='#FF0000' />, item: 'Taxi', amount: "-$9.20 " },
    { name: <FaShoppingBag color='#FF0000' />, item: 'Shopping', amount: "-$142.00" },
    { name: <FaNeos color='#FF0000' />, item: 'Netflix', amount: "-$24.99" }
];


    

function Aside() {

    return (
        <div className='main-aside'>
            <div className='aside'>

                <div className='ab'>
                    <FaPen color='#C4BDD5' />
                </div>
                <div className='aside-inner'>

                    <div className="ellipse1" id="ellipse"><div class="ball"></div></div>
                    <div className="ellipse2" id="ellipse">
                    </div>
                    <div className="ellipse3" id="ellipse"></div>

                </div>
                <p>My Card</p>
            </div>

            <img src={part1} alt='part of an atm card' id='part1' />
            <img src={part2} alt='part of an atm card' id='part2' />
            <img src={part3} alt='part of an atm card' id='part3' />


            <div className='part4'>
                <FaPlusSquare size={30} color='#FF392B' className='sq' />
                <h4> Transactions</h4>
            </div>

            <div>
                <table>

                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                {Object.values(item).map((value, idx) => (
                                    <td key={idx}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='t1'>
                    <p> 01:21PM</p>
                </div>

                <div className='t2'>
                    <p>11:15AM</p>
                </div>

                <div className='t3'>
                    <p>Jan 10,2020</p>
                </div>

            </div>
        </div>

    );
}



export default Aside
