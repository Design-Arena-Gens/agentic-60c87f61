import { Screen } from "@/components/Screen";

type NavKey = "home" | "care" | "chat" | "profile";

const navItems: { key: NavKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "care", label: "Care" },
  { key: "chat", label: "Chat" },
  { key: "profile", label: "Profile" },
];

function BottomNav({ active }: { active: NavKey }) {
  return (
    <nav className="flex items-center justify-between rounded-[24px] bg-sand px-4 py-3 shadow-[0_6px_18px_rgba(33,60,50,0.12)]">
      {navItems.map((item) => {
        const isActive = item.key === active;
        return (
          <button
            key={item.key}
            className={`flex h-12 w-14 flex-col items-center justify-center rounded-[18px] text-xs font-medium transition-colors ${
              isActive
                ? "bg-primary text-white shadow-[0_8px_18px_rgba(45,95,79,0.28)]"
                : "text-ink-muted hover:bg-primary-soft/40 hover:text-primary-dark"
            }`}
          >
            <span
              className={`mb-1 inline-flex h-6 w-6 items-center justify-center rounded-full ${
                isActive ? "bg-white/20" : "bg-primary-soft/40"
              }`}
            >
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  isActive ? "bg-white" : "bg-primary"
                }`}
              />
            </span>
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary-soft/30 px-3 py-1 text-xs font-medium text-primary-dark">
      {children}
    </span>
  );
}

type StatTone = "primary" | "success" | "warning";

function StatCard({
  title,
  value,
  trend,
  tone = "primary",
}: {
  title: string;
  value: string;
  trend?: string;
  tone?: StatTone;
}) {
  const toneClasses: Record<StatTone, string> = {
    primary: "bg-primary/10 text-primary-dark",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
  };

  return (
    <div className="flex flex-col gap-2 rounded-[18px] bg-surface p-4 shadow-[0_6px_16px_rgba(0,0,0,0.08)]">
      <p className="text-sm text-ink-muted">{title}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold text-ink">{value}</p>
        {trend ? (
          <span
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
              toneClasses[tone]
            }`}
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-current" />
            {trend}
          </span>
        ) : null}
      </div>
    </div>
  );
}

type PillTone = "primary" | "success" | "warning" | "error";

function ProgressPill({
  label,
  value,
  tone = "primary",
}: {
  label: string;
  value: string;
  tone?: PillTone;
}) {
  const toneStyles: Record<PillTone, string> = {
    primary: "bg-primary-soft/40 text-primary-dark",
    success: "bg-success/20 text-success",
    warning: "bg-warning/20 text-warning",
    error: "bg-error/20 text-error",
  };

  return (
    <div
      className={`flex flex-col gap-1 rounded-[14px] px-3 py-2 text-xs font-medium ${toneStyles[tone]}`}
    >
      <span>{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}

function DividerHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <span className="text-xs font-semibold uppercase tracking-[0.26em] text-ink-muted">
        {label}
      </span>
      <span className="h-px w-full bg-primary-soft/40" />
    </div>
  );
}

