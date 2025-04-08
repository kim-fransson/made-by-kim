import Image from "next/image";

export const ProfileImage = () => {
  return (
    <div className="profile-img-gradient h-96 inline-flex items-end">
      <Image
        src="/profileImage.png"
        width={174}
        height={242}
        alt="profile image of me"
        className="grayscale-100"
      />
    </div>
  );
};
