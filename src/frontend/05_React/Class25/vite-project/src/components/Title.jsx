import {memo} from "react"

function Title() {
  console.log("1. Title");

  return (
    <>
      <h1>Title of the Page</h1>
    </>
  );
}

export default memo(Title);

// When we wrap the memo, components with props change will be loaded.