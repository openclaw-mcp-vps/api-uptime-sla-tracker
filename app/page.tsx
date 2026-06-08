export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor API Uptime Against{" "}
          <span className="text-[#58a6ff]">SLA Commitments</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically track API uptime and response times, detect SLA breaches, and calculate credits owed to customers — all in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $17/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["99.9%", "Uptime Tracked"],
            ["Auto", "SLA Credit Calc"],
            ["Real-time", "Response Metrics"],
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-4xl font-extrabold text-white mb-1">$17<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] mb-6">Everything you need to stay SLA-compliant</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited API endpoint monitoring",
              "Automated SLA breach detection",
              "Customer credit calculation reports",
              "Response time & uptime dashboards",
              "Email & webhook alerts",
              "30-day data retention",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Monitoring Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does SLA credit calculation work?",
              "You define your SLA thresholds (e.g. 99.9% uptime). When your API falls below that, the tool automatically calculates the credit percentage owed based on actual downtime duration.",
            ],
            [
              "What APIs can I monitor?",
              "Any HTTP/HTTPS endpoint — REST APIs, webhooks, health check URLs. You configure the check interval, expected status codes, and response time thresholds.",
            ],
            [
              "Can I export reports for customers?",
              "Yes. You can generate monthly uptime reports and SLA credit summaries that can be shared directly with customers or included in invoices.",
            ],
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} API Uptime SLA Tracker. All rights reserved.
      </footer>
    </main>
  );
}
