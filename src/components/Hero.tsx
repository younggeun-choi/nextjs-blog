import Link from "next/link";
import profileImage from "../../public/images/profile.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Justin YG CHOI"}</h2>
      <h3 className="text-xl font-semibold">Full-stack Engineer</h3>
      <p>(주)도칸웍스 CEO 😀</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
