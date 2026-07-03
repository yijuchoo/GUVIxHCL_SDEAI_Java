import {memo} from "react"

function Count({count}) {

    console.log("2. Count");

    return (
    <>
      Count value is: {count}
    </>
  );

}

export default memo(Count);