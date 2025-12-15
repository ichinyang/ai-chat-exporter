import React, { useState } from 'react';
import { BeforeAfter } from './components/BeforeAfter';
import { FeaturesSection, UseCasesSection } from './components/Features';
import { PricingSection } from './components/Pricing';
import { CloudIcon, DownloadIcon, ArrowRightIcon, FileIcon, ZapIcon, StarIcon } from './components/Icons';
import { LIFETIME_PRO_CHECKOUT_URL, CHROME_WEB_STORE_URL, SUPPORT_EMAIL } from './src/config/links';

// --- Small Inline Components to keep file count low ---

const Navbar = () => (
  <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/savo-logo.png" alt="SAVO logo" className="h-8 w-auto" />
        <span className="font-bold text-slate-900 text-lg">Smarter AI chat saving.</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block">How it works</a>
        <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block">Features</a>
        <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block">Pricing</a>
        <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block">FAQ</a>
        <a href="#pricing" className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Get Started
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Copy - Left Column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Save and organize your <span className="gradient-text">AI chats</span> without breaking tables.
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Export ChatGPT conversations, save AI chats, and export AI prompts with clean formatting. Paste into Google Docs and Notion with tables intact — better than manual copy-paste.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 justify-center lg:justify-start">
            {/* Primary CTA: Lifetime Pro */}
            <a href={LIFETIME_PRO_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-semibold shadow-lg shadow-brand-500/25 transition-all hover:scale-105 active:scale-95 text-center focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2">
              Get Lifetime Pro — Now $19 (Holiday Discount)
            </a>
            {/* Secondary CTA: Free Trial */}
            <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white text-brand-600 border-2 border-brand-100 hover:border-brand-300 hover:bg-brand-50 rounded-xl font-semibold transition-all text-center">
              Add to Chrome — Free Trial
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500 font-medium text-center lg:text-left">
             Limited holiday discount — now $19. Original price <span className="line-through text-slate-400">$29</span>.
          </p>

          {/* Social Proof Block */}
          <div className="mt-10 max-w-4xl mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start gap-2 mb-6">
              <div className="flex gap-1 text-yellow-400">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
              </div>
              <p className="text-slate-600 font-medium text-sm">Loved by AI power users, marketers, researchers, and creators.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                { quote: "The easiest way I've ever saved my AI prompts. The formatting is perfect every time.", author: "Sarah M., Marketing Lead" },
                { quote: "Finally a clean way to store my AI instructions. Worth every dollar.", author: "David P., Developer" },
                { quote: "My tables used to break when pasted. This tool fixes everything.", author: "Emily R., Research Analyst" }
              ].map((t, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex gap-0.5 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, j) => <StarIcon key={j} className="w-3 h-3" />)}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">“{t.quote}”</p>
                  <p className="text-[10px] font-bold text-slate-800">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Mockup - Right Column (2-Step Vertical Flow) */}
        <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center">
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-100/40 to-blue-100/40 rounded-full blur-3xl -z-10"></div>

             {/* Illustration Container */}
             <div className="relative flex flex-col items-center gap-4 w-full max-w-md mx-auto">
                
                {/* Panel A: AI Chat Source - Made relatively smaller (90% width) */}
                <div className="w-[90%] bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative z-10 opacity-95">
                    {/* Header */}
                    <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex justify-between items-center">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div></div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">ChatGPT / Gemini / DeepSeek</div>
                    </div>
                    {/* Content */}
                    <div className="p-5 space-y-4 bg-slate-50/30 relative min-h-[160px]">
                        {/* Highlight Overlay */}
                        <div className="absolute top-[4.5rem] left-3 right-3 bottom-3 bg-brand-50/20 border-2 border-brand-200 rounded-xl pointer-events-none z-20 shadow-[0_0_15px_rgba(20,184,166,0.1)]"></div>

                        {/* User Msg */}
                        <div className="flex justify-end">
                            <div className="bg-slate-100 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                                <div className="h-2 bg-slate-300 rounded w-32 mb-1.5"></div>
                                <div className="h-2 bg-slate-300 rounded w-20"></div>
                            </div>
                        </div>

                        {/* AI Msg with Table */}
                        <div className="flex justify-start w-full">
                             <div className="w-full">
                                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-4 shadow-sm w-full">
                                    <div className="h-2 bg-slate-200 rounded w-full mb-3"></div>
                                    {/* Table Preview */}
                                    <div className="border border-slate-200 rounded-lg overflow-hidden w-full">
                                         <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-2 gap-2">
                                             <div className="h-1.5 bg-slate-400 rounded w-full"></div>
                                             <div className="h-1.5 bg-slate-400 rounded w-3/4"></div>
                                             <div className="h-1.5 bg-slate-400 rounded w-1/2"></div>
                                         </div>
                                         <div className="grid grid-cols-3 border-b border-slate-100 p-2 gap-2 bg-white">
                                             <div className="h-1.5 bg-slate-200 rounded w-3/4"></div>
                                             <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                                             <div className="h-1.5 bg-slate-200 rounded w-2/3"></div>
                                         </div>
                                          <div className="grid grid-cols-3 p-2 gap-2 bg-white">
                                             <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                                             <div className="h-1.5 bg-slate-200 rounded w-1/2"></div>
                                             <div className="h-1.5 bg-slate-200 rounded w-3/4"></div>
                                         </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Export Action Button (Floating centered) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
                    <div className="bg-brand-600 text-white rounded-full pl-4 pr-5 py-2.5 shadow-[0_0_30px_rgba(20,184,166,0.6)] border-[3px] border-white flex items-center gap-2.5 transform hover:scale-105 transition-transform cursor-default">
                         <div className="bg-white/20 p-1 rounded-full">
                            <ZapIcon className="w-3.5 h-3.5 text-white" />
                         </div>
                         <span className="font-bold text-sm whitespace-nowrap">Export</span>
                    </div>
                    <span className="mt-2 text-[10px] font-bold text-brand-700 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm whitespace-nowrap">One-click clean export</span>
                </div>

                {/* Panel B: Saved Note - Made relatively larger (Full width + shadow) */}
                <div className="w-full bg-white rounded-xl shadow-2xl border border-slate-200/80 overflow-hidden relative z-10 mt-2 transform scale-[1.03] origin-top">
                     {/* Header */}
                     <div className="bg-white px-5 py-4 border-b border-slate-100 flex items-start justify-between">
                         <div className="flex gap-3">
                             <div className="bg-blue-50 p-2 rounded-lg text-blue-600 shrink-0 h-fit border border-blue-100">
                                 <FileIcon className="w-5 h-5" />
                             </div>
                             <div>
                                 <div className="text-sm font-bold text-slate-800">AI Marketing Ideas</div>
                                 <div className="text-[10px] text-slate-400 mt-1 font-medium">Captured on Dec 12, 2024</div>
                             </div>
                         </div>
                         <span className="bg-green-50 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-100 shadow-sm">SAVED</span>
                     </div>

                     {/* Content */}
                     <div className="p-5 space-y-4 bg-white">
                         {/* Tags */}
                         <div className="flex gap-2">
                             <span className="text-[10px] font-semibold bg-brand-50 text-brand-700 px-2.5 py-1 rounded-md border border-brand-100">#Prompt</span>
                             <span className="text-[10px] font-semibold bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md border border-purple-100">#Research</span>
                             <span className="text-[10px] font-semibold bg-orange-50 text-orange-700 px-2.5 py-1 rounded-md border border-orange-100">#Ideas</span>
                         </div>

                         {/* Table Intact - Enhanced Contrast */}
                         <div className="border border-slate-300 rounded-lg overflow-hidden w-full shadow-sm">
                             <div className="grid grid-cols-3 bg-slate-100 border-b border-slate-300 p-2.5 gap-3">
                                 <div className="h-1.5 bg-slate-500 rounded w-3/4"></div>
                                 <div className="h-1.5 bg-slate-500 rounded w-1/2"></div>
                                 <div className="h-1.5 bg-slate-500 rounded w-2/3"></div>
                             </div>
                             <div className="grid grid-cols-3 border-b border-slate-200 p-2.5 gap-3">
                                 <div className="h-1.5 bg-slate-400 rounded w-full"></div>
                                 <div className="h-1.5 bg-slate-400 rounded w-3/4"></div>
                                 <div className="h-1.5 bg-slate-400 rounded w-1/2"></div>
                             </div>
                             <div className="grid grid-cols-3 p-2.5 gap-3">
                                 <div className="h-1.5 bg-slate-400 rounded w-5/6"></div>
                                 <div className="h-1.5 bg-slate-400 rounded w-2/3"></div>
                                 <div className="h-1.5 bg-slate-400 rounded w-3/4"></div>
                             </div>
                         </div>

                         {/* Footer Apps */}
                         <div className="pt-2 flex gap-3 justify-center opacity-70">
                             <div className="h-6 w-16 bg-slate-100 rounded-md text-[9px] flex items-center justify-center text-slate-500 font-semibold border border-slate-200">Notion</div>
                             <div className="h-6 w-16 bg-slate-100 rounded-md text-[9px] flex items-center justify-center text-slate-500 font-semibold border border-slate-200">Docs</div>
                             <div className="h-6 w-16 bg-slate-100 rounded-md text-[9px] flex items-center justify-center text-slate-500 font-semibold border border-slate-200">Word</div>
                         </div>
                     </div>
                </div>

             </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-slate-50 border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
        <p className="mt-4 text-slate-500">So simple, you'll wonder how you lived without it.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { step: "1", title: "Open your AI Chat", desc: "Works with ChatGPT, Gemini, DeepSeek, and more." },
          { step: "2", title: "Select or Export", desc: "Free: select and export only the messages you care about. Pro: click ‘Export Thread’ to grab the whole conversation in one click." },
          { step: "3", title: "Paste Anywhere", desc: "We add a title, your tags, and a filename. You just paste it into Notion, Docs, Word, or wherever you like." }
        ].map((item, i) => (
          <div key={i} className="relative flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-100 text-brand-600 flex items-center justify-center text-xl font-bold mb-4 shadow-sm z-10">
              {item.step}
            </div>
            {i !== 2 && <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-slate-200 -z-0" />}
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-20 bg-slate-50 border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Loved by AI power users</h2>
        <p className="text-slate-600">See what people are saying</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { 
            quote: "Finally, my ChatGPT tables don't explode when I paste them into Google Docs.", 
            author: "Sarah M.",
            role: "Content Strategist"
          },
          { 
            quote: "I save my best prompts in seconds now. This should be built into every AI chat.", 
            author: "David L.",
            role: "Indie Hacker"
          },
          { 
            quote: "Perfect for client work. I can grab an entire thread and drop it into Notion.", 
            author: "Emily K.",
            role: "Researcher"
          }
        ].map((review, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex gap-1 text-yellow-400 mb-3">
              {[...Array(5)].map((_, j) => <StarIcon key={j} className="w-4 h-4" />)}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">"{review.quote}"</p>
            <p className="text-xs font-semibold text-slate-900">{review.author}</p>
            <p className="text-xs text-slate-500">{review.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Audience = () => (
  <section id="audience" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Built for power users</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { title: "AI Power Users", desc: "You live in chats and hate losing ideas." },
          { title: "Creators", desc: "Turn outlines into content instantly." },
          { title: "Researchers", desc: "Keep citations and tables organized." },
          { title: "Developers", desc: "Save code snippets and architecture." },
          { title: "Startup Founders", desc: "Save product ideas, experiments, architecture notes, and key decisions." }
        ].map((p, i) => (
          <div key={i} className="p-6 bg-slate-50 rounded-xl text-center border border-slate-100 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(20%-0.8rem)]">
            <h3 className="font-bold text-slate-900 mb-1">{p.title}</h3>
            <p className="text-sm text-slate-500">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Roadmap = () => (
  <section id="roadmap" className="py-16 bg-slate-900 text-white overflow-hidden relative">
    {/* Decorative BG */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-900 rounded-full blur-[100px] opacity-30"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4 text-brand-300 font-medium">
            <CloudIcon className="w-5 h-5" />
            <span>Coming Soon</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">We're building your AI brain.</h2>
          <p className="text-slate-300 max-w-lg mb-6">
            V1 is your simple local export tool. Next, we’re building the cloud brain for your AI conversations.
          </p>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Export directly to Notion & Google Docs
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Cloud history & search
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> Sync across devices
            </li>
          </ul>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 max-w-sm w-full">
          <p className="text-sm text-slate-300 italic">"I just want to search across all my chats from last month..."</p>
          <div className="mt-4 flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center font-bold text-xs">V2</div>
             <span className="text-white font-medium">Coming later this year</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-slate-900">{question}</span>
        <span className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
           </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-slate-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

const FAQ = () => (
  <section id="faq" className="py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-2">
        <FaqItem 
          question="Do I need a subscription?" 
          answer="No. V1 Pro is a one-time lifetime payment. We may introduce subscriptions for cloud features in V2, but your V1 Lifetime Pro status is yours forever." 
        />
        <FaqItem 
          question="What happens after my 5 free exports?" 
          answer="You can upgrade to Lifetime Pro to unlock unlimited exports and full-thread capturing. Or you can continue using the extension with limits (feature dependent on future updates)." 
        />
        <FaqItem 
          question="Does it work with all AI chat tools?" 
          answer="We strictly optimize for ChatGPT, Gemini, and DeepSeek right now. We add support for new platforms based on user requests." 
        />
        <FaqItem 
          question="Will you store my chat data?" 
          answer="For V1, everything happens locally in your browser. We do not store your content on our servers. You own your data." 
        />
        <FaqItem 
          question="Can I upgrade later?" 
          answer="Absolutely. Start with the free trial to see if it fits your workflow, then upgrade whenever you are ready." 
        />
         <FaqItem 
          question="Does this work on mobile?" 
          answer="No. Chrome extensions work on desktop browsers for now." 
        />
      </div>
    </div>
  </section>
);

const SeoSection = () => (
  <section className="py-16 bg-slate-50 border-t border-slate-200">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Why People Use AI Chat Exporter</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          AI Chat Exporter lets you export ChatGPT conversations, save AI chats, and export AI prompts from ChatGPT, Gemini, and DeepSeek with clean formatting. Keep tables intact when pasting into Google Docs and Notion. It's the easiest way to save AI prompts, instructions, research notes, and ideas into Notion, Google Docs, or Word — without breaking formatting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Perfect for:</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>Marketers saving AI content ideas</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>Developers organizing AI instructions</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>Researchers keeping citations & tables</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>Creators storing outlines & scripts</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>Startup founders building prompt libraries</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Solves problems like:</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>ChatGPT tables breaking when pasted</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>Messy formatting in Docs or Notion</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>Losing great prompts inside chat history</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>Copy-paste chaos across multiple AI tools</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
        <p className="text-sm text-slate-500 leading-relaxed">
          This tool specializes in exporting AI chats from ChatGPT, Gemini, and DeepSeek while preserving layout, tables, and formatting. If you need a fast way to save AI prompts or instructions into Notion, Docs, or Word, this is the simplest and most reliable solution.
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "contact" | null>(null);

  const modalContent = {
    privacy: {
      title: "Privacy Policy",
      content: `SAVO does not store your chat content. All exports are generated locally in your browser. Payments are securely processed by our payment provider. We may collect anonymous analytics to improve the product. Contact us at ${SUPPORT_EMAIL} for questions.`
    },
    terms: {
      title: "Terms of Use",
      content: `By using SAVO, you agree this tool is provided "as is". You are responsible for how you use the exported content. Free Trial is for personal evaluation. Lifetime Pro license is for one user. For questions, contact ${SUPPORT_EMAIL}.`
    },
    contact: {
      title: "Contact",
      content: `Have questions or feedback?\nEmail: ${SUPPORT_EMAIL}\nWe usually reply within a few business days.`
    }
  };

  return (
    <>
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <span className="font-bold text-slate-900">SAVO | Smarter AI chat saving.</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <button onClick={() => setActiveModal("privacy")} className="hover:text-slate-900 transition-colors">Privacy</button>
            <button onClick={() => setActiveModal("terms")} className="hover:text-slate-900 transition-colors">Terms</button>
            <button onClick={() => setActiveModal("contact")} className="hover:text-slate-900 transition-colors">Contact</button>
          </div>
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-2xl w-[90%] max-h-[80vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-900">{modalContent[activeModal].title}</h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-slate-600 leading-relaxed whitespace-pre-line">
              {modalContent[activeModal].content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <Hero />
      <BeforeAfter />
      <HowItWorks />
      <UseCasesSection />
      <FeaturesSection />
      <SocialProof />
      <PricingSection />
      <Audience />
      <Roadmap />
      <FAQ />
      <SeoSection />
      <Footer />
    </div>
  );
}