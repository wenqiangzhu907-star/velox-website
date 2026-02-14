"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function VeloxUltimateOS() {
  const [activePhase, setActivePhase] = useState(0);
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  // 1. 完整多语言内容架构 - 已对齐 API 供应商逻辑
  const content = {
    zh: {
      nav: {
        protocols: { 
          title: "协议", 
          items: ["结构化感知", "注意力分配", "模型压缩"] 
        },
        evolution: { 
          title: "认知训练", 
          items: ["变量拆解", "权重排序"] 
        },
        labs: "研究",
        mission: "方法论",
        shop: "文档"
      },
      login: "进入系统",
      upgrade: "开始训练",
      phases: [
        { 
          title: "DESYNC", 
          subtitle: "认知去偏差", 
          desc: "识别自动化反应路径，降低情绪干扰。建立可控的决策入口，使判断过程可观察、可拆解、可优化。" 
        },
        { 
          title: "RE-CODE", 
          subtitle: "结构重构", 
          desc: "将事件拆解为变量与约束条件。训练多维分析能力，使复杂问题具备清晰结构。" 
        },
        { 
          title: "RE-BOOT", 
          subtitle: "模型迭代", 
          desc: "将经验压缩为可迁移的认知模型。通过反馈循环持续优化决策质量。" 
        }
      ],
      portalTitle: "认知框架",
      portalStatus: "状态: 结构校准中_"
    },
    en: {
      nav: {
        protocols: { 
          title: "PROTOCOLS", 
          items: ["STRUCTURED_PERCEPTION", "ATTENTION_ALLOCATION", "MODEL_COMPRESSION"] 
        },
        evolution: { 
          title: "COGNITIVE_TRAINING", 
          items: ["VARIABLE_DECOMPOSITION", "WEIGHT_RANKING"] 
        },
        labs: "RESEARCH",
        mission: "FRAMEWORK",
        shop: "DOCUMENTS"
      },
      login: "ENTER_SYSTEM",
      upgrade: "BEGIN_TRAINING",
      phases: [
        { 
          title: "DESYNC", 
          subtitle: "COGNITIVE_DEBIASING", 
          desc: "Identify automatic reaction patterns and reduce emotional interference. Establish observable and optimizable decision entry points." 
        },
        { 
          title: "RE-CODE", 
          subtitle: "STRUCTURAL_REBUILD", 
          desc: "Decompose events into variables and constraints. Train multi-dimensional analysis for complex problem clarity." 
        },
        { 
          title: "RE-BOOT", 
          subtitle: "MODEL_ITERATION", 
          desc: "Compress experience into transferable cognitive models. Improve decision quality through structured feedback loops." 
        }
      ],
      portalTitle: "COGNITIVE_FRAMEWORK",
      portalStatus: "STATUS: STRUCTURE_CALIBRATING_"
    }
  };

  const cur = content[lang];

  // 监听滚动实现吸附感
  useEffect(() => {
    const handleScroll = () => {
      const index = Math.min(Math.round(window.scrollY / window.innerHeight), 2);
      setActivePhase(index);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-black text-white font-sans selection:bg-[#ff3c00] overflow-x-hidden" suppressHydrationWarning>
      
      {/* 背景驱动逻辑 - 渲染 RTX 5090 视觉样片 */}
      {[1, 2, 3].map((v, idx) => (
        <div key={v} className={`fixed inset-0 transition-opacity duration-1000 ${activePhase === idx ? 'opacity-40' : 'opacity-0'}`}>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={`/vid-0${v}.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
        </div>
      ))}

      {/* 核心导航栏 - 修复后的嵌套映射逻辑 */}
      <nav className="fixed top-0 w-full z-[100] flex items-center px-12 py-8 bg-transparent" suppressHydrationWarning>
        <Link href="/" className="text-xl font-black tracking-tighter uppercase italic mr-12 hover:text-[#00f2ff] transition-all">
          Velox Motion
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase opacity-80">
          
          {/* Protocols Dropdown */}
          <div className="group relative cursor-pointer py-2">
            <span className="hover:text-[#00f2ff] transition-colors">{cur.nav.protocols.title}</span>
            <div className="absolute top-full left-0 w-48 bg-black/90 border border-white/10 opacity-0 group-hover:opacity-100 transition-all p-4 space-y-3 pointer-events-none group-hover:pointer-events-auto backdrop-blur-md">
              {cur.nav.protocols.items.map(item => (
                <p key={item} className="hover:text-[#00f2ff] text-[9px] tracking-widest transition-colors">{item}</p>
              ))}
            </div>
          </div>
          
          {/* Evolution Dropdown */}
          <div className="group relative cursor-pointer py-2">
            <span className="hover:text-[#00f2ff] transition-colors italic">{cur.nav.evolution.title}</span>
            <div className="absolute top-full left-0 w-48 bg-black/90 border border-white/10 opacity-0 group-hover:opacity-100 transition-all p-4 space-y-3 pointer-events-none group-hover:pointer-events-auto backdrop-blur-md">
               {cur.nav.evolution.items.map(item => (
                <p key={item} className="hover:text-[#ff3c00] text-[9px] tracking-widest transition-colors">{item}</p>
              ))}
            </div>
          </div>

          <Link href="/research" className="cursor-pointer hover:text-[#00f2ff] transition-colors">{cur.nav.labs}</Link>
          <Link href="/framework" className="cursor-pointer hover:text-[#00f2ff] transition-colors">{cur.nav.mission}</Link>
          
          {/* API 供应商入口 */}
          <Link href="/documents" className="cursor-pointer hover:text-[#00f2ff] border-b border-cyan-500/30 transition-colors">
            {cur.nav.shop}
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-8">
          <div className="flex gap-3 text-[10px] font-black tracking-widest border border-white/20 px-3 py-1 bg-black/30 backdrop-blur-sm">
            <button onClick={() => setLang('en')} className={`hover:text-[#00f2ff] transition-colors ${lang === 'en' ? 'text-[#00f2ff]' : 'opacity-40'}`}>EN</button>
            <span className="opacity-20">/</span>
            <button onClick={() => setLang('zh')} className={`hover:text-[#00f2ff] transition-colors ${lang === 'zh' ? 'text-[#00f2ff]' : 'opacity-40'}`}>中</button>
          </div>
          <div className="text-[10px] font-bold tracking-widest opacity-60 hover:opacity-100 hover:text-[#00f2ff] transition-all cursor-pointer uppercase">
            {cur.login}
          </div>
        </div>
      </nav>

      {/* 认知阶段布局 */}
      <div className="relative z-10 snap-y snap-mandatory">
        {cur.phases.map((phase, idx) => (
          <section key={idx} className="h-screen snap-start flex flex-col justify-end px-12 pb-32 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8 space-y-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-[#00f2ff] text-[10px] font-mono tracking-[0.5em] uppercase opacity-70 mb-4">
                    PHASE_0{idx + 1}: {phase.subtitle}
                  </p>
                  <h2 className="text-7xl md:text-[11.5rem] font-black tracking-[-0.05em] leading-[0.8] italic uppercase whitespace-nowrap">
                    {phase.title}
                  </h2>
                </motion.div>
                <p className="max-w-xl text-xl text-white/40 font-light leading-relaxed tracking-wide">
                  {phase.desc}
                </p>
                <button className="border-2 border-white text-white px-16 py-5 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-black transition-all duration-700">
                  {cur.upgrade}
                </button>
              </div>

              {/* 实时状态控制框 */}
              <div className="lg:col-span-4 pb-4">
                <div className="bg-black/30 border border-white/10 p-10 backdrop-blur-3xl group cursor-crosshair hover:border-[#00f2ff]/50 transition-all">
                  <h4 className="font-black uppercase text-3xl italic tracking-tighter text-[#00f2ff] leading-none">
                    {cur.portalTitle}
                  </h4>
                  <p className="text-[9px] font-bold opacity-30 uppercase tracking-[0.3em] mt-6 leading-loose">
                    NODE: VX_CORE_0{idx + 1}<br/>
                    {cur.portalStatus}
                  </p>
                  <div className="mt-8 text-[10px] font-black tracking-widest opacity-40 group-hover:text-[#00f2ff] transition-all">
                    ACCESS_PORTAL →
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }
        body { background-color: black; margin: 0; }
        ::-webkit-scrollbar { width: 0px; }
      ` }} />
    </main>
  );
}