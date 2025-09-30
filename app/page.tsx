'use client';

import React from "react";
import dynamic from 'next/dynamic';

// Dynamically import the pricing slider to avoid SSR issues
const PricingSlider = dynamic(() => import('./components/PricingSlider'), {
  ssr: false,
  loading: () => <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>
});

// Dynamically import the exit intent modal to avoid SSR issues
const ExitIntentModal = dynamic(() => import('./components/ExitIntentModal'), {
  ssr: false
});

const SALES_URL = "https://athenero.com/?hopId=47075760-cd15-4a06-9a8e-7f7db8a87219";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Sticky Guarantee Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 text-center shadow-lg">
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>30-Day Money-Back Guarantee • Secure Payment • Instant Access</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      </div>
      {/* Hero Section */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 md:py-28">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Turn AI Into Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Secret Weapon</span>
            <br />for Business Growth
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black/70 dark:text-white/70">
            Join 10,000+ entrepreneurs who've automated their workflows and doubled their income with our proven AI strategies.
          </p>
          <div className="flex justify-center">
            <a
              href={SALES_URL}
              className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition hover-lift btn-press focus-ring"
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

      {/* Testimonials Carousel */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 bg-black/[.03] dark:bg-white/[.03]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              See What Our Students Are Saying
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70">
              Real results from real entrepreneurs who've transformed their businesses with AI
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out">
                {/* Testimonial 1 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-background rounded-xl shadow-lg p-8 text-center">
                      <div className="mb-6">
                        {/* Video Placeholder */}
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg mx-auto max-w-md flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 8a9 9 0 110-18 9 9 0 010 18z" />
                              </svg>
                            </div>
                            <p className="text-sm text-black/60 dark:text-white/60">Student Testimonial Video</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-lg mb-4">
                        "This course completely changed how I run my business. I've automated 80% of my repetitive tasks and my income has doubled in just 3 months!"
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                          SJ
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">Sarah Johnson</p>
                          <p className="text-sm text-black/60 dark:text-white/60">Freelance Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-background rounded-xl shadow-lg p-8 text-center">
                      <div className="mb-6">
                        {/* Video Placeholder */}
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg mx-auto max-w-md flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 8a9 9 0 110-18 9 9 0 010 18z" />
                              </svg>
                            </div>
                            <p className="text-sm text-black/60 dark:text-white/60">Student Testimonial Video</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-lg mb-4">
                        "As a small business owner, I was skeptical about AI. But this course made it so simple - now I save 20 hours per week and my revenue increased by 150%!"
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                          MC
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">Mike Chen</p>
                          <p className="text-sm text-black/60 dark:text-white/60">E-commerce Store Owner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="w-full flex-shrink-0 px-4">
                  <div className="max-w-2xl mx-auto">
                    <div className="bg-background rounded-xl shadow-lg p-8 text-center">
                      <div className="mb-6">
                        {/* Video Placeholder */}
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg mx-auto max-w-md flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-3 bg-black/10 dark:bg-white/10 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 8a9 9 0 110-18 9 9 0 010 18z" />
                              </svg>
                            </div>
                            <p className="text-sm text-black/60 dark:text-white/60">Student Testimonial Video</p>
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-lg mb-4">
                        "The best investment I've ever made. From complete beginner to running automated systems that generate passive income. Worth every penny!"
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                          AR
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">Anna Rodriguez</p>
                          <p className="text-sm text-black/60 dark:text-white/60">Marketing Consultant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="w-3 h-3 rounded-full bg-foreground"></button>
              <button className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20"></button>
              <button className="w-3 h-3 rounded-full bg-black/20 dark:bg-white/20"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Course / Benefits */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 bg-black/[.03] dark:bg-white/[.03]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Choose This Course?
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70">
              Everything you need to succeed with AI – no experience required
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Benefit Card 1 */}
            <div className="bg-background rounded-xl border border-black/10 dark:border-white/15 p-6 shadow-sm hover:shadow-md transition-shadow card-hover text-reveal">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 bounce-icon">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Save 20+ Hours Weekly</h3>
              <p className="text-black/70 dark:text-white/70">
                Automate repetitive tasks that eat up your day. From email responses to data entry – let AI handle the mundane while you focus on growing your business.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-background rounded-xl border border-black/10 dark:border-white/15 p-6 shadow-sm hover:shadow-md transition-shadow card-hover text-reveal">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 bounce-icon">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Double Your Income</h3>
              <p className="text-black/70 dark:text-white/70">
                Our students typically see 2x revenue growth within 90 days. Scale your services, reach more clients, and charge premium rates with AI-powered efficiency.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-background rounded-xl border border-black/10 dark:border-white/15 p-6 shadow-sm hover:shadow-md transition-shadow card-hover text-reveal">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 bounce-icon">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero Tech Skills Needed</h3>
              <p className="text-black/70 dark:text-white/70">
                No coding, no complicated setups. We break everything down into simple, actionable steps that anyone can follow – regardless of your technical background.
              </p>
            </div>

            {/* Benefit Card 4 */}
            <div className="bg-background rounded-xl border border-black/10 dark:border-white/15 p-6 shadow-sm hover:shadow-md transition-shadow card-hover text-reveal">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 bounce-icon">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Step-by-Step Training</h3>
              <p className="text-black/70 dark:text-white/70">
                From setup to advanced automation, we guide you through every step. No guesswork, just clear instructions and real-world examples you can implement immediately.
              </p>
            </div>

            {/* Benefit Card 5 */}
            <div className="bg-background rounded-xl border border-black/10 dark:border-white/15 p-6 shadow-sm hover:shadow-md transition-shadow card-hover text-reveal">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 bounce-icon">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Future-Proof Your Career</h3>
              <p className="text-black/70 dark:text-white/70">
                AI automation is the future of business. Master these skills now and position yourself at the forefront of a rapidly growing industry with unlimited potential.
              </p>
            </div>

            {/* Benefit Card 6 */}
            <div className="bg-background rounded-xl border border-black/10 dark:border-white/15 p-6 shadow-sm hover:shadow-md transition-shadow card-hover text-reveal">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 bounce-icon">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-black/70 dark:text-white/70">
                Join 10,000+ successful students who've transformed their businesses. Our track record speaks for itself – real people achieving real results with our methods.
              </p>
            </div>
          </div>
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

      {/* Progressive CTA Funnel - Step 1: Soft Commitment */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">
            Join thousands of entrepreneurs who've already discovered the power of AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-black/20 dark:border-white/30 hover:bg-black/5 dark:hover:bg-white/10 transition">
              Download Free AI Toolkit
            </button>
            <a
              href={SALES_URL}
              className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Slider */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20">
        <div className="max-w-6xl mx-auto">
          <PricingSlider salesUrl={SALES_URL} />
        </div>
      </section>

      {/* Founder Story with Timeline */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 bg-black/[.03] dark:bg-white/[.03]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              From Struggling Freelancer to AI Automation Expert
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70">
              The journey that inspired this course and helped 10,000+ entrepreneurs transform their businesses
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  AS
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Alex Smith</h3>
                  <p className="text-black/60 dark:text-white/60">Founder & AI Automation Expert</p>
                </div>
              </div>
              <div className="space-y-4 text-black/80 dark:text-white/80">
                <p>
                  In 2019, I was a struggling freelance designer working 12-hour days to barely make ends meet. My inbox was overflowing, clients were demanding revisions, and I had no time for anything else.
                </p>
                <p>
                  That's when I discovered AI automation. What started as a desperate attempt to save time completely transformed my business – and my life.
                </p>
                <p>
                  Today, I'm grateful to share these exact strategies with thousands of entrepreneurs who've achieved similar transformations.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

              <div className="space-y-8">
                {/* Timeline Item 1 */}
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    1
                  </div>
                  <div className="bg-background rounded-lg p-4 shadow-sm border border-black/10 dark:border-white/15 flex-1">
                    <div className="font-semibold mb-1">2019: The Struggle</div>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      Working 60+ hours/week as a freelance designer, barely breaking even, completely burned out
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    2
                  </div>
                  <div className="bg-background rounded-lg p-4 shadow-sm border border-black/10 dark:border-white/15 flex-1">
                    <div className="font-semibold mb-1">2020: AI Discovery</div>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      First AI tools implementation - automated client onboarding and cut workload by 40%
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    3
                  </div>
                  <div className="bg-background rounded-lg p-4 shadow-sm border border-black/10 dark:border-white/15 flex-1">
                    <div className="font-semibold mb-1">2021: Breakthrough</div>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      Scaled to 6-figure business with 80% profit margins, working just 20 hours/week
                    </div>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    4
                  </div>
                  <div className="bg-background rounded-lg p-4 shadow-sm border border-black/10 dark:border-white/15 flex-1">
                    <div className="font-semibold mb-1">2022: Teaching Others</div>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      Launched first course - 10,000+ students, created systematic approach for AI automation success
                    </div>
                  </div>
                </div>

                {/* Timeline Item 5 */}
                <div className="relative flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                    5
                  </div>
                  <div className="bg-background rounded-lg p-4 shadow-sm border border-black/10 dark:border-white/15 flex-1">
                    <div className="font-semibold mb-1">2023: Mission Continues</div>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      Helping entrepreneurs worldwide achieve financial freedom through practical AI automation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progressive CTA Funnel - Step 3: Final Commitment */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Don't Wait – Transform Your Business Now
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70 mb-8">
            Limited time offer: Get lifetime access + all future updates
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-green-800 dark:text-green-200">30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-purple-800 dark:text-purple-200">Instant Access</span>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href={SALES_URL}
              className="inline-flex items-center justify-center h-14 px-8 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg hover-lift btn-press focus-ring pulse-cta"
            >
              🚀 Get Instant Access - Only $147
            </a>
          </div>
          <p className="text-sm text-black/50 dark:text-white/50 mt-4">
            No recurring fees • 30-day money-back guarantee • Instant download
          </p>
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

      {/* Exit Intent Modal */}
      <ExitIntentModal salesUrl={SALES_URL} />
    </div>
  );
}
