import LikeButton from "./backup/components/LikeButton";

function App() {
  // parent received the action from the child
  function handleLikeClick() {
    alert("Video liked from the child component");
  }
  return (
    <div>
      <LikeButton onLike={handleLikeClick} />
    </div>
  );
}

export default App;
