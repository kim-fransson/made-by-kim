import Image from "next/image";
import { twMerge } from "tailwind-merge";

import profileImg from "../../public/profileImage.png";

interface ProfileImageProps {
  className?: string;
}

export const ProfileImage = ({ className }: ProfileImageProps) => {
  return (
    <div
      className={twMerge(
        className,
        "md:bg-[#242424] bg-gradient-to-b to-[#242424] h-96 md:h-[600px] inline-flex items-end"
      )}
    >
      <Image
        src={profileImg}
        alt="profile image of me"
        className="grayscale-100 w-44 h-60 md:min-w-[350px] md:h-[486px]"
      />
    </div>
  );
};
