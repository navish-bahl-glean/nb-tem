'use client';

import { useState, useCallback } from 'react';
import {
  Flame,
  BookOpen,
  Target,
  Award,
  Zap,
  Building2,
  Brain,
  ShieldCheck,
  Network,
  Sparkles,
  ChevronRight,
  Star,
  TrendingUp,
  Clock,
  Users,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Trophy,
} from 'lucide-react';

type ActiveTab = 'tem' | 'now' | 'me';

const NAV_TABS = [
  { id: 'tem' as const, label: 'Why TEM?', shortLabel: 'TEM' },
  { id: 'now' as const, label: 'Why Now?', shortLabel: 'Now' },
  { id: 'me' as const, label: 'Why Me?', shortLabel: 'Me' },
];

// ─── Reusable sub-components ─────────────────────────────────

function GoalBadge({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2.5 bg-emerald-500/8 rounded-xl p-3 border border-emerald-500/15">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
      <span className="text-emerald-300 text-xs font-semibold leading-relaxed">{text}</span>
    </div>
  );
}

function UrgencyBadge({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2.5 bg-amber-500/8 rounded-xl p-3 border border-amber-500/15">
      <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
      <span className="text-amber-300 text-xs font-semibold leading-relaxed">{text}</span>
    </div>
  );
}

function StrengthBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Star className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
      <span className="text-violet-300 text-xs font-semibold">{text}</span>
    </div>
  );
}

interface IconBoxProps {
  children: React.ReactNode;
  color: string;
  bgAlpha?: string;
}

function IconBox({ children, color, bgAlpha = '20' }: IconBoxProps) {
  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{
        background: `${color}${bgAlpha}`,
        border: `1px solid ${color}35`,
        color,
      }}
    >
      {children}
    </div>
  );
}

// ─── Why TEM section ─────────────────────────────────────────

