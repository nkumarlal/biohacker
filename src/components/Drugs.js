import React from "react";

class Drugs extends React.Component {
    state = {
        drug1: "",
        drug2: "",
    }
    // Function triggered when the form is submitted
    onNext = (event) => {
        // Call the parent callback function
        this.props.drugsCallback(this.state);
        event.preventDefault();
    }

    render () {
        const options = ['Dupixent', 'Lebrikizumab', 'Adbry', 'Rinvoq', 'Eucrisa'];
        const onDrug1ChangeHandler = (event) => {
            if(event.target.value === "Select drug 1")
            {
                this.setState({drug1: ""});
            }
            else {
                this.setState({drug1: event.target.value});
            }
            
            console.log("User Selected drug1 - ", event.target.value)
        }

        const onDrug2ChangeHandler = (event) => {
            if(event.target.value === "Select drug 2")
            {
                this.setState({drug2: ""});
            }
            else {
                this.setState({drug2: event.target.value});
            }
            console.log("User Selected drug2 - ", event.target.value)
        }
        return <div style={{float:"left"}}>
            <h3>Select drugs to compare</h3>
            <div className="row">
                <div className="col-md-6">
                    <select className="form-control" onChange={onDrug1ChangeHandler}>
                        <option>Select drug 1</option>
                        {options.map((option, index) => {
                            return <option key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                </div>
                <div className="col-md-6">
                    <select className="form-control" onChange={onDrug2ChangeHandler}>
                        <option>Select drug 2</option>
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
                        <button disabled={this.state.drug1.length === 0 || this.state.drug2.length === 0} 
                            onClick={this.onNext} className="btn btn-primary">Next</button>
                    </div>
                </div>
            </div>
        </div>
    };
  }
  
  export default Drugs;