export default function Home() {
  const palette = [
    { name: "Primary Green", value: "#2D5F4F" },
    { name: "Secondary Green", value: "#90B8A8" },
    { name: "Accent Brown", value: "#6B4E3D" },
    { name: "Background", value: "#F5F5F0" },
    { name: "Ink", value: "#1A1A1A" },
    { name: "Muted Ink", value: "#6B6B6B" },
  ];

  const typography = [
    { label: "Heading Large", size: "30px / Bold" },
    { label: "Heading Medium", size: "24px / Semibold" },
    { label: "Heading Small", size: "18px / Semibold" },
    { label: "Body", size: "16px / Regular" },
    { label: "Caption", size: "13px / Medium" },
    { label: "Button", size: "16px / Semibold" },
  ];

  return (
    <main className="bg-sand pb-24 pt-16">
      <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-12 px-6">
        <section className="grid gap-12 rounded-[28px] bg-surface p-10 shadow-[0_18px_48px_rgba(33,60,50,0.12)] lg:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col gap-6">
            <Tag>Avicure · Mobile Design System</Tag>
            <h1 className="text-4xl font-semibold text-ink tracking-[-0.02em]">
              Unified care journeys for patients, doctors, labs, and hospitals.
            </h1>
            <p className="max-w-xl text-base text-ink-muted">
              Part 1/10 · Overview pack crafted for Avicure&apos;s AI-guided
              healthcare platform. This exploration delivers 18 high-fidelity
              mobile screens with cohesive typography, color hierarchy, and
              component design aligned to the Avicure brand language.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-[14px] bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(45,95,79,0.28)] transition-transform hover:-translate-y-1">
                Explore Screens
              </button>
              <button className="rounded-[14px] border border-primary/40 px-6 py-3 text-sm font-semibold text-primary-dark transition hover:border-primary hover:text-primary">
                Download Spec Sheet
              </button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[20px] bg-primary/10 p-4">
              <h3 className="text-sm font-semibold text-primary-dark">
                Color System
              </h3>
              <div className="mt-4 grid gap-3">
                {palette.map((swatch) => (
                  <div
                    key={swatch.name}
                    className="flex items-center justify-between rounded-[14px] bg-surface p-3 shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                  >
                    <span className="text-xs font-medium text-ink-muted">
                      {swatch.name}
                    </span>
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-semibold text-white"
                      style={{ backgroundColor: swatch.value }}
                    >
                      {swatch.value.replace("#", "")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[20px] bg-primary-soft/30 p-4">
              <h3 className="text-sm font-semibold text-primary-dark">
                Typography
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {typography.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-[14px] bg-surface px-3 py-2 text-xs text-ink-muted shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                  >
                    <span className="font-semibold text-ink">{item.label}</span>
                    <span>{item.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-ink">
              Mobile experience overview · 18 artboards
            </h2>
            <p className="max-w-3xl text-sm text-ink-muted">
              The following flows articulate Avicure&apos;s patient-centric
              experience across onboarding, AI symptom triage, appointment
              orchestration, remote monitoring, and collaborative care.
            </p>
          </div>

          <div className="grid gap-10 xl:grid-cols-2 2xl:grid-cols-3">
            <Screen
              title="Gentle Onboarding"
              description="Intro narrative highlighting AI assistance, continuity of care, and multi-provider access."
              tag="Welcome"
              accent={<span className="text-xs text-ink-muted">01</span>}
              footer={<BottomNav active="home" />}
            >
              <div className="flex flex-1 flex-col gap-6">
                <div className="rounded-[20px] bg-primary/12 p-6 text-ink">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                      AI
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-primary-dark">
                        Your AI Health Companion
                      </p>
                      <p className="text-xs text-ink-muted">
                        Evidence-based triage, doctor coordination, proactive
                        alerts.
                      </p>
                    </div>
                  </div>
                  <button className="mt-6 w-full rounded-[16px] bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,95,79,0.32)]">
                    Create Avicure ID
                  </button>
                  <button className="mt-3 w-full text-sm font-semibold text-primary hover:text-primary-dark">
                    Already a member? Sign in
                  </button>
                </div>
                <div className="grid gap-3 rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <div className="flex justify-between text-xs text-ink-muted">
                    <span>What you get</span>
                    <span>Trusted by 180k+ families</span>
                  </div>
                  <div className="flex flex-col gap-3 text-sm text-ink">
                    <div className="flex items-center justify-between">
                      <span>• Doctor matchmaking by specialty</span>
                      <span className="rounded-full bg-primary-soft/40 px-2 py-1 text-xs font-medium text-primary-dark">
                        Personalized
                      </span>
                    </div>
                    <span>• Lab pick-up scheduling & digital results vault</span>
                    <span>• Remote vitals syncing from wearables</span>
                  </div>
                </div>
              </div>
            </Screen>

            <Screen
              title="Sign In"
              description="Passwordless sign-in with biometric emphasis and enterprise SSO for hospital staff."
              tag="Auth"
              accent={<span className="text-xs text-ink-muted">02</span>}
              footer={<BottomNav active="profile" />}
            >
              <div className="flex flex-1 flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary-dark">
                    Welcome Back
                  </p>
                  <h3 className="text-2xl font-semibold text-ink">
                    Continue your care plan
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="flex flex-col gap-2 text-xs font-medium text-ink-muted">
                    Email address
                    <input
                      className="rounded-[12px] border border-primary-soft/60 bg-sand px-4 py-3 text-sm text-ink focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      defaultValue="amira@avicure.health"
                    />
                  </label>
                  <button className="flex h-14 items-center justify-center gap-2 rounded-[16px] bg-primary px-4 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(45,95,79,0.32)]">
                    Continue with Magic Link
                  </button>
                  <button className="h-14 rounded-[16px] border border-primary-soft/60 text-sm font-semibold text-primary-dark transition hover:border-primary hover:text-primary">
                    Use password
                  </button>
                  <div className="flex items-center gap-3 text-xs text-ink-muted">
                    <span className="h-px flex-1 bg-primary-soft/40" />
                    or
                    <span className="h-px flex-1 bg-primary-soft/40" />
                  </div>
                  <button className="flex h-14 items-center justify-center gap-3 rounded-[16px] bg-surface px-4 text-sm font-semibold text-ink shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft/50 text-[11px] font-semibold text-primary-dark">
                      ID
                    </span>
                    Hospital SSO
                  </button>
                </div>
                <p className="text-center text-xs text-ink-muted">
                  Securely backed by Avicure Protect · SOC2 Type II
                </p>
              </div>
            </Screen>

            <Screen
              title="Patient Command Center"
              description="Unified dashboard summarizing today’s care brief, vitals, and upcoming engagements."
              tag="Home"
              accent={<span className="text-xs text-ink-muted">03</span>}
              footer={<BottomNav active="home" />}
            >
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex items-center justify-between rounded-[18px] bg-primary px-5 py-4 text-white shadow-[0_16px_30px_rgba(45,95,79,0.32)]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                      Good Morning Amira
                    </p>
                    <p className="mt-1 text-lg font-semibold">
                      Your care today · 3 actions
                    </p>
                  </div>
                  <div className="flex flex-col items-end text-xs">
                    <span className="rounded-full bg-white/15 px-3 py-1 font-medium">
                      AI overview ready
                    </span>
                    <span className="mt-2 text-[11px] text-white/70">
                      Updated 12 mins ago
                    </span>
                  </div>
                </div>

                <div className="grid gap-3">
                  <StatCard
                    title="Cardio Score"
                    value="82 · Stable"
                    trend="+4.2% vs last week"
                    tone="success"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <StatCard
                      title="Blood Pressure"
                      value="118 / 76"
                      trend="On track"
                      tone="primary"
                    />
                    <StatCard
                      title="Sleep Quality"
                      value="7h 42m"
                      trend="• Consistent"
                      tone="warning"
                    />
                  </div>
                </div>

                <div className="rounded-[18px] bg-surface p-4 shadow-[0_10px_26px_rgba(0,0,0,0.08)]">
                  <DividerHeading label="Agenda" />
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-ink">
                          09:30 · Cardio Televisit
                        </p>
                        <p className="text-xs text-ink-muted">
                          Dr. Malik · Join with Avicure Connect
                        </p>
                      </div>
                      <Tag>Join</Tag>
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-ink">
                          Blood panel pickup
                        </p>
                        <p className="text-xs text-ink-muted">
                          LabRite courier today · 6:00 - 6:45 PM
                        </p>
                      </div>
                      <span className="rounded-full bg-primary-soft/40 px-3 py-1 text-xs font-semibold text-primary-dark">
                        Track
                      </span>
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-ink">
                          Update medications log
                        </p>
                        <p className="text-xs text-ink-muted">
                          Add refill confirmation
                        </p>
                      </div>
                      <input type="checkbox" className="h-4 w-4 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </Screen>

            <Screen
              title="AI Symptom Triage"
              description="Conversational triage assistant translating inputs to structured clinical data."
              tag="AI"
              accent={<span className="text-xs text-ink-muted">04</span>}
              footer={<BottomNav active="care" />}
            >
              <div className="flex flex-1 flex-col gap-4">
                <div className="grid gap-3 rounded-[20px] bg-primary-dark/90 p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                    Avicure AI
                  </p>
                  <p className="text-lg font-semibold">
                    “Describe what&apos;s bothering you today.”
                  </p>
                  <div className="rounded-[16px] bg-white/15 p-3 text-sm text-white/80">
                    <p>
                      <span className="font-semibold text-white">
                        Input blueprint:
                      </span>{" "}
                      What you feel, when it started, any recent changes,
                      relevant meds or procedures.
                    </p>
                  </div>
                  <button className="rounded-[16px] bg-white/15 px-4 py-3 text-sm font-semibold">
                    Speak symptoms
                  </button>
                </div>

                <div className="flex flex-col gap-4 rounded-[18px] bg-surface p-4 shadow-[0_12px_24px_rgba(0,0,0,0.1)]">
                  <DividerHeading label="Summary" />
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-ink-muted">Pain area</span>
                      <span className="font-semibold text-ink">Chest</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ink-muted">Onset</span>
                      <span className="font-semibold text-ink">
                        Started 2 hours ago
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-ink-muted">Alert level</span>
                      <span className="rounded-full bg-warning/20 px-3 py-1 text-xs font-semibold text-warning">
                        Elevated · consult within 2h
                      </span>
                    </div>
                  </div>
                  <button className="rounded-[16px] bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(45,95,79,0.28)]">
                    Send to care navigator
                  </button>
                </div>
              </div>
            </Screen>

            <Screen
              title="Doctor Matching"
              description="Smart doctor suggestions blended with availability, insurance, and patient fit score."
              tag="Care"
              accent={<span className="text-xs text-ink-muted">05</span>}
              footer={<BottomNav active="care" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="rounded-[18px] bg-primary/12 p-4">
                  <p className="text-xs uppercase tracking-[0.26em] text-primary-dark">
                    AI Recommendation
                  </p>
                  <p className="mt-2 text-lg font-semibold text-ink">
                    Top cardiologists for your episode
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Tag>Insurance: Avicure Blue</Tag>
                    <Tag>Location: Virtual</Tag>
                    <Tag>Language: English + Arabic</Tag>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    {
                      name: "Dr. Rashid Malik",
                      meta: "Interventional Cardiologist · NY Presbyterian",
                      rating: "4.9",
                      fit: "92% match",
                      next: "Today · 12:40 PM",
                    },
                    {
                      name: "Dr. Hana Liu",
                      meta: "Cardiac Imaging · Mount Sinai",
                      rating: "4.8",
                      fit: "88% match",
                      next: "Tomorrow · 9:10 AM",
                    },
                  ].map((doctor) => (
                    <div
                      key={doctor.name}
                      className="flex flex-col gap-3 rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-semibold text-ink">
                            {doctor.name}
                          </p>
                          <p className="text-xs text-ink-muted">
                            {doctor.meta}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1 text-xs">
                          <span className="rounded-full bg-success/10 px-2 py-1 font-semibold text-success">
                            {doctor.fit}
                          </span>
                          <span className="text-ink-muted">
                            ⭐️ {doctor.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-ink-muted">
                        <span>Next slot</span>
                        <span className="rounded-full bg-primary px-3 py-1 text-white">
                          {doctor.next}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Screen>

            <Screen
              title="Appointment Confirmation"
              description="Coordinated booking with pre-visit checklist, labs, and concierge add-ons."
              tag="Scheduling"
              accent={<span className="text-xs text-ink-muted">06</span>}
              footer={<BottomNav active="care" />}
            >
              <div className="flex flex-1 flex-col gap-4">
                <div className="rounded-[20px] bg-primary px-5 py-4 text-white shadow-[0_16px_36px_rgba(45,95,79,0.3)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                    Confirmed
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Cardio Televisit · Tomorrow 09:30
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <Tag>Zoom Auto-Join</Tag>
                    <Tag>Prep time 6 mins</Tag>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)] text-sm">
                  <DividerHeading label="Before the visit" />
                  <div className="flex items-start justify-between">
                    <span>Upload morning vitals</span>
                    <span className="text-xs text-ink-muted">Due 08:30</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span>Attach recent lab results</span>
                    <button className="rounded-full bg-primary-soft/40 px-2 py-1 text-xs font-semibold text-primary-dark">
                      Add files
                    </button>
                  </div>
                  <div className="flex items-start justify-between">
                    <span>Note questions for Dr. Malik</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark">
                      Checklist
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 rounded-[16px] bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,95,79,0.28)]">
                    Add to calendar
                  </button>
                  <button className="rounded-[16px] border border-primary/40 px-4 py-3 text-sm font-semibold text-primary-dark">
                    Invite caregiver
                  </button>
                </div>
              </div>
            </Screen>

            <Screen
              title="Clinical Timeline"
              description="Vertical timeline aligning doctor notes, labs, and pharmacies across providers."
              tag="Journey"
              accent={<span className="text-xs text-ink-muted">07</span>}
              footer={<BottomNav active="home" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-ink">Care sequence</p>
                  <span className="text-xs text-ink-muted">Last sync · 2m</span>
                </div>
                <div className="relative flex-1">
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-primary-soft/60" />
                  <div className="flex flex-col gap-6 pl-10">
                    {[
                      {
                        title: "Televisit · Cardio",
                        detail: "Discussed symptom episode. Adjusted beta blockers.",
                        time: "09:30",
                        tag: "Doctor Malik",
                      },
                      {
                        title: "Lab Pickup Scheduled",
                        detail: "LabRite courier ETA 6:00 PM · Home collection.",
                        time: "08:10",
                        tag: "Diagnostics",
                      },
                      {
                        title: "Medication Refill",
                        detail: "Sent to Avicure Pharmacy · ETA Friday",
                        time: "Yesterday",
                        tag: "Rx",
                      },
                    ].map((event) => (
                      <div key={event.title} className="relative rounded-[18px] bg-surface p-4 shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
                        <span className="absolute left-[-34px] top-5 flex h-4 w-4 items-center justify-center rounded-full border-4 border-surface bg-primary shadow-[0_0_0_4px_rgba(45,95,79,0.12)]" />
                        <div className="flex items-center justify-between text-xs text-ink-muted">
                          <span>{event.time}</span>
                          <span className="rounded-full bg-primary/10 px-2 py-1 font-semibold text-primary-dark">
                            {event.tag}
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-ink">
                          {event.title}
                        </p>
                        <p className="text-xs text-ink-muted">{event.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Screen>

            <Screen
              title="Lab Results Vault"
              description="Structured results with trending insight, ranges, and doctor annotations."
              tag="Labs"
              accent={<span className="text-xs text-ink-muted">08</span>}
              footer={<BottomNav active="care" />}
            >
              <div className="flex flex-1 flex-col gap-4">
                <div className="rounded-[18px] bg-primary px-5 py-4 text-white shadow-[0_16px_30px_rgba(45,95,79,0.3)]">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/70">
                    Lipid Panel
                  </p>
                  <p className="mt-1 text-lg font-semibold">Collected · Today</p>
                  <span className="text-xs text-white/70">
                    Annotated by Dr. Malik
                  </span>
                </div>
                <div className="grid gap-3 text-sm">
                  {[
                    {
                      metric: "LDL Cholesterol",
                      value: "86 mg/dL",
                      range: "Optimal",
                      tone: "success",
                    },
                    {
                      metric: "HDL Cholesterol",
                      value: "44 mg/dL",
                      range: "Slightly low · +Fiber plan",
                      tone: "warning",
                    },
                    {
                      metric: "Triglycerides",
                      value: "152 mg/dL",
                      range: "Monitor",
                      tone: "warning",
                    },
                  ].map((item) => (
                    <div
                      key={item.metric}
                      className="rounded-[18px] bg-surface p-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                    >
                      <div className="flex items-center justify-between text-xs text-ink-muted">
                        <span>{item.metric}</span>
                        <span
                          className={`rounded-full px-2 py-1 font-semibold ${
                            item.tone === "success"
                              ? "bg-success/10 text-success"
                              : "bg-warning/20 text-warning"
                          }`}
                        >
                          {item.range}
                        </span>
                      </div>
                      <p className="mt-2 text-lg font-semibold text-ink">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[18px] bg-primary-soft/30 p-4 text-sm text-primary-dark">
                  <p className="font-semibold">Doctor Notes</p>
                  <p className="mt-2 text-xs">
                    Maintain current medication. Increase Omega-3 intake and log
                    in nutrition tracker. Repeat panel in 6 weeks.
                  </p>
                </div>
              </div>
            </Screen>

            <Screen
              title="Vitals · Live Sync"
              description="Real-time wearable sync with trend spark lines and alert thresholds."
              tag="Monitoring"
              accent={<span className="text-xs text-ink-muted">09</span>}
              footer={<BottomNav active="home" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-ink">
                    Avicure Pulseband
                  </p>
                  <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                    Connected
                  </span>
                </div>
                <div className="rounded-[20px] bg-primary px-5 py-4 text-white shadow-[0_16px_32px_rgba(45,95,79,0.3)]">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/70">
                    HRV · 5 min avg
                  </p>
                  <p className="mt-2 text-3xl font-semibold">72 ms</p>
                  <p className="text-xs text-white/70">Resilient · +6% vs avg</p>
                </div>
                <div className="grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <ProgressPill label="Resting HR" value="64 bpm" tone="success" />
                    <ProgressPill label="Oxygen" value="98%" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <ProgressPill label="Steps" value="5,430" />
                    <ProgressPill label="Active minutes" value="42 min" />
                    <ProgressPill label="Calories" value="560 kcal" />
                  </div>
                </div>
                <div className="rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <DividerHeading label="Alerts" />
                  <div className="flex flex-col gap-3 text-xs text-ink-muted">
                    <div className="flex items-center justify-between">
                      <span>Nighttime HR spike</span>
                      <span className="rounded-full bg-warning/20 px-3 py-1 font-semibold text-warning">
                        Cleared
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Device battery</span>
                      <span className="rounded-full bg-success/10 px-3 py-1 font-semibold text-success">
                        76%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Screen>

            <Screen
              title="Medication Adherence"
              description="Daily regimen tracker with refill automation & caregiver escalation."
              tag="Pharmacy"
              accent={<span className="text-xs text-ink-muted">10</span>}
              footer={<BottomNav active="home" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="rounded-[20px] bg-primary px-5 py-4 text-white shadow-[0_16px_34px_rgba(45,95,79,0.32)]">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/70">
                    Today&apos;s medications
                  </p>
                  <p className="mt-2 text-lg font-semibold">3 doses · On time</p>
                </div>
                <div className="rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <DividerHeading label="Morning" />
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-semibold text-ink">Metoprolol 25mg</p>
                      <p className="text-xs text-ink-muted">Taken · 07:15 AM</p>
                    </div>
                    <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                      ✅
                    </span>
                  </div>
                  <DividerHeading label="Midday" />
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-semibold text-ink">Aspirin 81mg</p>
                      <p className="text-xs text-ink-muted">
                        Due in 45 min · 12:30 PM
                      </p>
                    </div>
                    <button className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      Take now
                    </button>
                  </div>
                  <DividerHeading label="Evening" />
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-semibold text-ink">Atorvastatin 10mg</p>
                      <p className="text-xs text-ink-muted">Auto reminder · 09:00 PM</p>
                    </div>
                    <span className="rounded-full bg-primary-soft/40 px-3 py-1 text-xs font-semibold text-primary-dark">
                      Snooze
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 rounded-[16px] bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,95,79,0.3)]">
                    Refill via Avicure
                  </button>
                  <button className="rounded-[16px] border border-primary/40 px-4 py-3 text-sm font-semibold text-primary-dark">
                    Share with caregiver
                  </button>
                </div>
              </div>
            </Screen>

            <Screen
              title="Care Team Chat"
              description="Conversation with AI summaries, handoff signals, and quick actions."
              tag="Collaboration"
              accent={<span className="text-xs text-ink-muted">11</span>}
              footer={<BottomNav active="chat" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      RM
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        Dr. Malik · Cardio
                      </p>
                      <p className="text-xs text-success">Online now</p>
                    </div>
                  </div>
                  <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white">
                    Start call
                  </button>
                </div>
                <div className="flex flex-1 flex-col gap-3 rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <div className="self-start rounded-[16px] bg-primary/10 px-3 py-2 text-sm text-ink">
                    “Shared today&apos;s vitals. HR spike overnight.”
                  </div>
                  <div className="self-end rounded-[16px] bg-primary px-3 py-2 text-sm text-white">
                    “Reviewed. Let&apos;s add ECG task tonight.”
                  </div>
                  <div className="self-start rounded-[16px] bg-primary/10 px-3 py-2 text-sm text-ink">
                    “Should we adjust beta blockers?”
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-[16px] bg-surface p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                  <input
                    className="flex-1 rounded-[12px] bg-sand px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Share updates or ask Avicure AI..."
                  />
                  <button className="rounded-full bg-primary p-3 text-white shadow-[0_10px_20px_rgba(45,95,79,0.25)]">
                    ➤
                  </button>
                </div>
              </div>
            </Screen>

            <Screen
              title="Telehealth Call"
              description="Video interface with shared context cards and emergency escalation."
              tag="Visit"
              accent={<span className="text-xs text-ink-muted">12</span>}
              footer={<BottomNav active="care" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="relative h-48 overflow-hidden rounded-[24px] bg-primary/16">
                  <div className="absolute inset-0 flex items-center justify-center text-primary-dark/60">
                    Live video feed
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-[0_8px_18px_rgba(45,95,79,0.3)]">
                    03:42
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-primary-dark shadow">
                    Recording consented
                  </span>
                </div>
                <div className="flex flex-1 gap-3">
                  <div className="flex-1 rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)] text-xs">
                    <p className="text-sm font-semibold text-ink">
                      Shared Snapshot
                    </p>
                    <div className="mt-3 flex flex-col gap-2 text-ink-muted">
                      <span>• HR trend +6% overnight</span>
                      <span>• Chest tightness episodes: 2</span>
                      <span>• Medication adherence 100%</span>
                    </div>
                    <button className="mt-4 w-full rounded-[14px] bg-primary px-4 py-2 text-sm font-semibold text-white">
                      View vitals timeline
                    </button>
                  </div>
                  <div className="w-24 rounded-[18px] bg-primary-soft/30 p-3 text-xs text-primary-dark">
                    <p className="font-semibold">Quick Actions</p>
                    <div className="mt-3 flex flex-col gap-2">
                      <button className="rounded-[12px] bg-surface px-2 py-2 shadow">
                        Add Order
                      </button>
                      <button className="rounded-[12px] bg-surface px-2 py-2 shadow">
                        Share Screen
                      </button>
                      <button className="rounded-[12px] bg-error/10 px-2 py-2 text-error">
                        Escalate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-[20px] bg-primary px-5 py-4 text-white shadow-[0_16px_38px_rgba(45,95,79,0.32)]">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                      Mute
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                      Camera
                    </span>
                  </div>
                  <button className="rounded-full bg-error px-4 py-2 text-xs font-semibold text-white shadow-lg">
                    End call
                  </button>
                </div>
              </div>
            </Screen>

            <Screen
              title="Care Plan Builder"
              description="Doctor side composable plan with tasks, meds, labs, and automation."
              tag="Provider"
              accent={<span className="text-xs text-ink-muted">13</span>}
              footer={<BottomNav active="care" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="rounded-[18px] bg-primary px-5 py-4 text-white shadow-[0_16px_32px_rgba(45,95,79,0.3)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                    Plan template
                  </p>
                  <p className="mt-1 text-lg font-semibold">
                    Post-visit hybrid care · 4 weeks
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-3 rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  {[
                    {
                      title: "Daily Morning Check-in",
                      detail: "Patient logs BP & symptoms · 08:00 AM",
                    },
                    {
                      title: "Lab Follow-up",
                      detail: "Repeat lipid panel · Week 3",
                    },
                    {
                      title: "Medication Adjustment Review",
                      detail: "AI monitors side effects · Auto escalate",
                    },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[14px] border border-primary-soft/50 p-3 text-sm"
                    >
                      <p className="font-semibold text-ink">{card.title}</p>
                      <p className="text-xs text-ink-muted">{card.detail}</p>
                    </div>
                  ))}
                </div>
                <button className="rounded-[16px] bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,95,79,0.3)]">
                  Publish plan to patient
                </button>
              </div>
            </Screen>

            <Screen
              title="Billing & Coverage"
              description="Transparent billing with coverage summary and co-pay automation."
              tag="Financial"
              accent={<span className="text-xs text-ink-muted">14</span>}
              footer={<BottomNav active="profile" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="rounded-[18px] bg-primary px-5 py-4 text-white shadow-[0_16px_32px_rgba(45,95,79,0.28)]">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/70">
                    Current balance
                  </p>
                  <p className="mt-1 text-3xl font-semibold">$36.80</p>
                  <p className="text-xs text-white/70">
                    Due in 5 days · Auto-pay enabled
                  </p>
                </div>
                <div className="rounded-[18px] bg-surface p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <DividerHeading label="Coverage" />
                  <div className="flex items-center justify-between">
                    <span className="text-ink-muted">Insurer</span>
                    <span className="font-semibold text-ink">Avicure Blue</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-ink-muted">Coverage applied</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark">
                      80%
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-ink-muted">HSAs compatible</span>
                    <span className="text-success font-semibold">Yes</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  {[
                    {
                      title: "Televisit · Dr. Malik",
                      detail: "Covered · $0",
                      tone: "success",
                    },
                    {
                      title: "Lab pickup concierge",
                      detail: "Co-pay · $16.80",
                      tone: "warning",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[18px] bg-surface p-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                    >
                      <p className="text-sm font-semibold text-ink">
                        {item.title}
                      </p>
                      <p
                        className={`text-xs font-semibold ${
                          item.tone === "success"
                            ? "text-success"
                            : "text-warning"
                        }`}
                      >
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="rounded-[16px] bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(45,95,79,0.3)]">
                  View detailed invoice
                </button>
              </div>
            </Screen>

            <Screen
              title="Notifications Hub"
              description="Smart inbox blending AI insights, care alerts, and administrative reminders."
              tag="System"
              accent={<span className="text-xs text-ink-muted">15</span>}
              footer={<BottomNav active="home" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="rounded-[18px] bg-primary px-5 py-4 text-white shadow-[0_16px_30px_rgba(45,95,79,0.3)]">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/70">
                    Smart priorities
                  </p>
                  <p className="mt-1 text-lg font-semibold">2 actions today</p>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  {[
                    {
                      title: "AI Summary ready for Dr. Malik",
                      detail: "Sent to care team · 9m ago",
                      tone: "primary",
                    },
                    {
                      title: "Lab courier arriving soon",
                      detail: "Track courier · ETA 15 min",
                      tone: "warning",
                    },
                    {
                      title: "Medication refill confirmed",
                      detail: "Delivery Friday · Avicure Pharmacy",
                      tone: "success",
                    },
                  ].map((notification) => (
                    <div
                      key={notification.title}
                      className="rounded-[18px] bg-surface p-4 shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                    >
                      <div className="flex items-center justify-between text-xs text-ink-muted">
                        <span>{notification.detail}</span>
                        <span
                          className={`inline-flex h-2 w-2 rounded-full ${
                            notification.tone === "warning"
                              ? "bg-warning"
                              : notification.tone === "success"
                              ? "bg-success"
                              : "bg-primary"
                          }`}
                        />
                      </div>
                      <p className="mt-2 text-sm font-semibold text-ink">
                        {notification.title}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="rounded-[16px] border border-primary/40 px-4 py-3 text-sm font-semibold text-primary-dark">
                  Mark all as read
                </button>
              </div>
            </Screen>

            <Screen
              title="Community"
              description="Curated peer stories, moderated Q&A, and physician verified content."
              tag="Support"
              accent={<span className="text-xs text-ink-muted">16</span>}
              footer={<BottomNav active="home" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      Cardio Collective
                    </p>
                    <p className="text-xs text-ink-muted">
                      24,300 members · Clinician moderated
                    </p>
                  </div>
                  <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white">
                    New post
                  </button>
                </div>
                <div className="flex flex-1 flex-col gap-3 rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  {[
                    {
                      author: "Lina · Patient",
                      content:
                        "Shared how Avicure helped coordinate post-surgery rehab. Detailed her recovery checklist.",
                    },
                    {
                      author: "Dr. Alvarez · Cardiologist",
                      content:
                        "Weekly QA: How to interpret home BP readings effectively?",
                    },
                    {
                      author: "Maya · Caregiver",
                      content:
                        "Tips for managing medications while traveling with elderly parents.",
                    },
                  ].map((post) => (
                    <div
                      key={post.author}
                      className="rounded-[16px] border border-primary-soft/50 p-3 text-sm"
                    >
                      <p className="text-xs font-semibold text-primary-dark">
                        {post.author}
                      </p>
                      <p className="text-sm text-ink">{post.content}</p>
                    </div>
                  ))}
                </div>
                <button className="rounded-[16px] bg-primary px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(45,95,79,0.28)]">
                  Browse expert topics
                </button>
              </div>
            </Screen>

            <Screen
              title="Emergency Mode"
              description="Rapid escalation to nearest facility with live response tracking."
              tag="Critical"
              accent={<span className="text-xs text-ink-muted">17</span>}
              footer={<BottomNav active="home" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="rounded-[20px] bg-error px-5 py-4 text-white shadow-[0_18px_40px_rgba(244,67,54,0.32)]">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/70">
                    Emergency initiated
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Routing to nearest ER
                  </p>
                  <p className="text-xs text-white/70">St. Mary&apos;s Hospital · 6 min</p>
                </div>
                <div className="flex flex-col gap-3 rounded-[18px] bg-surface p-4 text-sm shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ink">Avicure EMS</span>
                    <span className="rounded-full bg-error/10 px-3 py-1 text-xs font-semibold text-error">
                      Live
                    </span>
                  </div>
                  <div className="text-xs text-ink-muted">
                    Verified location shared · ETA 04:21
                  </div>
                  <button className="rounded-[14px] bg-error px-4 py-3 text-sm font-semibold text-white shadow-lg">
                    Call emergency line
                  </button>
                </div>
                <div className="rounded-[18px] bg-primary-soft/30 p-4 text-sm text-primary-dark">
                  <p className="font-semibold">Next steps</p>
                  <p className="text-xs">
                    Remain calm. Sit or lie down. Avoid consuming food or
                    liquids. Avicure notifying Dr. Malik and designated
                    caregiver.
                  </p>
                </div>
              </div>
            </Screen>

            <Screen
              title="Insights & Trends"
              description="AI-driven longitudinal insights with actionable guidance and progress."
              tag="Analytics"
              accent={<span className="text-xs text-ink-muted">18</span>}
              footer={<BottomNav active="home" />}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="rounded-[18px] bg-primary px-5 py-4 text-white shadow-[0_16px_34px_rgba(45,95,79,0.3)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                    Weekly insight
                  </p>
                  <p className="mt-1 text-lg font-semibold">
                    Overall risk · Down 12%
                  </p>
                </div>
                <div className="rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                  <DividerHeading label="Micro goals" />
                  <div className="flex flex-col gap-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Medication consistency</span>
                      <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                        96%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Activity baseline</span>
                      <span className="rounded-full bg-warning/20 px-3 py-1 text-xs font-semibold text-warning">
                        +12% · Keep momentum
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Stress recovery</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-dark">
                        Improving
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 rounded-[18px] bg-surface p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)] text-sm">
                  <p className="text-sm font-semibold text-ink">
                    AI Recommendation
                  </p>
                  <p className="text-xs text-ink-muted">
                    “Shift evening dose earlier by 45 minutes to reduce nocturnal
                    spikes.”
                  </p>
                  <button className="rounded-[14px] bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(45,95,79,0.28)]">
                    Apply to plan
                  </button>
                </div>
              </div>
            </Screen>
          </div>
        </section>
      </div>
    </main>
  );
}
