import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { RevealBox } from './RevealBox.tsx';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [msgStatus, setMsgStatus] = useState<string | null>(null);

  const email = 'vinayakshukla0707@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/vinayak-shukla-927734381/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${senderName || 'Recruiter/Peer'}`);
    const mailtoBody = encodeURIComponent(
      `Hi Vinayak,\n\n${message}\n\nFrom: ${senderName || 'Anonymous'}\nContact Email: ${senderEmail || 'Not provided'}`
    );
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setMsgStatus('Opening your default mail client...');
    setTimeout(() => setMsgStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading */}
        <RevealBox id="contact-heading" className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-red-500 rounded-full" />
            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            LET'S BUILD <span className="text-cyan-400">SOMETHING AMAZING</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            I am currently open to internships, collaborative AI/ML research, hackathons, and technical discussions.
            Feel free to connect or drop me a direct message.
          </p>
        </RevealBox>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Verified Links */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <RevealBox id="contact-email-card" className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#07090e] border border-slate-800 space-y-4 hover:border-slate-700 transition-colors shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-white break-all select-all">{email}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                <a
                  data-cursor-target="contact-email-btn"
                  href={`mailto:${email}`}
                  className="flex-1 py-2 px-3 rounded-lg text-center text-xs font-mono font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 transition-colors cursor-pointer"
                >
                  Email Me
                </a>
                <button
                  data-cursor-target="contact-copy-btn"
                  onClick={handleCopyEmail}
                  className="py-2 px-3 rounded-lg text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </RevealBox>

            {/* LinkedIn Profile Card */}
            <RevealBox id="contact-linkedin-card" className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#07090e] border border-slate-800 space-y-4 hover:border-slate-700 transition-colors shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400">Professional Network</div>
                    <div className="text-sm font-semibold text-white">Vinayak Shukla on LinkedIn</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <a
                  data-cursor-target="contact-linkedin-btn"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Open LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </RevealBox>

            {/* GitHub Card - Labeled Placeholder as instructed */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3 text-xs font-mono">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-500">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-slate-500">Code Repository</div>
                  <div className="text-slate-300 font-semibold">GitHub Profile</div>
                </div>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Direct github.com profile link will be attached shortly upon final repository verification.
              </p>
              <div className="py-2 px-3 rounded-lg bg-slate-900 border border-slate-800 text-center text-slate-500 text-[11px]">
                Profile URL: Pending Publication
              </div>
            </div>

            {/* Location Pill-less Info */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center gap-3 text-xs font-mono text-slate-400">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>Based in Kanpur, India · Available for Remote & On-Site Opportunities</span>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <RevealBox id="contact-form-card" className="rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-[#07090e] border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-display font-bold text-lg text-white">Send a Direct Message</h3>
                </div>
                <span className="font-mono text-xs text-slate-500">Instant Dispatch</span>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-slate-400">Your Name</label>
                    <input
                      data-cursor-target="contact-name-input"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase text-slate-400">Your Email</label>
                    <input
                      data-cursor-target="contact-email-input"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase text-slate-400">Subject</label>
                  <input
                    data-cursor-target="contact-subject-input"
                    type="text"
                    required
                    placeholder="e.g. AI/ML Internship Opportunity / Project Collaboration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase text-slate-400">Message</label>
                  <textarea
                    data-cursor-target="contact-message-input"
                    required
                    rows={4}
                    placeholder="Share a brief overview of your inquiry or opportunity..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-600 font-sans resize-none"
                  />
                </div>

                {msgStatus && (
                  <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-800 text-xs font-mono text-cyan-300">
                    {msgStatus}
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Directly pre-fills your email client
                  </span>
                  <button
                    data-cursor-target="contact-submit-btn"
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-mono uppercase tracking-wider font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </RevealBox>
          </div>
        </div>
      </div>
    </section>
  );
};
