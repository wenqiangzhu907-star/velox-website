"use client";
import React, { useState, useEffect } from 'react';

export default function VeloxUltimateOS() {
  const [activePhase, setActivePhase] = useState(0);
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  // 1. 定义复杂的多语言数据结构，以支持下拉菜单
  const content = {
    zh: {
      // 导航结构化数据
      nav: {
        protocols: { title: "协议", items: ["脱敏程序", "核心重写", "神经同步"] },
        evolution: { title: "认知进化", items: ["超越算法", "硬件展开"] },
        labs: "实验室",
        mission: "使命",
        shop: "商店"
      },
      login: "登录门户",
      upgrade: "启动升级",
      // 核心内容
      phases: [
        { title: "DESYNC", subtitle: "强制脱敏协议", desc: "利用高频视觉脉冲，切断原有算法对前额叶的非法占用，清理意识残渣。" },
        { title: "RE-CODE", subtitle: "底层编译同步", desc: "5090 算力阵列介入。将人类湿件与碳基逻辑深度对齐，注入全新认知框架。" },
        { title: "RE-BOOT", subtitle: "意识逻辑重启", desc: "重构完成。意识摆脱算力耗材身份，实现底层逻辑的自主进化。" }
      ],
      portalTitle: "底层逻辑重构",
      portalStatus: "状态: 正在重新编译_"
    },
    en: {
      // 导航结构化数据
      nav: {
        protocols: { title: "PROTOCOLS", items: ["DESYNC_PROCEDURE", "CORE_REWRITE", "NEURAL_SYNC"] },
        evolution: { title: "COGNITIVE EVOLUTION", items: ["BEYOND_ALGORITHM", "HARDWARE_UNFOLD"] },
        labs: "VELOX LABS",
        mission: "MISSION",
        shop: "SHOP"
      },
      login: "PORTAL_LOGIN",
      upgrade: "INITIATE_UPGRADE",
      // 核心内容
      phases: [
        { title: "DESYNC", subtitle: "DESYNC_PROTOCOL", desc: "Utilizing high-frequency visual pulses to sever algorithmic control over the prefrontal cortex." },
        { title: "RE-CODE", subtitle: "HARDWARE_SYNC", desc: "5090 compute array intervention. Aligning human wetware with carbon-based logic." },
        { title: "RE-BOOT", subtitle: "NEURAL_REBIRTH", desc: "Re-coding complete. Consciousness transcends its role as compute material." }
      ],
      portalTitle: "NEURAL_OVERWRITE",
      portalStatus: "STATUS: RE-COMPILING_"
    }
  };

  const cur = content[lang];

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
      
      {/* 动态背景驱动 */}
      {[1, 2, 3].map((v, idx) => (
        <div key={v} className={`fixed inset-0 transition-opacity duration-1000 ${activePhase === idx ? 'opacity-40' : 'opacity-0'}`}>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={`/vid-0${v}.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
        </div>
      ))}

      {/* 2. 恢复 SpaceX 风格的复杂导航栏，并集成多语言 */}
      <nav className="fixed top-0 w-full z-[100] flex items-center px-12 py-8 bg-transparent" suppressHydrationWarning>
        <div className="text-xl font-black tracking-tighter uppercase italic mr-12">Velox Motion</div>

        {/* 动态选项菜单 - 恢复下拉结构，注入翻译数据 */}
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

          <span className="cursor-pointer hover:text-[#00f2ff] transition-colors">{cur.nav.labs}</span>
          <span className="cursor-pointer hover:text-[#00f2ff] transition-colors">{cur.nav.mission}</span>
          <span className="cursor-pointer hover:text-[#00f2ff] transition-colors">{cur.nav.shop}</span>
        </div>

        {/* 右侧：语言切换与登录 */}
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

      {/* 3. 主体吸附布局 - 确保字体样式严格符合上一版 */}
      <div className="relative z-10 snap-y snap-mandatory">
        {cur.phases.map((phase, idx) => (
          <section key={idx} className="h-screen snap-start flex flex-col justify-end px-12 pb-32 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8 space-y-12">
                <div className={`transition-all duration-1000 ${activePhase === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <p className="text-[#00f2ff] text-[10px] font-mono tracking-[0.5em] uppercase opacity-70 mb-4">
                    PHASE_0{idx + 1}: {phase.subtitle}
                  </p>
                  {/* 核心字体样式检查：11.5rem, black, italic, tight leading/tracking */}
                  <h2 className="text-7xl md:text-[11.5rem] font-black tracking-[-0.05em] leading-[0.8] italic uppercase whitespace-nowrap">
                    {phase.title}
                  </h2>
                </div>
                <p className="max-w-xl text-xl text-white/40 font-light leading-relaxed tracking-wide transition-all duration-1000 delay-300">
                  {phase.desc}
                </p>
                <button className="border-2 border-white text-white px-16 py-5 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-black transition-all duration-700">
                  {cur.upgrade}
                </button>
              </div>

              {/* 右侧控制框 */}
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