import React from 'react';
import Chart from 'react-google-charts';
function MtechChart()
{
    return (
        <Chart
            width={700}
            height={525}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={
                [
                    ['Branch', '2019 Placements', '2020 Placements'],
                    ['M.Tech Civil', 95, 97],
                    ['ECE', 90, 92],
                    ['EEE', 85, 90],
                    ['Mechanical', 80, 90],
                    ['Civil', 82, 87],
                    ['Chemical', 75, 93],
                    ['Metallurgy', 78, 81],
                    ['BioTech', 75, 73],
                ]
            }
            options={{
                title: 'Placement Statistics of M.Tech for Last Two Years',
                chartArea: { width: '50%' },
                hAxis: {
                  title: 'Branch',
                  minValue: 0,
                },
                vAxis: {
                  title: 'Percentage of Placed Students',
                },
              }}
              legendToggle
        />
    );
}

export default MtechChart;