function WhyTEM() {
  return (
    <div
      className="h-full flex flex-col gap-5 p-6 lg:p-8 overflow-y-auto"
      style={{ animationDelay: '0ms' }}
    >
      {/* Section header */}
      <div className="fade-in-up flex-shrink-0" style={{ animationDelay: '0ms' }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-violet-400">Section 01</span>
          <span className="text-violet-500/40">·</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">The Role</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black gradient-text-purple leading-tight">
          Why Technical Enablement Manager?
        </h2>
        <p className="text-slate-400 mt-2 text-base lg:text-lg">
          Three focused initiatives. One north star: make every AE, SE and SA impossible to outgun.
        </p>
      </div>

      {/* Main content grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">

        {/* ── Passion anchor card (left, spans 1 column on lg) ── */}
        <div
          className="quote-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group cursor-default fade-in-up"
          style={{ animationDelay: '80ms' }}
        >
          {/* Decorative quote mark */}
          <div className="absolute -top-2 right-4 text-[120px] leading-none text-violet-500/8 font-serif select-none pointer-events-none">
            "
          </div>

          <IconBox color="#8B5CF6">
            <Flame className="w-5 h-5" />
          </IconBox>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">The Foundation</span>
            <h3 className="text-xl font-black text-white mt-1.5 leading-snug">
              Learning &amp; Teaching Is My Core
            </h3>
          </div>

          <blockquote className="text-slate-200 text-sm leading-relaxed font-medium border-l-2 border-violet-500/50 pl-4 italic">
            &ldquo;I genuinely enjoy learning and teaching what I know. That brings me joy. And when
            you&rsquo;re having fun, work does not feel like work.&rdquo;
          </blockquote>

          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            The TEM role is the platform to do this at scale — every cohort, every product release,
            every strategic account. Not just doing the work, but <em className="text-violet-300 not-italic font-semibold">multiplying</em> it across the entire field.
          </p>

          <div className="pt-3 border-t border-white/5">
            <StrengthBadge text="TEM = maximum impact through teaching, not just doing" />
          </div>
        </div>

        {/* ── Right column: 3 initiative cards ── */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 auto-rows-fr">

          {/* Initiative #1 — Onboarding */}
          <div
            className="glass-card rounded-2xl p-5 flex flex-col gap-3 accent-border-blue fade-in-up"
            style={{ animationDelay: '160ms' }}
          >
            <div className="flex items-start gap-3">
              <IconBox color="#3B82F6">
                <BookOpen className="w-4 h-4" />
              </IconBox>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Initiative #1</span>
                <h3 className="text-base font-bold text-white mt-0.5 leading-snug">
                  World-Class Onboarding Program
                </h3>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-1">
              Build net-new hands-on labs that every SE and SA cohort goes through — structured
              ground-level expertise from Day 1. No more learning on-the-fly during live customer
              pilots with real revenue on the line.
            </p>
            <GoalBadge text="End Goal → Higher pilot win rates → Higher opportunity win rates" />
          </div>

          {/* Initiative #2 — Demo Platform */}
          <div
            className="glass-card rounded-2xl p-5 flex flex-col gap-3 accent-border-amber fade-in-up"
            style={{ animationDelay: '230ms' }}
          >
            <div className="flex items-start gap-3">
              <IconBox color="#F59E0B">
                <Target className="w-4 h-4" />
              </IconBox>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Initiative #2</span>
                <h3 className="text-base font-bold text-white mt-0.5 leading-snug">
                  Enterprise Brain Demo Platform
                </h3>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-1">
              AEs and SEs enter a prospect name and audience type — the framework surfaces curated
              Glean Assistant prompts, Agents, Prism, Tasks, and platform capabilities. Glean is the
              <span className="text-amber-300 font-semibold"> Enterprise Brain</span>, not just
              Enterprise Search.
            </p>
            <GoalBadge text="End Goal → Demos that land the right message, every time" />
          </div>

          {/* Initiative #3 — Certifications */}
          <div
            className="glass-card rounded-2xl p-5 flex flex-col gap-3 accent-border-emerald fade-in-up sm:col-span-2 lg:col-span-1 xl:col-span-2"
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex items-start gap-3">
              <IconBox color="#10B981">
                <Award className="w-4 h-4" />
              </IconBox>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Initiative #3</span>
                <h3 className="text-base font-bold text-white mt-0.5 leading-snug">
                  Domain Expertise Certification Paths
                </h3>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Badge-based certification tracks tied to strategic verticals and technology domains.
              Credentials that live in email signatures, signal SME depth, and give SEs a career
              growth vector — while giving Glean expert presence in complex conversations with
              accounts like <span className="text-emerald-300 font-semibold">GM, Dell, and 7-Eleven</span>.
            </p>
            <GoalBadge text="End Goal → Career development for SEs + SME depth where it matters most" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Why Now section ─────────────────────────────────────────

function WhyNow() {
  return (
    <div className="h-full flex flex-col gap-5 p-6 lg:p-8 overflow-y-auto">

      {/* Section header */}
      <div className="fade-in-up flex-shrink-0" style={{ animationDelay: '0ms' }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Section 02</span>
          <span className="text-amber-500/40">·</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">The Timing</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black gradient-text-amber leading-tight">
          Why Now?
        </h2>
        <p className="text-slate-400 mt-2 text-base lg:text-lg">
          Three converging pressures. One window that&rsquo;s open right now — and won&rsquo;t stay open forever.
        </p>
      </div>

      {/* Three urgency cards */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">

        {/* Urgency #1 — Velocity */}
        <div
          className="glass-card rounded-2xl p-6 flex flex-col gap-4 group accent-border-amber fade-in-up"
          style={{ animationDelay: '80ms' }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <IconBox color="#F59E0B">
                <Zap className="w-5 h-5" />
              </IconBox>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Reason #1</span>
                <h3 className="text-lg font-black text-white mt-1 leading-snug">
                  Glean is Shipping at Warp Speed
                </h3>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            Product and Engineering are releasing capabilities faster than GTM can absorb them.
            The opportunity is to build a{' '}
            <span className="text-amber-300 font-semibold">"Weekly Product Enablement"</span>{' '}
            cadence — co-designed with PM, Engineering, and PMM, running 3–6 months ahead of
            each release so the field is ready before customers ask.
          </p>

          <UrgencyBadge text="We're currently lagging. Training must precede releases — not scramble to catch up after them." />

          <div className="grid grid-cols-3 gap-2 pt-1">
            {['PM', 'Eng', 'PMM'].map((team) => (
              <div key={team} className="text-center rounded-lg bg-amber-500/8 border border-amber-500/15 py-2">
                <p className="text-amber-300 text-xs font-bold">{team}</p>
                <p className="text-slate-500 text-[10px]">Partner</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency #2 — Strategic accounts */}
        <div
          className="glass-card rounded-2xl p-6 flex flex-col gap-4 group accent-border-rose fade-in-up"
          style={{ animationDelay: '160ms' }}
        >
          <div className="flex items-start gap-3">
            <IconBox color="#F43F5E">
              <Building2 className="w-5 h-5" />
            </IconBox>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400">Reason #2</span>
              <h3 className="text-lg font-black text-white mt-1 leading-snug">
                Strategic Customers Need Depth
              </h3>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            For the biggest accounts, SEs and SAs need deep technology and product-level mastery —
            AI architecture, cloud integrations, security, compliance. A bespoke advanced
            curriculum for Strategic and Enterprise SEs is the infrastructure gap that&rsquo;s
            holding the field back.
          </p>

          <UrgencyBadge text="Complex enterprise conversations require SME presence. That infrastructure doesn't exist yet." />

          <div className="space-y-1.5 pt-1">
            {['GM', 'Dell', '7-Eleven'].map((customer) => (
              <div
                key={customer}
                className="flex items-center gap-2 text-xs text-slate-400 px-3 py-1.5 rounded-lg bg-white/3 border border-white/5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400/70 flex-shrink-0" />
                <span className="font-medium text-slate-300">{customer}</span>
                <span className="text-slate-600 ml-auto">Needs SME depth</span>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency #3 — AI velocity */}
        <div
          className="glass-card rounded-2xl p-6 flex flex-col gap-4 group accent-border-purple fade-in-up"
          style={{ animationDelay: '240ms' }}
        >
          <div className="flex items-start gap-3">
            <IconBox color="#8B5CF6">
              <Brain className="w-5 h-5" />
            </IconBox>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400">Reason #3</span>
              <h3 className="text-lg font-black text-white mt-1 leading-snug">
                AI is Moving at Mach Speed
              </h3>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            The pace of change in AI is mind-boggling. Someone needs to be the internal voice that
            distills the noise, contextualizes it for Glean, gives the field an honest
            good/bad/ugly of the competitive landscape, and delivers it on a{' '}
            <span className="text-violet-300 font-semibold">scheduled, actionable cadence</span>.
          </p>

          <UrgencyBadge text="GTM needs practical ways to demonstrate Glean's advantages over fast-moving competitors — right now." />

          <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">
            <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
            <span>Competitive intel → weekly → field-ready</span>
          </div>
        </div>
      </div>

      {/* Bottom urgency strip */}
      <div
        className="glass-card-static rounded-2xl px-6 py-4 flex items-center justify-between gap-4 flex-shrink-0 fade-in-up border border-amber-500/15"
        style={{ animationDelay: '320ms' }}
      >
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <p className="text-sm text-slate-300">
            <span className="text-white font-bold">The window is open now.</span>{' '}
            The enablement foundation is being built — this is the moment to raise the ceiling and go deeper on the technical side.
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-amber-400 text-sm font-bold flex-shrink-0">
          <span>Act now</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

// ─── Why Me section ──────────────────────────────────────────

function WhyMe() {
  return (
    <div className="h-full flex flex-col gap-5 p-6 lg:p-8 overflow-y-auto">

      {/* Section header */}
      <div className="fade-in-up flex-shrink-0" style={{ animationDelay: '0ms' }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-400">Section 03</span>
          <span className="text-rose-500/40">·</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">The Candidate</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black gradient-text-purple leading-tight">
          Why Me?
        </h2>
        <p className="text-slate-400 mt-2 text-base lg:text-lg">
          Three unfair advantages. Zero ramp-up time needed. Day-one impact guaranteed.
        </p>

        {/* Credential pills */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          {[
            { label: '1+ Year at Glean', color: '#8B5CF6' },
            { label: 'Senior SE', color: '#10B981' },
            { label: 'Full-Cycle Field Experience', color: '#3B82F6' },
            { label: 'Glean Product Expert', color: '#F59E0B' },
          ].map(({ label, color }) => (
            <span
              key={label}
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Three strength cards */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">

        {/* Strength #1 — Battle scars */}
        <div
          className="glass-card rounded-2xl p-6 flex flex-col gap-4 accent-border-rose fade-in-up"
          style={{ animationDelay: '80ms' }}
        >
          <IconBox color="#F43F5E">
            <ShieldCheck className="w-5 h-5" />
          </IconBox>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">Strength #1</span>
            <h3 className="text-xl font-black text-white mt-1 leading-snug">
              Battle-Tested in the Field
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-0.5 uppercase tracking-wide">Relatability</p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            I have the actual battle scars from being in the field at Glean. I know the landmines
            I unintentionally stepped on, I learned from every one of them, and I know exactly how
            to help the rest of the field navigate a better path. This curriculum won&rsquo;t be
            theoretical — it will be lived.
          </p>

          <div className="space-y-2 pt-2 border-t border-white/5">
            <StrengthBadge text="Real field experience → Real curriculum value" />
            <StrengthBadge text="Know what breaks → Build what prevents it" />
          </div>
        </div>

        {/* Strength #2 — Passion */}
        <div
          className="glass-card rounded-2xl p-6 flex flex-col gap-4 accent-border-amber fade-in-up"
          style={{ animationDelay: '160ms' }}
        >
          <IconBox color="#F59E0B">
            <Flame className="w-5 h-5" />
          </IconBox>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Strength #2</span>
            <h3 className="text-xl font-black text-white mt-1 leading-snug">
              Passion Meets Platform
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-0.5 uppercase tracking-wide">Passion / Vision</p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            I am genuinely passionate about learning and teaching. The TEM role gives me the
            platform to do this at scale — far more than the SE role allows. This isn&rsquo;t a
            career pivot. It&rsquo;s a natural evolution toward maximum leverage and impact. The
            energy I bring to every enablement moment is real — not performative.
          </p>

          <div className="space-y-2 pt-2 border-t border-white/5">
            <StrengthBadge text="Teaching at scale > doing in isolation" />
            <StrengthBadge text="Joy in the work → excellence in the output" />
          </div>
        </div>

        {/* Strength #3 — Institutional knowledge */}
        <div
          className="glass-card rounded-2xl p-6 flex flex-col gap-4 accent-border-blue fade-in-up"
          style={{ animationDelay: '240ms' }}
        >
          <IconBox color="#3B82F6">
            <Network className="w-5 h-5" />
          </IconBox>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Strength #3</span>
            <h3 className="text-xl font-black text-white mt-1 leading-snug">
              Deep Institutional Knowledge
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-0.5 uppercase tracking-wide">Institutional depth</p>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed flex-1">
            1+ year at Glean means I&rsquo;ve watched the product evolve first-hand. I know the
            nooks and crannies where information lives, I understand the org structures of GTM, PM,
            Engineering, and PMM — and I know exactly which stakeholders to partner with to make
            things happen fast.
          </p>

          <div className="space-y-2 pt-2 border-t border-white/5">
            <div className="grid grid-cols-2 gap-1.5">
              {['GTM', 'PM', 'Eng', 'PMM'].map((org) => (
                <div
                  key={org}
                  className="text-center rounded-lg bg-blue-500/8 border border-blue-500/15 py-1.5"
                >
                  <p className="text-blue-300 text-xs font-bold">{org}</p>
                </div>
              ))}
            </div>
            <StrengthBadge text="Year 1 ramp = zero. Day 1 impact = maximum." />
          </div>
        </div>
      </div>

      {/* CTA closing strip */}
      <div
        className="quote-card rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-shrink-0 fade-in-up"
        style={{ animationDelay: '320ms' }}
      >
        <div>
          <p className="text-white font-black text-lg leading-tight">
            Ready to build this — together.
          </p>
          <p className="text-slate-400 text-sm mt-1">
            I&rsquo;ve lived the problem. I have the vision. Let me build the solution.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-violet-500/25">
            N
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Navish Bahl</p>
            <p className="text-violet-400 text-xs font-semibold">Senior SE → TEM</p>
          </div>
          <ArrowRight className="w-5 h-5 text-violet-400" />
        </div>
      </div>
    </div>
  );
}

// ─── Hero / Landing ───────────────────────────────────────────

function Hero({ onEnter }: { onEnter: (tab: ActiveTab) => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-8 gap-8">
      {/* Eyebrow */}
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/25 bg-violet-500/8 fade-in-up"
        style={{ animationDelay: '0ms' }}
      >
        <Sparkles className="w-3.5 h-3.5 text-violet-400" />
        <span className="text-violet-300 text-xs font-semibold uppercase tracking-widest">
          Application · Technical Enablement Manager · Glean
        </span>
      </div>

      {/* Hero headline */}
      <div className="fade-in-up" style={{ animationDelay: '80ms' }}>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
          <span className="shimmer-text">Making the case</span>
          <br />
          <span className="text-white">for TEM at Glean.</span>
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
          A first-principles argument for why this role matters, why the moment is now,
          and why I&rsquo;m the right person to build it.
        </p>
      </div>

      {/* Author badge */}
      <div
        className="flex items-center gap-3 fade-in-up"
        style={{ animationDelay: '160ms' }}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 flex items-center justify-center text-white font-black shadow-lg shadow-violet-500/25">
          N
        </div>
        <div className="text-left">
          <p className="text-white font-bold text-sm">Navish Bahl</p>
          <p className="text-slate-400 text-xs">Senior Solutions Engineer · Glean</p>
        </div>
      </div>

      {/* Navigation CTAs */}
      <div
        className="flex flex-col sm:flex-row items-center gap-3 fade-in-up"
        style={{ animationDelay: '240ms' }}
      >
        <button
          onClick={() => onEnter('tem')}
          className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5"
        >
          <Target className="w-4 h-4" />
          Why TEM?
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => onEnter('now')}
          className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass-card hover:border-amber-500/30 text-white font-bold text-sm transition-all duration-200"
        >
          <Zap className="w-4 h-4 text-amber-400" />
          Why Now?
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-slate-400" />
        </button>
        <button
          onClick={() => onEnter('me')}
          className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass-card hover:border-rose-500/30 text-white font-bold text-sm transition-all duration-200"
        >
          <Trophy className="w-4 h-4 text-rose-400" />
          Why Me?
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-slate-400" />
        </button>
      </div>

      {/* Bottom hint */}
      <div
        className="flex items-center gap-1.5 text-slate-600 text-xs fade-in-up"
        style={{ animationDelay: '320ms' }}
      >
        <Lightbulb className="w-3.5 h-3.5" />
        <span>Click any section or use the nav above to explore</span>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────

export default function Page() {
  const [active, setActive] = useState<ActiveTab | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const switchTab = useCallback(
    (tab: ActiveTab) => {
      if (tab === active) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setActive(tab);
        setIsTransitioning(false);
      }, 240);
    },
    [active]
  );

  const goHome = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(null);
      setIsTransitioning(false);
    }, 240);
  }, []);

  const SEQUENCE: (ActiveTab | null)[] = [null, 'tem', 'now', 'me'];
  const currentIndex = SEQUENCE.indexOf(active);
  const nextValue = currentIndex < SEQUENCE.length - 1 ? SEQUENCE[currentIndex + 1] : null;
  const nextLabel = nextValue === 'tem' ? 'Why TEM?' : nextValue === 'now' ? 'Why Now?' : nextValue === 'me' ? 'Why Me?' : null;

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#05091A] dot-grid">

      {/* ── Atmospheric background orbs ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none noise-overlay">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>

      {/* ── Header ── */}
      <header className="relative z-50 flex-shrink-0 h-[60px] border-b border-white/5 backdrop-blur-2xl bg-[#05091A]/75">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-4">

          {/* Glean wordmark */}
          <button
            onClick={goHome}
            className="flex items-center gap-2.5 group flex-shrink-0"
            title="Back to home"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center shadow-md shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white font-black text-lg tracking-tight group-hover:text-violet-200 transition-colors">
              glean
            </span>
          </button>

          {/* Divider */}
          <div className="hidden sm:flex items-center gap-3 text-slate-600 text-xs flex-shrink-0">
            <div className="w-px h-4 bg-white/10" />
            <span className="font-medium">TEM Application</span>
          </div>

          {/* Navigation tabs */}
          <nav className="flex items-center gap-1 bg-white/4 rounded-xl p-1 border border-white/5">
            <button
              onClick={goHome}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                active === null
                  ? 'bg-white/10 text-white'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/4'
              }`}
            >
              Overview
            </button>
            {NAV_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  active === tab.id
                    ? 'bg-violet-600 text-white tab-active-glow'
                    : 'text-slate-500 hover:text-white hover:bg-white/4'
                }`}
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            ))}
          </nav>

          {/* Name badge */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 flex items-center justify-center text-white font-black text-xs shadow-md">
              N
            </div>
            <div>
              <p className="text-white text-xs font-bold leading-tight">Navish Bahl</p>
              <p className="text-slate-500 text-[10px] leading-tight">Senior SE → TEM</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main content ── */}
      <main
        className="relative flex-1 overflow-hidden z-10"
        style={{
          transition: 'opacity 0.24s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: isTransitioning ? 0 : 1,
        }}
      >
        <div className="h-full max-w-7xl mx-auto w-full">
          {active === null && <Hero onEnter={switchTab} />}
          {active === 'tem' && <WhyTEM />}
          {active === 'now' && <WhyNow />}
          {active === 'me' && <WhyMe />}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-50 flex-shrink-0 h-12 border-t border-white/5 backdrop-blur-xl bg-[#05091A]/60 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          {/* Progress strip (sections only) */}
          <div className="flex items-center gap-3">
            {active !== null ? (
              NAV_TABS.map((tab, i) => (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  className="flex items-center gap-1.5 group"
                >
                  <div
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      active === tab.id
                        ? 'bg-violet-400 w-8'
                        : NAV_TABS.findIndex((t) => t.id === active) > i
                        ? 'bg-violet-600/50 w-5'
                        : 'bg-white/10 w-5'
                    }`}
                  />
                  <span
                    className={`text-[10px] font-semibold transition-colors ${
                      active === tab.id ? 'text-violet-300' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))
            ) : (
              <div className="flex items-center gap-1 text-slate-600 text-[10px]">
                <Users className="w-3 h-3" />
                <span>Navish Bahl · Glean · 2026</span>
              </div>
            )}
          </div>

          {/* Next button */}
          {nextLabel && (
            <button
              onClick={() => nextValue ? switchTab(nextValue) : goHome()}
              className="group flex items-center gap-2 px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-all duration-200 shadow-md shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5"
            >
              {nextLabel}
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
