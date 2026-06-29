import { useState } from "react";

function App() {
  const [otp, setOTP] = useState("");
  const [status, setStatus] = useState("Order Placed");

  function verifyOTP() {
    if(otp === "123456") {
      alert("OTP is verified");
    } else {
      alert("Invalid OTP");
    }
  }

  // Example 2
  function nextStatus() {
    if(status === "Order Placed") {
      setStatus("Preparing Food");
    } else if (status === "Preparing Food") {
      setStatus("Out for Delivery");
    } else if (status === "Out for Delivery") {
      setStatus("Delivered");
    }
  }


  return (
    <>
    <div>
      <input 
      maxLength={6}
      value={otp}
      onChange={(e) => setOTP(e.target.value)}
       />
       <span>&nbsp;</span>
       <button onClick={verifyOTP}>Verify</button>
    </div>

    <div>
      <h3>{status}</h3>
      <button onClick={nextStatus}>Update Status</button>
    </div>
    </>
  );
}

export default App;
