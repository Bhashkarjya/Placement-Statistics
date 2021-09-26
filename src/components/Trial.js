import React from 'react';
import {data} from "../constants/placement_2020";
import BtechChart from './BtechChart';
import MtechChart from './MtechChart';
import Report from './Report';
import Specialization from './Specialization';
import '../css/trial.css'
function Trial()
{
    return (
        <div class="row">
            <div class="text-center"><h1> NIT Warangal Placement Statistics 2020-21</h1></div>
            <div class="col-md-12 col-sm-12 col-xs-12">
                <table class="responstable">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th class="text-center">Details</th>
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
                                            <tr key={j}>
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
            </div>
            <div class="text-center"><h1>Graphical Representation</h1></div>
            <div class="row">
                <div class="col-md-4 col-sm-4 col-xs-4"><BtechChart/></div>
                <div class="col-md-2 col-sm-2 col-xs-2"></div>
                <div class="col-md-4 col-sm-4 col-xs-4"><MtechChart/></div>
            </div>
            <div class="text-center"><h1> NIT Warangal Placement Summary</h1></div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12"><Report /></div>
            </div>
            <div class="text-center"><h1> NIT Warangal Placement Specialization-Wise</h1></div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12"><Specialization/></div>
            </div>
        </div>
    )
}
export default Trial;