import React from "react";
import Drugs from "./Drugs";
import Disease from "./Disease";
import DrugEvents from "./DrugEvents";
import Endpoints from "./Endpoints";
import DrugResults from "./DrugResults";
import nav01 from "../images/nav01.JPG"
import nav02 from "../images/nav02.JPG"
import nav03 from "../images/nav03.JPG"
import nav04 from "../images/nav04.JPG"
import nav05 from "../images/nav05.JPG"

class Main extends React.Component {
 
    state = {
        drug1: "",
        drug2: "",
        disease: "",
        events: "",
        endpoint: "",
        step: 1,
    }
 
    // Callback function to handle data received from the
    //drugs component
    handleDrugsCallback = (data) => {
        // Update the selected drugs in the component's state
        this.setState({ drug1: data.drug1 })
        this.setState({ drug2: data.drug2 })
        this.setState({ step: 3 })
    }
 
    handleDiseaseCallback = (data) => {
        // Update the selected disease in the component's state
        this.setState({ disease: data.disease })
        this.setState({ step: 2 })
    }
 
    handleEventsCallback = (data) => {
        // Update the selected events in the component's state
        this.setState({ events: data.events })
        this.setState({ step: 4 })
    }

    handleEndpointCallback = (data) => {
        // Update the selected endpoint in the component's state
        this.setState({ endpoint: data.endpoint })
        this.setState({ step: 5 })
    }

    render() {
        console.log(this.state.step);
        return (
            <div style={{float:"left", paddingLeft:50, paddingRight:50, paddingTop: 20}}>
                
                {/* <h1>Drug Efficacy Tool</h1> */}
                {(() => {
                    if (this.state.step === 1) {
                        return <img src={nav01}></img>
                    } else if (this.state.step === 2) {
                        return <img src={nav02}></img>
                    } else if (this.state.step === 3) {
                        return <img src={nav03}></img>
                    } else if (this.state.step === 4) {
                        return <img src={nav04}></img>
                    } else {
                        return <img src={nav05}></img>
                    }
                })()}
                <div className="row">
                    <div className="col-md-12">
                        {(() => {
                            if (this.state.step === 1) {
                                return <Disease diseaseCallback={this.handleDiseaseCallback} />
                            } else if (this.state.step === 2) {
                                return <Drugs drugsCallback={this.handleDrugsCallback} />
                            } else if (this.state.step === 3) {
                                return <DrugEvents eventsCallback={this.handleEventsCallback} />
                            } else if (this.state.step === 4) {
                                return <Endpoints endpointCallback={this.handleEndpointCallback} />
                            } else {
                                return <DrugResults />
                            }
                        })()}
                    </div>
                </div>
                Disease: {this.state.disease}
                <br/>
                Drugs: {this.state.drug1} and {this.state.drug2}
                <br/>
                Events: {this.state.events}
                <br/>
                Endpoint: {this.state.endpoint}
            </div>
        )
    }
}

export default Main;