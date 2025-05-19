import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services-section";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";
import { Check } from "lucide-react";

const additionalServices = [
  {
    title: "Alternative Dispute Resolution",
    description:
      "Cost-effective and efficient resolution of disputes outside the traditional court system.",
    features: [
      "Mediation services",
      "Arbitration proceedings",
      "Negotiation assistance",
      "Settlement agreements",
    ],
  },
  {
    title: "Legal Research & Opinions",
    description:
      "In-depth research and expert legal opinions on complex legal issues.",
    features: [
      "Comprehensive legal research",
      "Written legal opinions",
      "Regulatory compliance advice",
      "Risk assessment reports",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-8 bg-[#c25b5b]/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-[#c25b5b] mx-auto mt-4"></div>
        </div>
      </div>
      <ServicesSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-gray-800">
            <span className="border-b-4 border-[#c25b5b] pb-2">
              Additional Services
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-[#c25b5b]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-[#c25b5b] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800">
              Our Service Commitment
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Adv Subhash Kr Jha & Associates, we are committed to providing
              exceptional legal services that meet the highest standards of
              quality and professionalism. We understand that seeking legal
              assistance can be stressful, which is why we strive to make the
              process as smooth and transparent as possible.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our service commitment includes prompt responses to client
              inquiries, clear and regular communication throughout the legal
              process, and a dedicated approach to achieving the best possible
              outcomes for our clients. We believe in building long-term
              relationships with our clients based on trust, reliability, and
              results.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also recognize that legal services can be costly, which is why
              we are transparent about our fee structure and work with our
              clients to develop cost-effective strategies that align with their
              budgets and objectives. Our goal is to provide value-driven legal
              services that help our clients navigate complex legal challenges
              and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
