import React from "react";
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsFillBellFill} from 'react-icons/bs'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Rectangle } from 'recharts';

function Home(){

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },{
            name: 'Page B',
            uv: 1050,
            pv: 3450,
            amt: 4100,
        },{
            name: 'Page C',
            uv: 4650,
            pv: 2950,
            amt: 2260,
        },{
            name: 'Page D',
            uv: 4050,
            pv: 2450,
            amt: 2100,
        },{
            name: 'Page E',
            uv: 4068,
            pv: 2750,
            amt: 2000,
        },{
            name: 'Page F',
            uv: 4450,
            pv: 6250,
            amt: 4150,
        },
        {
            name: 'Page G',
            uv: 1050,
            pv: 2850,
            amt: 2108,
        },
    ];
    return(
        <main className="main-container">
            <div className="main-title">
                <h3>DASHBOARD</h3>
            </div>

            <div className="main-cards">
               <div className="card">
                <div className="card-inner">
                        <h3>PRODUCTS</h3>
                        <BsFillArchiveFill className="card-icon"/>
                    </div>
                    <h1>300</h1>
               </div>

               <div className="card">
                <div className="card-inner">
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className="card-icon"/>
                    </div>
                    <h1>12</h1>
               </div>

               <div className="card">
                <div className="card-inner">
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className="card-icon"/>
                    </div>
                    <h1>12</h1>
               </div>
               <div className="card">
                <div className="card-inner">
                        <h3>ALERTS</h3>
                        <BsFillBellFill className="card-icon"/>
                    </div>
                    <h1>42</h1>
               </div>
            </div>
            <div className="charts">
           <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
           


            <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
            </div>
        </main>
    )
}

export default Home;