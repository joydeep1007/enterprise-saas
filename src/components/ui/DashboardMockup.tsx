"use client";

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl animate-float">
      {/* Main glassmorphism dashboard container */}
      <div 
        className="relative rounded-[24px] p-8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(59,130,246,0.2),inset_0_1px_0_0_rgba(255,255,255,0.1)]"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)'
        }}
      >
        {/* Blue glow effect */}
        <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
        
        {/* KPI Cards Row */}
        <div className="relative grid grid-cols-3 gap-4 mb-8">
          {/* Uptime SLA Card */}
          <div 
            className="rounded-2xl p-5 backdrop-blur-md border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-white/25 transition-all duration-300 animate-slide-in-up"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              animationDelay: '0ms'
            }}
          >
            <div className="text-xs font-medium text-white/60 mb-2 tracking-wide uppercase">Uptime SLA</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
              99.9%
            </div>
            <div className="flex items-center gap-1 text-xs text-green-400">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>100% This Month</span>
            </div>
          </div>

          {/* ROI Average Card */}
          <div 
            className="rounded-2xl p-5 backdrop-blur-md border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-white/25 transition-all duration-300 animate-slide-in-up"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              animationDelay: '100ms'
            }}
          >
            <div className="text-xs font-medium text-white/60 mb-2 tracking-wide uppercase">ROI Average</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
              3x
            </div>
            <div className="flex items-center gap-1 text-xs text-green-400">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>+12% vs Last Q</span>
            </div>
          </div>

          {/* Growth Card */}
          <div 
            className="rounded-2xl p-5 backdrop-blur-md border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-white/25 transition-all duration-300 animate-slide-in-up"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              animationDelay: '200ms'
            }}
          >
            <div className="text-xs font-medium text-white/60 mb-2 tracking-wide uppercase">Growth</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
              +47%
            </div>
            <div className="flex items-center gap-1 text-xs text-green-400">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>Year over Year</span>
            </div>
          </div>
        </div>

        {/* Animated Line Chart */}
        <div className="relative mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white/90">Performance Overview</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/50">Last 7 days</span>
            </div>
          </div>

          {/* Chart Container */}
          <div 
            className="relative h-48 rounded-xl p-4 backdrop-blur-sm border border-white/5"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)'
            }}
          >
            {/* Y-axis labels */}
            <div className="absolute left-0 top-4 bottom-4 flex flex-col justify-between text-[10px] text-white/40">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>

            {/* Grid lines */}
            <div className="absolute inset-4 left-8">
              <div className="relative h-full">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="absolute w-full border-t border-white/5"
                    style={{ top: `${i * 25}%` }}
                  />
                ))}
              </div>
            </div>

            {/* SVG Chart */}
            <svg
              className="absolute inset-4 left-8 w-[calc(100%-2rem)] h-[calc(100%-2rem)]"
              viewBox="0 0 400 160"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Area fill */}
              <path
                d="M 0 120 L 0 80 L 57 60 L 114 90 L 171 50 L 228 70 L 285 40 L 342 30 L 400 50 L 400 120 Z"
                fill="url(#areaGradient)"
                className="animate-draw-area"
              />

              {/* Line path with glow */}
              <path
                d="M 0 80 L 57 60 L 114 90 L 171 50 L 228 70 L 285 40 L 342 30 L 400 50"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                className="animate-draw-line"
                style={{
                  strokeDasharray: '1000',
                  strokeDashoffset: '1000'
                }}
              />

              {/* Data points */}
              {[
                { x: 0, y: 80 },
                { x: 57, y: 60 },
                { x: 114, y: 90 },
                { x: 171, y: 50 },
                { x: 228, y: 70 },
                { x: 285, y: 40 },
                { x: 342, y: 30 },
                { x: 400, y: 50 }
              ].map((point, i) => (
                <circle
                  key={i}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill="#3b82f6"
                  className="animate-fade-in"
                  style={{
                    animationDelay: `${(i * 150) + 800}ms`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                >
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="2s"
                    repeatCount="indefinite"
                    begin={`${(i * 150) + 800}ms`}
                  />
                </circle>
              ))}
            </svg>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-8 right-4 flex justify-between text-[10px] text-white/40 mt-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Animated Progress Bars */}
        <div className="space-y-4">
          {/* Progress Bar 1 - API Response Time */}
          <div className="animate-slide-in-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-white/80">API Response Time</span>
              <span className="text-xs font-semibold text-blue-400">47ms</span>
            </div>
            <div className="h-2 rounded-full backdrop-blur-sm border border-white/5 overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div 
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.5)] animate-progress-fill"
                style={{ 
                  width: '0%',
                  animationDelay: '600ms'
                }}
              />
            </div>
          </div>

          {/* Progress Bar 2 - Server Load */}
          <div className="animate-slide-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-white/80">Server Load</span>
              <span className="text-xs font-semibold text-purple-400">34%</span>
            </div>
            <div className="h-2 rounded-full backdrop-blur-sm border border-white/5 overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div 
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 shadow-[0_0_12px_rgba(147,51,234,0.5)] animate-progress-fill-alt"
                style={{ 
                  width: '0%',
                  animationDelay: '800ms'
                }}
              />
            </div>
          </div>

          {/* Progress Bar 3 - Database Efficiency */}
          <div className="animate-slide-in-up" style={{ animationDelay: '500ms' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-white/80">Database Efficiency</span>
              <span className="text-xs font-semibold text-green-400">92%</span>
            </div>
            <div className="h-2 rounded-full backdrop-blur-sm border border-white/5 overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div 
                className="h-full rounded-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.5)] animate-progress-fill-slow"
                style={{ 
                  width: '0%',
                  animationDelay: '1000ms'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
