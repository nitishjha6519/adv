import Navbar from "@/components/navbar"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-8 bg-[#c25b5b]/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800">Contact Us</h1>
          <div className="w-24 h-1 bg-[#c25b5b] mx-auto mt-4"></div>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            We're here to help with your legal needs. Reach out to us for a consultation or to schedule an appointment.
          </p>
        </div>
      </div>

      <ContactSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-12">
              Find answers to common questions about our services and legal processes.
            </p>

            <div className="space-y-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-800">What should I bring to my first consultation?</h3>
                <p className="text-gray-600">
                  For your first consultation, please bring any relevant documents related to your case, such as
                  contracts, correspondence, court notices, or other legal papers. Also, prepare a summary of your
                  situation and a list of questions you'd like to discuss.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-800">How are your fees structured?</h3>
                <p className="text-gray-600">
                  Our fee structure varies depending on the nature and complexity of your case. We offer hourly rates,
                  fixed fees for specific services, and contingency arrangements in certain cases. We'll discuss our
                  fees transparently during your initial consultation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-800">How long will my case take?</h3>
                <p className="text-gray-600">
                  The duration of legal proceedings varies widely depending on the nature of the case, court schedules,
                  and other factors. During your consultation, we'll provide an estimated timeline based on our
                  experience with similar cases, while noting that legal matters can sometimes take unexpected turns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2 text-gray-800">Do you offer virtual consultations?</h3>
                <p className="text-gray-600">
                  Yes, we offer virtual consultations via video conferencing for clients who prefer remote meetings.
                  These consultations are conducted with the same level of professionalism and confidentiality as
                  in-person meetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
