// Change Router component on the Settings Page

import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import ScrollBoxRouter from './ScrollBoxRouter';

const ChangeRouter = () => {

  // For Router Select Box
  const { routers, activeIndex, selectRouter, deleteRouter } = useRouter();

  //Brand & Models Dropdown Menu .js
  const brands = ['GL.iNet'];
  const models = ['Mango', 'BerylAX'];
  const { addRouter } = useRouter();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [ip, setIp] = useState('');

  const handleAdd = () => {
    if (!ip.trim()) return;
    addRouter({
      brand,
      model: model.toLowerCase(),
      ip,
      username: '',
      password: ''
    });
    setIp('');
  };

  return (
    

    <div className="card mb-3" style={{ maxWidth: '100%', width: '90%' }}>
      <div className="card-body"

        style={{ 
          marginLeft: '10px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px' 
        }}>

        {/* Select Router Section */}
        
        <h11>Select Router</h11>
        
          <ScrollBoxRouter
              routers={routers}
              selectedIndex={activeIndex}
              onSelect={selectRouter}
              onDelete={deleteRouter}
            />




        {/* Add Router Section */}

        <h11>Add Router</h11>

        {/* Router Brand Menu */}
        <div 
          style={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: '38px'
          }}>

          <h10 style={{ marginLeft: '25px'}}>Router Brand</h10>

          <div className="dropdown" style={{ position: 'relative' }}>
            <button className='dropbtn'>
              <select
                className="custom-dropdown"
                value={brand}
                onChange={e => setBrand(e.target.value)}
                required
              >
                <option value="" disabled hidden>-- Select --</option>
                {brands.map((b, i) => <option key={i} value={b}>{b}</option>)}
              </select>
            </button>
          </div>

        </div>


        {/* Router Model Menu */}
        <div 
          style={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: '0px',
            position: 'relative', /* KEY */
            overflow: 'visible' /* ensure dropdown can spill over */
          }}>

          <h10 style={{ marginLeft: '25px'}}>Router Model</h10>
          <div className="dropdown">
            <button className='dropbtn' style={{ marginLeft: '35px' }}>
              <select
                className="custom-dropdown"
                value={model}
                onChange={e => setModel(e.target.value)}
                required
              >
                <option value="" disabled hidden>-- Select --</option>
                {models.map((m, i) => <option key={i} value={m}>{m}</option>)}
              </select>
            </button>
          </div>

        </div>



        <div 
          style={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: '64px'
          }}>

          <h10 style={{ marginLeft: '25px'}}>IP Address</h10>

          <div className="text-box"
            style={{

              height: '50px',
              width: '45%',

            }}>

            <input
              type="text"
              className="custom-input"
              placeholder="e.g. 192.168.8.1"
              value={ip}
              onChange={e => setIp(e.target.value)}
            />
          </div>

          <div
            className="button"
            style={{ alignSelf: 'center' }}
            onClick={handleAdd}
          >
            Add
          </div>

        </div>


          

        </div>
      </div>
    
  );
};

export default ChangeRouter;
