import React, { useContext } from 'react';
import alertContext from '../../context/alert/AlertContext';
const Alerts = () => {
  const AlertContext = useContext(alertContext);
  return (
    AlertContext.alerts.length > 0 &&
    AlertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'> {alert.msg}</i>
      </div>
    ))
  );
};

export default Alerts;
