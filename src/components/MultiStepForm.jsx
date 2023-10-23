import React, { Component } from 'react';

class Step1 extends Component {
  render() {
    const { name, handleChange, nextStep } = this.props;

    return (
      <div>
        <h1>Step 1: Personal Information</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <br />
        <button onClick={nextStep}>Next</button>
      </div>
    );
  }
}

class Step2 extends Component {
  render() {
    const { email, handleChange, prevStep, nextStep } = this.props;

    return (
      <div>
        <h1>Step 2: Contact Information</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <br />
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
  }
}

class Step3 extends Component {
  render() {
    const { password, handleChange, prevStep, nextStep } = this.props;

    return (
      <div>
        <h1>Step 3: Account Setup</h1>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    );
  }
}

class Confirmation extends Component {
  render() {
    const { name, email, password, prevStep } = this.props;

    return (
      <div>
        <h1>Confirmation</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <button onClick={prevStep}>Previous</button>
      </div>
    );
  }
}

class MultiStepForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      name: '',
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  nextStep = () => {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  };

  prevStep = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1,
    }));
  };

  render() {
    const { step, name, email, password } = this.state;

    switch (step) {
      case 1:
        return <Step1 name={name} handleChange={this.handleChange} nextStep={this.nextStep} />;
      case 2:
        return (
          <Step2
            email={email}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        );
      case 3:
        return (
          <Step3
            password={password}
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
          />
        );
      case 4:
        return (
          <Confirmation
            name={name}
            email={email}
            password={password}
            prevStep={this.prevStep}
          />
        );
      default:
        return null;
    }
  }
}

export default MultiStepForm;
