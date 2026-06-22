import ProfileCard from "./ProfileCard";

type ProfileSectionProps = {
  employeeName: string;
};

function ProfileSection({ employeeName }: ProfileSectionProps) {
  return (
    <div>
      <ProfileCard employeeName={employeeName} />
    </div>
  );
}

export default ProfileSection;
