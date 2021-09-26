import React from 'react';
import '../css/trial.css'
function Specialization()
{
    return (
        <div class="wrapper">
            <table class="responstable">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Placement Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>B.Tech</td>
                        <td>85.5%</td>
                    </tr>
                    <tr>
                        <td>M.Tech</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>MCA</td>
                        <td>30%</td>
                    </tr>
                    <tr>
                        <td>MBA</td>
                        <td>45%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Specialization;