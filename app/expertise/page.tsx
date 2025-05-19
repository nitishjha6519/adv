import Navbar from "@/components/navbar";
import ExpertiseSection from "@/components/expertise-section";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";
import { BookOpen, Globe } from "lucide-react";

const additionalExpertise = [
  {
    icon: <BookOpen className="h-12 w-12 text-[#c25b5b]" />,
    title: "Constitutional Law",
    description:
      "Expert representation in matters related to fundamental rights, constitutional remedies, and public interest litigation.",
  },
  {
    icon: <Globe className="h-12 w-12 text-[#c25b5b]" />,
    title: "International Law",
    description:
      "Guidance on international treaties, cross-border disputes, and international business transactions.",
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-8 bg-[#c25b5b]/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800">
            Our Expertise
          </h1>
          <div className="w-24 h-1 bg-[#c25b5b] mx-auto mt-4"></div>
        </div>
      </div>
      <ExpertiseSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-gray-800">
            <span className="border-b-4 border-[#c25b5b] pb-2">
              Additional Practice Areas
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalExpertise.map((area, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#c25b5b]"
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800">
              Our Approach
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Adv Subhash Kr Jha & Associates, we believe in a
              client-centered approach to legal practice. We understand that
              each client and case is unique, requiring tailored strategies and
              solutions. Our approach combines legal expertise with a deep
              understanding of our clients' needs and objectives.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We begin by listening carefully to our clients, understanding
              their concerns, and clarifying their goals. We then conduct
              thorough research and analysis to develop a comprehensive
              understanding of the legal issues involved. Based on this
              foundation, we develop strategic plans that align with our
              clients' objectives and maximize their chances of success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Throughout the legal process, we maintain open and transparent
              communication with our clients, keeping them informed about
              developments in their cases and involving them in key decisions.
              We are committed to providing practical, cost-effective solutions
              that address our clients' immediate concerns while also
              considering their long-term interests.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
