import React from "react";
import { Grid } from 'gridjs-react';
import mermaid from '../../node_modules/gridjs/dist/theme/mermaid.min.css'
import { Bar } from "react-chartjs-2";
import BarChart from "./BarChart";
import { ChartData } from "../Data";

class DrugResults extends React.Component {
    state = {
        endpoint: "",
    }

    render () {
        const chartData = {
            labels: ChartData.map((data) => data.treatment),
            datasets: [
              {
                label: "Relative",
                data: ChartData.map((data) => data.percDiff),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#f3ba2f",
                  "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
              },
            ],
          };
        return <div>
            <h3>Drug comparison result</h3>
            <div className="row">
                <div className="col-md-7">
                    <Grid
                        data={[
                            ['Phase II/III - Liberty AD PRESCHOOL (Age > 6 Mon. to < 6 Years)', 
                                'Patients Achieving 75% or Greater Overall Disease Improvement From', 
                                'Placebo', '11%', 'Dupixent', '53%', '42%'],
                            ['Phase III - ADvocate 1, Phase III - ADvocate 2', 
                                'Patients Achieved EASI-75 Response at Week 16', 
                                'Placebo (ADvocate 1)', '16%', 'Lebrikizumab (ADvocate 1)', '59%', '43%'],
                            ['Phase III - ADvocate 1, Phase III - ADvocate 2', 
                                'Patients Achieved EASI-75 Response at Week 16', 
                                'Placebo (ADvocate 2)', '18%', 'Lebrikizumab (ADvocate 2)', '51%', '33%'],
                        ]}
                        columns={['Trials', 'Endpoint', 'Placebo', 'P', 'Treatment', 'T', 'Relative']}
                        search={true}
                        pagination={{
                            limit: 3,
                        }}
                        />
                </div>
                <div className="col-md-5">
                    <BarChart chartData={chartData} />
                </div>
            </div>
            <br/>
        </div>
    };
  }
  
  export default DrugResults;