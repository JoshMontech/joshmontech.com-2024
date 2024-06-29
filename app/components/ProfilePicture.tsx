import Image from "next/image"

const ProfilePicture = () => {
  return (
    <Image src="/josh.jpg" alt="Josh" height={75} width={75} className="rounded-full profile-picture relative" />
  )
}

export default ProfilePicture