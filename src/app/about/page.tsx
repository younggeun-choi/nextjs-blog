import Hero from "@/components/Hero";

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          주식회사 도칸웍스의 창업자, CEO <br />
          지금은 어쩌다 다시 개발까지...
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          (주)도칸웍스 <br />
          GS SHOP <br />
          TOSS LAB <br />
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React <br />
          Next.js <br />
          TypeScript <br />
          Node.js <br />
        </p>
      </section>
    </>
  );
}
