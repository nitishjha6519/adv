import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactCTA from "@/components/contact-cta"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Understanding the New Amendments to Family Law in India",
    excerpt:
      "Recent amendments to family law in India have introduced significant changes that affect divorce proceedings, child custody arrangements, and maintenance rights.",
    date: "May 15, 2025",
    author: "Sandhya Gupta",
    image: "/blog-1.png",
    category: "Family Law",
  },
  {
    id: 2,
    title: "Corporate Compliance: Essential Guidelines for Businesses in 2025",
    excerpt:
      "Staying compliant with evolving corporate regulations is crucial for businesses operating in India. This article outlines key compliance requirements for 2025.",
    date: "May 10, 2025",
    author: "Rahul Sharma",
    image: "/blog-2.png",
    category: "Corporate Law",
  },
  {
    id: 3,
    title: "The Impact of Recent Supreme Court Judgments on Criminal Procedure",
    excerpt:
      "Several landmark judgments by the Supreme Court have reshaped criminal procedure in India. We analyze their implications for defendants and prosecutors.",
    date: "May 5, 2025",
    author: "Priya Verma",
    image: "/blog-3.png",
    category: "Criminal Law",
  },
  {
    id: 4,
    title: "Intellectual Property Rights in the Digital Age: Challenges and Solutions",
    excerpt:
      "The digital transformation has created new challenges for intellectual property protection. Learn about effective strategies to safeguard your IP assets.",
    date: "April 28, 2025",
    author: "Vikram Malhotra",
    image: "/blog-4.png",
    category: "Intellectual Property",
  },
  {
    id: 5,
    title: "Navigating Property Disputes in Delhi: A Comprehensive Guide",
    excerpt:
      "Property disputes are common in Delhi's real estate landscape. This guide provides practical advice on resolving such disputes efficiently.",
    date: "April 20, 2025",
    author: "Sandhya Gupta",
    image: "/blog-5.png",
    category: "Civil Litigation",
  },
  {
    id: 6,
    title: "Employment Law Updates: New Rights for Workers in India",
    excerpt:
      "Recent legislative changes have expanded workers' rights in India. Employers and employees should be aware of these important developments.",
    date: "April 15, 2025",
    author: "Neha Singh",
    image: "/blog-6.png",
    category: "Labor & Employment",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-8 bg-[#c25b5b]/10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800">Our Blog</h1>
          <div className="w-24 h-1 bg-[#c25b5b] mx-auto mt-4"></div>
          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay updated with the latest legal insights, news, and developments through our regularly updated blog.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg?height=200&width=400"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#c25b5b] text-white text-sm py-1 px-3 rounded">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-[#c25b5b] transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#c25b5b] hover:text-[#a04545] transition-colors"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-[#c25b5b] hover:bg-[#a04545] text-white px-6 py-3 rounded transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  )
}
