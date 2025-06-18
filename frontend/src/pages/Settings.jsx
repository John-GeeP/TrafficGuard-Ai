import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

import CardHeader from '../components/CardHeader';
import UserLogin from '../components/UserLogin';
import ThemeCard from '../components/ThemeCard';
import ChangeRouter from '../components/ChangeRouter';
import ScrollBoxRouter from '../components/ScrollBoxRouter';
import { useRouter } from '../context/RouterContext';
import AccessibilityCard from '../components/AccessibilityCard';

function Settings() {
  // const { routers, activeIndex, selectRouter, deleteRouter } = useRouter();

  return (

    <div>
      <div className="container mt-2"> <h7>Settings</h7> </div>
        
        <div className="container px-5 move-up" style={{ paddingBottom: '200px' }}>
        {/* adding padding stops the model menu from shifting the layout due to lack of render space */}

          <div className="row">

            <div className="col-md-4"> {/* Grid 1/3; margin start at 1.5rem */}

              <CardHeader HeaderText="User Login" />
              <UserLogin />

              <CardHeader HeaderText="Theme" className="mt-6" />
              <ThemeCard />
              
            </div>

            <div className="col-md-5">
              <CardHeader HeaderText="Change Router" />
              <ChangeRouter />

              
            </div>

            <div className="col-md-3">
              <CardHeader HeaderText="Accessibility" />
              <AccessibilityCard />
              
            {/* <CardHeader HeaderText="Available Routers" className="mt-4" />
            <ScrollBoxRouter
              routers={routers}
              selectedIndex={activeIndex}
              onSelect={selectRouter}
              onDelete={deleteRouter}
            /> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
