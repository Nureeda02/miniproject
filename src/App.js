import React from 'react';
import { BrowserRouter as Router, Route, Switch as ReactRouterSwitch } from 'react-router-dom'; // เปลี่ยน Switch เป็น ReactRouterSwitch
import RegistrationForm from './RegistrationForm';
import ConfirmationPage from './ConfirmationPage';

function App() {
  return (
    <Router>
      <div>
        <ReactRouterSwitch> {/* ตรงนี้เปลี่ยนเป็น ReactRouterSwitch */}
          <Route path="/confirmation">
            <ConfirmationPage />
          </Route>
          <Route path="/">
            <RegistrationForm />
          </Route>
        </ReactRouterSwitch> {/* ตรงนี้เปลี่ยนเป็น ReactRouterSwitch */}
      </div>
    </Router>
  );
}

export default App;
