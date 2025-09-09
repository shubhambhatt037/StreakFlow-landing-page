"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Activity, Calendar, Settings, User, Mail, Target, TrendingUp } from "lucide-react"

export default function StreakFlowLanding() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/35 via-blue-100/35 to-slate-50/35 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating background shapes */}
        <div className="absolute w-96 h-32 -left-32 top-96 opacity-20">
          <div className="w-full h-full bg-blue-200 rounded-lg" />
        </div>
        <div className="absolute w-64 h-32 right-32 top-80 opacity-20">
          <div className="w-full h-full bg-blue-200 rounded-lg" />
        </div>
        <div className="absolute w-64 h-32 left-1/2 top-96 opacity-20">
          <div className="w-full h-full bg-blue-200 rounded-lg" />
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50 px-20 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/images/streakflow-logo-new.png" alt="StreakFlow logo" className="w-11 h-11" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-black">StreakFlow</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="#top"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#demo"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Demo
            </a>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center gap-2">
            <a
              href="https://streakflow-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white font-medium rounded-md transition-all duration-200 inline-block"
              style={{
                background: "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))",
                backgroundImage: "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, rgb(126, 34, 206), rgb(190, 24, 93))"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))"
              }}
            >
              Start Streak
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main id="top" className="relative z-10 px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social proof badge */}
          <Badge variant="outline" className="mb-6 bg-white border-blue-600 text-black">
            🔥 Trusted by 1,000+ users to keep streaks alive
          </Badge>

          {/* Main headline */}
          <h1 className="text-6xl font-semibold text-black mb-6 leading-tight">
            The Smartest Way to Build
            <br />
            and Maintain Habits
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            StreakFlow helps you create habits, track progress, and stay motivated with
            <br />
            streaks, insights, and reminders — all in one clean, lightweight dashboard.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://streakflow-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-white font-medium rounded-md transition-all duration-200 text-base inline-block"
              style={{
                background: "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))",
                backgroundImage: "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, rgb(126, 34, 206), rgb(190, 24, 93))"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))"
              }}
            >
              Start Streak
            </a>
            <a href="#demo">
              <Button variant="outline" className="px-8 py-6 text-base bg-transparent border-white border-2">
                Watch Demo
              </Button>
            </a>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 max-w-7xl mx-auto">
          <div className="border border-gray-200 rounded-2xl p-8 shadow-xl bg-transparent">
            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/streakflow-dashboard-new.png"
                alt="StreakFlow habit tracking dashboard showing user Shubham Bhatt's activity metrics, streaks, and weekly overview"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      <section id="features" className="relative z-10 px-20 py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-32 -left-32 top-32 opacity-15">
            <div className="w-full h-full bg-purple-300 rounded-lg" />
          </div>
          <div className="absolute w-64 h-32 right-32 top-64 opacity-15">
            <div className="w-full h-full bg-pink-300 rounded-lg" />
          </div>
          <div className="absolute w-64 h-32 left-1/2 top-96 opacity-15">
            <div className="w-full h-full bg-blue-300 rounded-lg" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-semibold text-black mb-6 leading-tight">Why StreakFlow?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to build lasting habits and maintain consistency
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Core Habit Tracking */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-purple-300/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Core Habit Tracking</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Create, edit, delete activities with categories and colors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Daily completion tracking with personal notes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Auto-calculated streaks and total completions</span>
                </li>
              </ul>
            </div>

            {/* Dashboard */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-blue-300/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-lg">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Smart Dashboard</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Real-time updates with optimistic UI</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Live stats and weekly progress rings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Quick completion toggle for all activities</span>
                </li>
              </ul>
            </div>

            {/* Calendar & Analytics */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-green-300/60 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Calendar & Analytics</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Visual heatmap of all completions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Category breakdowns and trend analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Longest streaks and completion rates</span>
                </li>
              </ul>
            </div>

            {/* Profile & Achievements */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-pink-300/60 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Profile & Achievements</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Comprehensive profile with bio and avatar</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Days active and completion rate tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Achievement system and milestones</span>
                </li>
              </ul>
            </div>

            {/* Settings & Customization */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-orange-300/60 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl shadow-lg">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Settings & Themes</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Light, dark, and system theme options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Persistent preferences and timezone support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Notification preferences and reminder times</span>
                </li>
              </ul>
            </div>

            {/* Email Reminders */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-teal-300/60 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black">Smart Reminders</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Midday and evening email reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">HTML and text templates for all devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">Redis-backed task scheduling system</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Carousel Indicators */}

          <div className="text-center"></div>
        </div>
      </section>

      <section
        id="demo"
        className="relative z-10 px-20 py-24 bg-gradient-to-b from-slate-50/35 via-blue-100/35 to-slate-50/35"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">See StreakFlow in Action</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Watch how you maintain streaks</p>
          </div>

          {/* Demo Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-12 border border-gray-200 shadow-2xl">
              {/* Video Container */}
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-8 flex items-center justify-center relative overflow-hidden">
                {!isVideoPlaying ? (
                  <>
                    <img
                      src="/modern-habit-tracking-app-demo-video-preview-with-.jpg"
                      alt="StreakFlow demo video preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 group"
                      >
                        <div className="w-0 h-0 border-l-[16px] border-l-purple-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                      </button>
                    </div>
                  </>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/YWeWdyWbXao?si=SvNGD-vKmgtPd198&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                )}
              </div>

              {/* Demo Description */}
              <div className="flex items-center justify-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">2-min demo</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">No sign-up required</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA after demo */}
          <div className="mt-12">
            <a
              href="https://streakflow-frontend.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-white font-semibold rounded-xl transition-all duration-200 text-lg shadow-lg hover:shadow-xl inline-block"
              style={{
                background: "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))",
                backgroundImage: "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, rgb(126, 34, 206), rgb(190, 24, 93))"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))"
              }}
            >
              Start Your First Streak Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
