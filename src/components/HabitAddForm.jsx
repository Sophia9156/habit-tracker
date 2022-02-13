import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  formRef = React.createRef()
  inputRef = React.createRef()

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value
    name && this.props.onAdd(name)
    // this.inputRef.current.value = '';
    this.formRef.current.reset()
  }
  render() {
    return (
      <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" className='add-input' placeholder='Please add your habit.' />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;