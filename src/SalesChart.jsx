import React, { useState } from 'react'
import { LineChart, Line, XAxis, Tooltip, } from 'recharts';
import { FaPlayCircle, FaClock, FaStar, FaGreaterThan } from 'react-icons/fa';
import AccountSquareIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';

const data = [
    { name: 'Sun', uv: 2000 },
    { name: 'Mon', uv: 1500 },
    { name: 'Tue', uv: 3000 },
    { name: 'Wed', uv: 2500 },
    { name: 'Thur', uv: 4000 },
    { name: 'Fri', uv: 3800 },
    { name: 'Sat', uv: 4500 }
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ color: '#FFF', backgroundColor: '#FF392B', padding: '4px' }}>
                {payload[0].value}
            </div>
        );
    }
    return null;
};

function SalesChart() {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1999 }, (_, index) => 2000 + index);

    // State to manage the selected year
    const [selectedYear, setSelectedYear] = useState(null);

    // Handle change when a year is selected from the dropdown
    const handleYearChange = (e) => {
        const year = parseInt(e.target.value);
        setSelectedYear(year);
        // You can perform further actions based on the selected year
        console.log('Selected year:', year);
    };




    return (
        <div className='body'>
            <div className='graph'>
                <div className='sec-graph'>Statistics</div>
                <div>
                    <label htmlFor="yearDropdown"></label>
                    <select id="yearDropdown" onChange={handleYearChange} value={selectedYear || ''}>
                        <option value="">Year</option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                    {selectedYear && <p>{selectedYear}</p>}
                </div>

                <div className='thegraph'>


                    <p>5k</p>
                    <p>2k</p>
                    <p>1k</p>
                    <p>0</p>

                        <div className='rectangle1'></div>
                        <div className='rectangle2'></div>
                        <div className='rectangle4'></div>
                        <div className='rectangle5'></div>
                        <div className='rectangle6'></div>
                        <div className='rectangle8'></div>
                        <div className='rectangle9'></div>
                        <div className='rectangle10'></div>
                        <div className='rectangle11'></div>
                        <div className='rectangle12'></div>
                        <div className='rectangle13'></div>
                        <div className='rectangle14'></div>
                        <div className='rectangle15'></div>
                        <div className='rectangle16'></div>
                        <div className='rectangle17'></div>
                        <div className='rectangle18'></div>
                        <div className='rectangle19'></div>
                        <div className='rectangle20'></div>






                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                        <div className='line4'></div>
                        <div className='line5'></div>
                        <div className='line6'></div>
                        <div className='line7'></div>
                        <div className='line8'></div>
                        <div className='line10'></div>
                        <div className='line12'></div>
                        <div className='line13'></div>
                        <div className='line14'></div>
                        <div className='line15'></div>
                        <div className='line16'></div>
                        <div className='line17'></div>
                        <div className='line18'></div>
                        <div className='line19'></div>
                        <div className='line20'></div>
                    </div>
                    <div className='months'>
                        <div className='A'>Nov</div>
                        <div className='B'>Dec</div>
                        <div className='C'>Jan</div>
                        <div className='D'>Feb</div>
                        <div className='E'>Mar</div>
                        <div className='F'>Apr</div>
                        <div className='G'>May</div>
                        <div className='H'>Jun</div>
                   
                </div>

            </div>

            <div className='card1'>

                <div className='gcard1'>
                    <div className='time'>Spent time</div>
                    <LineChart
                        width={400}
                        height={200}
                        justify-content={'center'}
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >

                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#C4BDD5' }} justify-content={'center'} />

                        <Tooltip content={<CustomTooltip />} />

                        <Line type="monotoneX" dot={false} activeDot={{ r: 3, fill: '#FF392B', stroke: 'none' }} dataKey="uv" stroke="#FF392B" />

                    </LineChart>
                </div>
            </div>

            <div className='gcard-2'>
                <div className='gcard2'>
                    <IconButton >
                        <AccountSquareIcon color='#C4BDD5' />
                    </IconButton>
                    <div className='gcard-inner'>
                        <h3>Lily Donovan</h3>
                        <p>Business trainer</p>
                    </div>

                    <p>How to properly manage your personal budget?</p>

                    <div className='con1'>
                        <FaPlayCircle size={20} color='#3326AE' />
                        <p > Video</p>
                    </div>

                    <div className='con2'>
                        <FaClock size={20} color='#00C3F8' />
                        <p > 15mins </p>
                    </div>

                    <div className='con3'>
                        <FaStar size={20} color='#FF392B' />
                        <p >12likes</p>
                    </div>

                    <div className='da'>
                        <p>5 days ago</p>
                    </div>

                    <button className='btn1'>
                        Connect   <FaGreaterThan size={10} style={{ marginLeft: '5px' }} />
                    </button>
                </div>
            </div>

        </div>



    );
};


export default SalesChart
