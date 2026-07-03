import {memo} from "react"

function CountBtn({ handleCount }) {
  console.log("3. CountBtn");

  return (
    <>
      <span>
        <button onClick={handleCount}>Increase Count</button>
      </span>
    </>
  );
}

export default memo(CountBtn);

// When we wrap the memo, components with props change will be loaded.
// cpmponents with props change such as CountBtn and AgeBtn