/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import OtpInput from './Otp';

const App = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className="h-screen bg-blue-500 py-20 px-3">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props: any) => <input {...props} className="m-2 border h-10 w-10 text-center form-control rounded" maxLength={1} />}
              inputType='number'
            />
          </div>
        </div>
      </div>
    </div>
  )
};


export default App;
