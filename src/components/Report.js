import React from 'react';
import '../css/trial.css'
function Report()
{
    return (
        <div class="wrapper">
            <table class="responstable">
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Placement Statistics</td>
                        <td>85.5%</td>
                    </tr>
                    <tr>
                        <td>No Of Recruiters</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>Highest CTC</td>
                        <td>54 Lakhs</td>
                    </tr>
                    <tr>
                        <td>Average CTC</td>
                        <td>20 Lakhs</td>
                    </tr>
                    <tr>
                        <td>Job Profiles Offered</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>Top Sector</td>
                        <td>Information Technology</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Report;