type LikeButtonProps = {
  onLike: () => void;
};

function LikeButton(props: LikeButtonProps) {

  return (
    <>
      <button onClick={props.onLike}>Like Video</button>
    </>
  );
}

export default LikeButton;
