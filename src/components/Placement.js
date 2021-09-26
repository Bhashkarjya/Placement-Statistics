import React, { useState } from 'react';
import {data} from "../constants/placement_2020";
import BtechChart from './BtechChart';
import '../css/table.css'
function Placements()
{
    return (
        <div class="wrapper">
            <table>
                <caption>Statement Summary</caption>
                <thead>
                    <tr>
                        <th scope="col">Course</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.courses.map((item,i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <table>
                                <thead>
                                    <th>Branch</th>
                                    <th>Total Students</th>
                                    <th>Total Students Placed</th>
                                    <th>Average CTC</th>
                                    <th>Maximum CTC</th>
                                </thead>
                                <tbody>
                                    {item.branch.map((new_item,j) => (
                                        <tr scope="row" key={j}>
                                            <td>{new_item.branch_name}</td>
                                            <td>{new_item.total_students}</td>
                                            <td>{new_item.placed}</td>
                                            <td>{new_item.avg_CTC}</td>
                                            <td>{new_item.maximum_CTC}</td>
                                        </tr>
                                    ))}        
                                </tbody>
                            </table>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Placement Graphs</h2>
            <div className="row">
                <div class="col-md-6 col-sm-6 col-xs-6"><BtechChart/></div>
                <div class="col-md-6 col-sm-6 col-xs-6"><BtechChart/></div>
            </div>
            {/* <BarChart/> */}
        </div>
    )
}
export default Placements;