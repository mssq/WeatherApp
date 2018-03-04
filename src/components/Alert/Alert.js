import { Component } from 'react'
import AlertS from 'react-s-alert';
 
class Alert extends Component  {

  showAlert() {
    // Capitalize the first letter
    const errorMessage = this.props.message.charAt(0).toUpperCase() + this.props.message.slice(1);

    AlertS.error(errorMessage, {
      position: 'top',
      effect: 'scale',
      timeout: 2000,
      offset: 20
    });
  }

  render () {
    this.showAlert();
    return null;
  }
}
 
export default Alert;
