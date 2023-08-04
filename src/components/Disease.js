import React from "react";

class Disease extends React.Component {
    state = {
        disease: "",
    }
    // Function triggered when the form is submitted
    onNext = (event) => {
        // Call the parent callback function
        this.props.diseaseCallback(this.state);
        event.preventDefault();
    }

    render () {
        const options = ['Atopic dermatitis', 'Asthma', 'Psoriasis', 'Alzheimer\'s Disease'];
        const onDiseaseChangeHandler = (event) => {
            if(event.target.value === "Select drug 1")
            {
                this.setState({disease: ""});
            }
            else {
                this.setState({disease: event.target.value});
            }
            console.log("User Selected disease - ", event.target.value)
        }
        return <div style={{float:"left"}}>
            <h3>Select disease</h3>
            <div className="row">
                <div className="col-md-12">
                    <select className="form-control" onChange={onDiseaseChangeHandler}>
                        <option>Select disease</option>
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
                    <div className="col-md-12">
                        <button disabled={this.state.disease.length === 0 } 
                            onClick={this.onNext} className="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </div>
    };
  }
  
  export default Disease;