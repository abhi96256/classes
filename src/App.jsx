import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Users,
  Award,
  Star,
  ChevronRight,
  CheckCircle2,
  PlayCircle,
  TrendingUp,
  Globe,
  ArrowRight,
  Zap,
  Target,
  Sparkles,
  MessageSquare,
  Menu,
  X,
  Cpu,
  Layers,
  ShieldCheck,
  Search,
  BookMarked,
  BrainCircuit,
  Plus,
  Minus,
  Trophy,
  History,
  Rocket
} from 'lucide-react';

const FloatingIcon = ({ icon: Icon, color, top, left, delay, duration }) => (
  <motion.div
    style={{ position: 'absolute', top, left, color }}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 0.9, 1]
    }}
    transition={{ repeat: Infinity, duration: duration || 8, delay: delay || 0, ease: "easeInOut" }}
    className="opacity-10 hidden lg:block pointer-events-none"
  >
    <Icon size={40} />
  </motion.div>
);

const AccordionItem = ({ title, content, isOpen, toggle }) => (
  <div className="border-b border-white/5 py-6">
    <button
      onClick={toggle}
      className="w-full flex justify-between items-center text-left hover:text-indigo-400 transition-colors"
    >
      <span className="text-xl md:text-2xl font-black font-outfit uppercase tracking-tighter">{title}</span>
      {isOpen ? <Minus className="text-indigo-500" /> : <Plus className="text-gray-600" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <p className="mt-6 text-gray-500 font-medium leading-relaxed max-w-3xl">
            {content}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    { title: 'IIT-JEE Masterclass', desc: 'Comprehensive prep for advanced engineering exams.', level: 'Elite', tag: 'Top Rated', icon: <Target />, color: '#6366f1' },
    { title: 'NEET Excellence', desc: 'Intensive medical entrance coaching with live labs.', level: 'Popular', tag: 'Fast Track', icon: <Zap />, color: '#0ea5e9' },
    { title: 'Foundational Pro', desc: 'Building logic from Class 8th to 10th.', level: 'Advanced', tag: 'Foundation', icon: <Layers />, color: '#f59e0b' },
    { title: 'UPSC Elite', desc: 'Civil Services mastery with former bureaucrats.', level: 'Premium', tag: 'Limited slots', icon: <Award />, color: '#ec4899' },
  ];

  const faculty = [
    { name: 'Dr. Sameer Verma', role: 'Physics Visionary', exp: '15+ Y', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600' },
    { name: 'Ananya Sharma', role: 'Biology Maven', exp: '10+ Y', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600' },
    { name: 'Prof. Arjun Rao', role: 'Math Wizard', exp: '20+ Y', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600' },
  ];

  const faqs = [
    { title: "What is the NeoClass 'Elite Batch' Selection Process?", content: "Our Elite Batch is reserved for the top 50 students selected via an internal diagnostic test. This cohort receives 1:1 mentorship from senior faculty and 24/7 dedicated support." },
    { title: "Can I switch batches mid-way?", content: "Yes, based on performance analytics, students can be moved between cohorts to match their learning pace and current competitive level." },
    { title: "How do the scholarship programs work?", content: "Scholarships are awarded based on our 'NeoTest' conducted every quarter. We offer up to 100% waiver for economically weaker sections and high merit toppers." },
    { title: "Are study materials included?", content: "Absolutely. Every enrolled student gets 'NeoPacks'—curated, high-yield study modules, formula sheets, and digital archives including past toppers' handwritten notes." }
  ];

  const pricing = [
    { name: 'Foundation', price: '₹4,999/mo', features: ['Live Classes', 'Doubt Support', 'Smart Notes'], icon: <BookOpen />, btn: 'Explore' },
    { name: 'Elite Master', price: '₹12,499/mo', features: ['1:1 Coaching', 'AI Test Series', 'Elite Community', 'All Resources'], icon: <Trophy />, btn: 'Enroll Now', popular: true },
    { name: 'Custom Pro', price: 'Custom', features: ['Home Mentoring', '24/7 Access', 'Specialized Labs'], icon: <Layers />, btn: 'Contact Us' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-indigo-500/30 font-jakarta overflow-x-hidden">

      {/* Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[5%] left-[5%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/5 blur-[180px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-blue-600/5 blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')]" />
      </div>

      <FloatingIcon icon={Sparkles} color="#818cf8" top="15%" left="10%" delay={0} />
      <FloatingIcon icon={Target} color="#22d3ee" top="65%" left="8%" delay={2} />
      <FloatingIcon icon={Award} color="#f472b6" top="20%" left="85%" delay={1} />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-4 py-4 ${scrolled ? 'md:py-3' : 'md:py-6'}`}>
        <div className={`max-w-7xl mx-auto glass-card flex justify-between items-center px-6 md:px-10 py-3 md:py-4 transition-all duration-500 border-white/5 ${scrolled ? 'bg-black/80 shadow-2xl scale-[0.98] border-indigo-500/20' : 'bg-transparent shadow-none scale-100'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl border border-white/10 shadow-lg group hover:rotate-6 transition-transform cursor-pointer">C</div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase font-outfit leading-none">NEO<span className="text-indigo-400">CLASS</span></span>
              <span className="text-[7px] md:text-[9px] text-gray-500 font-bold tracking-[0.4em] uppercase mt-1">Learner Elite</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-10 font-bold text-[10px] text-gray-400 uppercase tracking-[0.2em]">
            {['Programs', 'Elite Tier', 'Faculty', 'Results'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-all relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <button className="btn-primary py-3 px-8 text-[10px] shadow-indigo-500/20">Apply Now</button>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-indigo-400">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[90] flex flex-col justify-center items-center gap-12 lg:hidden"
          >
            {['Programs', 'Scholarships', 'Faculty', 'Results'].map(link => (
              <a key={link} onClick={() => setIsMenuOpen(false)} href="#" className="text-4xl font-black font-outfit hover:text-indigo-400 transition-colors uppercase tracking-tighter">{link}</a>
            ))}
            <button className="btn-primary py-5 px-16 text-xl">Join Today</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-44 md:pt-60 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-12"
          >
            <Zap size={14} fill="currentColor" /><span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Admissions Open 2026-27</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-black font-outfit leading-[0.85] mb-12 tracking-tighter"
          >
            Architecting <br /><span className="text-gradient">Champions.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl text-gray-500 mb-16 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Beyond teaching, we cultivate the mindset of rank 1. Elite mentoring for India's toughest competitive exams.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <button className="btn-primary py-6 px-16 text-xl shadow-indigo-600/30 shadow-2xl">Start Your Journey</button>
            <button className="btn-secondary py-6 px-12 text-xl flex items-center gap-3">
              <PlayCircle size={24} /> Experience Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats - Staggered */}
      <section className="py-24 px-6 relative border-y border-white/5 bg-white/[0.01]">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { l: 'Successful Rankers', v: '18,201', i: <Trophy />, c: 'text-indigo-400' },
            { l: 'Cities Covered', v: '45+', i: <Globe />, c: 'text-cyan-400' },
            { l: 'Expert Mentors', v: '150+', i: <Star />, c: 'text-yellow-400' },
            { l: 'Happy Parents', v: '50k+', i: <MessageSquare />, c: 'text-pink-400' },
          ].map((s, idx) => (
            <motion.div variants={itemVariants} key={idx} className="text-center group p-8 rounded-3xl hover:bg-white/[0.02] transition-all cursor-default">
              <div className={`mx-auto w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-6 ${s.c} group-hover:bg-indigo-600 transition-all font-bold`}>
                {React.cloneElement(s.i, { size: 30 })}
              </div>
              <h3 className="text-4xl md:text-5xl font-black font-outfit mb-2 tracking-tighter">{s.v}</h3>
              <p className="text-[9px] text-gray-600 font-extrabold uppercase tracking-[0.4em]">{s.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* METHODOLOGY - Added Feature */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter">Our <span className="text-indigo-400">Blueprint</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-4">The 4-Pillar Success Engine</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { t: 'Diagnosis', d: 'Identifying learning gaps via behavior-mapping.', i: <Search /> },
              { t: 'Curating', d: 'Customizing modules for individual strengths.', i: <Layers /> },
              { t: 'Execution', d: 'Daily intensive learning & live solving.', i: <Zap /> },
              { t: 'Precision', d: 'Final simulations till 100% accuracy.', i: <ShieldCheck /> },
            ].map((step, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="glass-card p-10 border-white/5 flex flex-col items-center text-center">
                <div className="text-indigo-500 mb-8 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">{step.i}</div>
                <h4 className="text-2xl font-black font-outfit mb-4">{step.t}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-32 px-6 bg-indigo-600/[0.03]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-lg">
              <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter">Elite <span className="text-gradient">Cohorts</span></h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-6">Specialized preparations for breakthrough results</p>
            </div>
            <button className="text-gray-400 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors flex items-center gap-2 mb-4">
              View Curriculum <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -12 }} className="glass-card p-10 flex flex-col border-white/5 hover:border-indigo-500/40 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[40px] -z-10 group-hover:bg-indigo-500/20" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-all group-hover:scale-110 shadow-xl" style={{ backgroundColor: `${p.color}20`, color: p.color }}>
                  {React.cloneElement(p.icon, { size: 28 })}
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-4">{p.tag}</span>
                <h3 className="text-2xl font-black font-outfit mb-6 h-14 leading-tight">{p.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-10">{p.desc}</p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-gray-600 font-black text-[10px] uppercase tracking-widest">
                  <span>Tier: {p.level}</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: ELITE SCHOLARSHIPS / PRICING */}
      <section id="elite-tier" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter">Elite <span className="text-indigo-400">Membership</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-6">Invest in the best-in-class mentorship</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`glass-card p-12 border-white/5 relative flex flex-col ${p.popular ? 'border-2 border-indigo-500 bg-indigo-500/5' : ''}`}
              >
                {p.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Most Recommended</span>}
                <div className="text-indigo-500 mb-8">{p.icon}</div>
                <h4 className="text-4xl font-black font-outfit mb-2 tracking-tighter">{p.name}</h4>
                <div className="text-3xl font-black mb-10 text-slate-100">{p.price}</div>
                <div className="flex flex-col gap-6 mb-12 flex-grow">
                  {p.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-sm font-medium text-gray-400">
                      <CheckCircle2 size={16} className="text-indigo-400" /> {f}
                    </div>
                  ))}
                </div>
                <button className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:shadow-xl ${p.popular ? 'bg-white text-indigo-700' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>
                  {p.btn}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section id="faculty" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-lg mx-auto md:mx-0">
              <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter text-gradient">Luminaries.</h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mt-6">Expertise developed over decades of mentorship</p>
            </div>
            <button className="text-indigo-400 font-black uppercase tracking-widest text-[10px] hover:text-white flex items-center gap-2 mb-4">Meet All Mentors <ChevronRight size={14} /></button>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {faculty.map((f, i) => (
              <motion.div key={i} whileHover={{ y: -20 }} className="group relative">
                <div className="aspect-[3/4] rounded-[50px] overflow-hidden glass-card border-white/5 relative">
                  <img src={f.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={f.name} />
                  <div className="absolute inset-x-6 bottom-6 glass-card p-6 border-white/10 group-hover:bg-indigo-600 transition-colors">
                    <h4 className="text-2xl font-black font-outfit">{f.name}</h4>
                    <div className="flex justify-between items-center mt-2 opacity-70">
                      <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 group-hover:text-white">{f.role}</span>
                      <span className="text-[10px] font-black">{f.exp}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: RESULTS / HALL OF FAME */}
      <section id="results" className="py-32 px-6 bg-white/[0.01] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter">Hall of <span className="text-indigo-400">Selection</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map(j => (
              <motion.div key={j} className="glass-card p-2 border-white/10 hover:border-indigo-500 transition-all text-center">
                <div className="aspect-square bg-slate-800 rounded-3xl mb-4 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${j + 100}`} className="w-full h-full object-cover filter brightness-75" alt="Topper" />
                </div>
                <span className="text-2xl font-black font-outfit text-indigo-400">Rank {j * 3}</span>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mt-2">JEE ADV. 2025</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tighter">Student <span className="text-indigo-400 italic">Voices</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: 'Aryan Gupta', r: 'AIR 52 - NEET', t: "The methodology here is built for results. It wasn't just syllabus coverage; it was mental training." },
              { n: 'Isha Patel', r: 'IIT Delhi Student', t: "Mentorship is the differentiator. Dr. Verma literally saved my physics concepts in the final months." },
              { n: 'Sid Kumar', r: 'Standard XII Topper', t: "Cleanest materials I've ever used. The focus on logical thinking is what stays with you forever." },
            ].map((test, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="glass-card p-12 border-white/5 relative flex flex-col group">
                <Sparkles className="text-indigo-500/20 absolute top-10 right-10 group-hover:text-indigo-500 transition-colors" size={40} />
                <p className="text-2xl font-bold italic font-outfit leading-tight mb-12 text-slate-300">"{test.t}"</p>
                <div className="mt-auto">
                  <h4 className="text-2xl font-black font-outfit text-white">{test.n}</h4>
                  <span className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mt-2 block">{test.r}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: FAQ SECTION */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tighter mb-20 text-center">Curious? <br /><span className="text-indigo-400 underline decoration-indigo-500/20 underline-offset-8">Quick Facts.</span></h2>
          <div className="flex flex-col">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                title={f.title}
                content={f.content}
                isOpen={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA ELITE */}
      <section className="py-24 px-6 mb-24 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[60px] bg-indigo-600 p-16 md:p-32 shadow-2xl shadow-indigo-500/30 text-center">
          <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <motion.div initial={{ opacity: 0, scale: 1.1 }} whileInView={{ opacity: 1, scale: 1 }} className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-9xl font-black font-outfit leading-[0.85] text-white mb-14 tracking-tighter italic">Own Your <br /> Future.</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-indigo-700 px-16 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest">Enroll Now</button>
              <button className="bg-transparent border-2 border-white/30 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white/10 transition-all uppercase tracking-widest">Connect with Support</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER ELITE */}
      <footer className="py-24 px-6 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-20 mb-20">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-xl text-white">C</div>
                <span className="text-2xl font-black font-outfit tracking-tighter uppercase text-white">NEO<span className="text-indigo-400">CLASS</span></span>
              </div>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Pioneering a new era of academic excellence for the digital generation.</p>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10">Academic Labs</h5>
              <div className="flex flex-col gap-6 text-[11px] font-black text-gray-500 uppercase tracking-widest underline-offset-4">
                <a href="#" className="hover:text-indigo-400">JEE Physics Lab</a>
                <a href="#" className="hover:text-indigo-400">NEET Biology Wing</a>
                <a href="#" className="hover:text-indigo-400">UPSC Strategy Cell</a>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-10">Admission</h5>
              <div className="flex flex-col gap-6 text-[11px] font-black text-gray-500 uppercase tracking-widest">
                <a href="#" className="hover:text-indigo-400">Elite Scholarship</a>
                <a href="#" className="hover:text-indigo-400">Tier Matrix</a>
                <a href="#" className="hover:text-indigo-400">Success Stores</a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-4 mb-8">
                {['FB', 'IG', 'TW', 'LI'].map(s => <div key={s} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-black hover:border-indigo-500 hover:text-indigo-500 transition-colors cursor-pointer">{s}</div>)}
              </div>
              <div className="text-[8px] font-black text-gray-700 uppercase tracking-[0.6em]">© 2026 NEOClass Global</div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
