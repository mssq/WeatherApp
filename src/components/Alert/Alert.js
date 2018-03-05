import AlertS from 'react-s-alert';
 
const alert = (props) => {
  const errorMessage = props.message.charAt(0).toUpperCase() + props.message.slice(1);

  AlertS.error(errorMessage, {
    position: 'top',
    effect: 'scale',
    timeout: 2500,
    offset: 20
  });

  return null;
}
 
export default alert;
