import {memo} from "react"

function AgeBtn({ handleAge }) {
  console.log("5. AgeBtn");

  return (
    <>
      <span>
        <button onClick={handleAge}>Increment Age</button>
      </span>
    </>
  );
}

export default memo(AgeBtn);
