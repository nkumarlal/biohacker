import React from "react";
import { Grid } from 'gridjs-react';
import mermaid from '../../node_modules/gridjs/dist/theme/mermaid.min.css'

class Endpoints extends React.Component {
    state = {
        endpoint: "",
    }
    // Function triggered when the form is submitted
    onNext = (event) => {
        // Call the parent callback function
        this.props.endpointCallback(this.state);
        event.preventDefault();
    }

    render () {
        const options = ['EASI-75', 'IGA', 'PASI90', 'Trough FEV1', 'ACR50'];
        const onEndpointChangeHandler = (event) => {
            if(event.target.value === "Select endpoint")
            {
                this.setState({endpoint: ""});
            }
            else {
                this.setState({endpoint: event.target.value});
            }
            console.log("User Selected endpoint - ", event.target.value)
        }
        return <div style={{float:"left"}}>
            <h3>Select endpoint to compare</h3>
            <div className="row">
                <div className="col-md-6">
                    <select className="form-control" onChange={onEndpointChangeHandler}>
                        <option>Select endpoint</option>
                        {options.map((option, index) => {
                            return <option key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <Grid
                            data={[
                                ['Patients Achieving and IGA score of 0 (clear) or 1 (almost clear)', '4%', '28%'],
                                ['Patients Achieving 75% or Greater Overall Disease Improvement from', '11%', '53%'],
                                ['Average Improvement From Baseline in EASI', '20%', '70%'],
                                ['Average Improvement From Baseline in Itch', '20%', '70%'],
                            ]}
                            columns={['Treatment Description', 'Placebo', 'Dupixent']}
                            search={true}
                            pagination={{
                                limit: 2,
                            }}
                            />
                    </div>
                    <div className="col-md-8">
                        <Grid
                            data={[
                                ['Patients with Clear or Almost Clear Skin (IGA) at 16 week (Endpoint=Primary)', '13%', '43%', '11%', '33%'],
                                ['Patients Achieved EASI-75 Response at 16 Weeks (Endpoint=Primary)', '13%', '43%', '11%', '33%'],
                            ]}
                            columns={['Treatment Description', 'Placebo (ADvocate 1)', 'Lebrikizumab (ADvocate 1)', 'Placebo (ADvocate 2)', 'Lebrikizumab (ADvocate 2)']}
                            search={true}
                            pagination={{
                                limit: 2,
                            }}
                            />
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <button disabled={this.state.endpoint.length === 0 } 
                            onClick={this.onNext} className="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </div>
    };
  }
  
  export default Endpoints;