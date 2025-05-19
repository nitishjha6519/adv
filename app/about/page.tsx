import Navbar from "@/components/navbar";
import ProfileSection from "@/components/profile-section";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-8 bg-[#c25b5b]/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800">
            About Us
          </h1>
          <div className="w-24 h-1 bg-[#c25b5b] mx-auto mt-4"></div>
        </div>
      </div>
      <ProfileSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800">
              Our History
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Established in 2001, Adv Subhash Kr Jha & Associates has grown
              from a small practice to one of Delhi's most respected law firms.
              Our journey began when Adv Subhash Kr Jha, after gaining valuable
              experience at a prestigious law firm, decided to establish her own
              practice with a vision to provide accessible and high-quality
              legal services.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Over the years, we have expanded our team to include specialists
              in various legal domains, allowing us to offer comprehensive legal
              solutions to our diverse clientele. Our firm has been involved in
              several landmark cases that have shaped legal precedents in India.
            </p>
            <p className="text-gray-700 mb-10 leading-relaxed">
              Today, we are proud to be recognized as a leading law firm in
              Delhi NCR, known for our ethical practices, client-centric
              approach, and legal excellence. Our commitment to justice and our
              clients' interests remains unwavering as we continue to grow and
              evolve.
            </p>

            <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800">
              Our Team
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Adv Subhash Kr Jha & Associates, we believe that our strength
              lies in our team. We have assembled a group of highly qualified
              and experienced legal professionals who bring diverse expertise
              and perspectives to the table.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team includes senior advocates, associates, legal researchers,
              and support staff who work collaboratively to provide
              comprehensive legal solutions. Each member of our team is
              committed to maintaining the highest standards of professionalism,
              integrity, and client service.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We invest in continuous learning and development to ensure that
              our team stays updated with the latest legal developments and can
              provide cutting-edge advice to our clients. This commitment to
              excellence is reflected in the quality of our work and the success
              we achieve for our clients.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
