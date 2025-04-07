import Image from "next/image";

export default function Home() {
  return (
    <div className="grid">
      <div className="profile-img-gradient h-96 inline-flex items-end justify-end justify-self-center">
        <Image
          src="/profileImage.png"
          width={174}
          height={242}
          alt="profile image of me"
        />
      </div>
      <h1>Hello</h1>
    </div>
  );
}
