import React from "react";

const SALES_URL = "https://da65d3hg1-o7n6295fo8plwn09.hop.clickbank.net";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 md:py-28">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Step Into the World of AI & Automation – No Tech Skills Required!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70">
            A practical course for beginners, freelancers, and small business owners.
          </p>
          <div className="flex justify-center">
            <a
              href={SALES_URL}
              className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition"
            >
              Start Now – Get Instant Access
            </a>
          </div>
        </div>
      </section>

      {/* Short Description */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-black/80 dark:text-white/80">
            Looking for a way to save time and boost your income? This course is designed to teach you how to leverage the power of AI and automation in your business – even if you have zero technical experience.
          </p>
        </div>
      </section>

      {/* Why This Course / Benefits */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-14 bg-black/[.03] dark:bg-white/[.03]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center">Why This Course?</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Beginner-friendly – no prior skills required",
              "Simple tools and step-by-step instructions",
              "Boost your productivity and get more done in less time",
              "Enter a high-demand, future-proof industry",
              "Clear, easy-to-follow training with real applications",
            ].map((item) => (
              <li key={item} className="rounded-xl border border-black/10 dark:border-white/15 p-4 bg-background/60">
                <span className="mr-2">✅</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center">Who Is It For?</h2>
          <ul className="mt-6 list-disc list-inside text-black/80 dark:text-white/80 space-y-2 max-w-3xl mx-auto">
            <li>Freelancers who want to get tasks done faster</li>
            <li>Small business owners looking to cut costs and scale smarter</li>
            <li>Anyone curious about AI and eager to apply it in daily work</li>
          </ul>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-14 bg-black/[.03] dark:bg-white/[.03]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center">What You’ll Learn</h2>
          <ul className="mt-6 list-disc list-inside text-black/80 dark:text-white/80 space-y-2 max-w-3xl mx-auto">
            <li>How to use AI tools in your daily tasks</li>
            <li>Automating repetitive work to save time</li>
            <li>Practical strategies to grow your income with AI</li>
          </ul>
        </div>
      </section>

      {/* Main CTA */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20 text-center bg-black/[.03] dark:bg-white/[.03]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Start Your AI Journey Today – Click Below to Access the Course</h2>
          <div className="mt-6">
            <a href={SALES_URL} className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition">Click Here for Instant Access</a>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-black/80 dark:text-white/80">
            AI is no longer a luxury – it’s the secret weapon of successful freelancers and business owners. Don’t wait – take action today and unlock your access to the course!
          </p>
          <div className="mt-6">
            <a href={SALES_URL} className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition">Get Instant Access</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-10 border-t border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/60 dark:text-white/60">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="/disclosure" className="hover:underline">Disclosure</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
