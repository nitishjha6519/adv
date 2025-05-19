import Image from "next/image";

export default function ProfileSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-gray-800">
          <span className="border-b-4 border-[#c25b5b] pb-2">
            Adv Subhash Kr Jha & Associates
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/advSubhashKrJha.jpg"
                alt="Adv Subhash Kr Jha"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#c25b5b] mb-4">
              Adv Subhash Kr Jha
            </h3>
            <p className="text-gray-600 mb-2 text-lg">
              Founder & Senior Advocate
            </p>

            <div className="w-20 h-1 bg-[#c25b5b] mb-6"></div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              With over 20 years of experience in legal practice, Adv Subhash Kr
              Jha has established herself as one of Delhi's most respected legal
              professionals. She founded Adv Subhash Kr Jha & Associates with a
              vision to provide accessible, ethical, and effective legal
              services to clients from all walks of life.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              A graduate of Delhi University's prestigious Faculty of Law, she
              has handled numerous landmark cases and has a proven track record
              of success in various legal domains including family law, criminal
              defense, corporate law, and civil litigation.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Her approach combines thorough legal knowledge with compassion and
              a deep understanding of her clients' needs, ensuring that each
              case receives the attention and expertise it deserves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
