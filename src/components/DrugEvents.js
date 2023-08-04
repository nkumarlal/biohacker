import React from "react";
import { Grid } from 'gridjs-react';
import mermaid from '../../node_modules/gridjs/dist/theme/mermaid.min.css'

class DrugEvents extends React.Component {
    state = {
        events: "",
    }
    // Function triggered when the form is submitted
    onNext = (event) => {
        // Call the parent callback function
        this.props.eventsCallback(this.state);
        event.preventDefault();
    }

    render () {
        const options = ['Trial Data - Top-Line Results', 'Trial Data - Published Results', 'Trial Data - Updated Results '];
        const onEventChangeHandler = (event) => {
            if(event.target.value === "Select event")
            {
                this.setState({events: ""});
            }
            else {
                this.setState({events: event.target.value});
            }
            console.log("User Selected event - ", event.target.value)
        }
        return <div style={{float:"left"}}>
            <h3>Select drug events with trial data</h3>
            <div className="row">
                <div className="col-md-6">
                    <select className="form-control" onChange={onEventChangeHandler}>
                        <option>Select event</option>
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
                    <div className="col-md-6">
                        <Grid
                            data={[
                                ['Trial Data - Updated Results', '2021-12-13'],
                                ['Trial Data - Top-Line Results', '2021-08-30'],
                                ['Trial Data - Updated Results', '2021-02-28'],
                                ['Trial Data - Updated Results', '2020-04-03'],
                                ['Trial Data - Updated Results', '2020-04-03'],
                            ]}
                            columns={['Event Type', 'Event Date']}
                            search={true}
                            pagination={{
                                limit: 3,
                            }}
                            />
                    </div>
                    <div className="col-md-6">
                        <Grid
                            data={[
                                ['Trial Data - Updated Results', '2021-12-13'],
                                ['Trial Data - Top-Line default', '2021-08-30'],
                                ['Trial Data - Updated Results', '2021-02-28'],
                            ]}
                            columns={['Event Type', 'Event Date']}
                            search={true}
                            pagination={{
                                limit: 3,
                            }}
                            />
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <button disabled={this.state.events.length === 0} 
                            onClick={this.onNext} className="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </div>
    };
  }
  
  export default DrugEvents;