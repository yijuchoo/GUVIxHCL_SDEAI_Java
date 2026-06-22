type ProfileCardProps = {
  employeeName: string;
};

function ProfileCard({ employeeName }: ProfileCardProps) {
  return (
    <div style={{ border: "1px solid blue", padding: "20px", width: "250px" }}>
      <h1>Employee Profile is: </h1>
      <p>Employee Name: {employeeName}</p>
    </div>
  );
}

export default ProfileCard;
