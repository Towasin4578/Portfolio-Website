/* Circular Skills Orbit Showcase with Continuous Rotation, Chromatic Center & Side Detail Drawer
 * Plus Gemini Context-Aware Chatbot Widget integration
 */

export interface SkillItem {
  id: string;
  name_en: string;
  name_bn: string;
  cat_en: string;
  cat_bn: string;
  status_en: string;
  status_bn: string;
  tagline_en: string;
  tagline_bn: string;
  desc_en: string;
  desc_bn: string;
  tags_en: string[];
  tags_bn: string[];
  color: string;
  svg: string;
}

export const SKILLS_LIST: SkillItem[] = [
  {
    id: 'c',
    name_en: 'C Programming',
    name_bn: 'সি প্রোগ্রামিং',
    cat_en: 'Core Architecture',
    cat_bn: 'কোর আর্কিটেকচার',
    status_en: 'Foundation · College & Algorithms',
    status_bn: 'মৌলিক ভিত্তি · কলেজ ও অ্যালগরিদম',
    tagline_en: 'The foundation of low-level memory and logic.',
    tagline_bn: 'মেমরি ম্যানেজমেন্ট ও নিখুঁত লজিকের ভিত্তি।',
    desc_en: 'Mastered pointers, dynamic memory allocation, structs, and core data structures. Developed high-efficiency problem solving habits and deep computational logic.',
    desc_bn: 'পয়েন্টার, মেমরি অ্যালোকেশন, স্ট্রাকচার ও ডেটা স্ট্রাকচারের গভীরে গিয়ে প্রোগ্রামিংয়ের শক্তিশালী ভিত্তি নির্মাণ করেছি।',
    tags_en: ['#Pointers', '#MemoryAllocation', '#DataStructures', '#CoreLogic'],
    tags_bn: ['#পয়েন্টার', '#মেমরিম্যানেজমেন্ট', '#ডেটাপদ্ধতি', '#লজিক'],
    color: '#00599C',
    svg: `<svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="60" fill="#00599C" opacity=".2"/><path d="M64 16C37.5 16 16 37.5 16 64s21.5 48 48 48c21.2 0 39.4-13.8 45.7-32.9h-17.7C88 88.5 76.9 96 64 96c-17.7 0-32-14.3-32-32s14.3-32 32-32c12.9 0 24 7.5 28 18.9h17.7C93.4 29.8 75.2 16 64 16z" fill="#00599C"/></svg>`
  },
  {
    id: 'python',
    name_en: 'Python',
    name_bn: 'পাইথন',
    cat_en: 'Automation & Scripting',
    cat_bn: 'অটোমেশন ও স্ক্রিপ্টিং',
    status_en: 'University · EEE Engineering',
    status_bn: 'বিশ্ববিদ্যালয় · ইইই ইঞ্জিনিয়ারিং',
    tagline_en: 'Versatile engineering automation & data handling.',
    tagline_bn: 'ইঞ্জিনিয়ারিং অটোমেশন ও দ্রুত সমস্যা সমাধান।',
    desc_en: 'Utilized across university labs for computational modeling, algorithmic tasks, hardware-software integration, and rapid automated tooling with clean syntax.',
    desc_bn: 'বিশ্ববিদ্যালয়ের ল্যাব ওয়ার্ক, ডেটা মডেলিং, অটোমেশন এবং দ্রুত অ্যালগরিদমিক স্ক্রিপ্ট তৈরির প্রধান আধুনিক ভাষা।',
    tags_en: ['#Automation', '#DataScripting', '#EEEComputing', '#CleanSyntax'],
    tags_bn: ['#অটোমেশন', '#ডেটাপ্রসেসিং', '#ইঞ্জিনিয়ারিং', '#স্ক্রিপ্টিং'],
    color: '#3776AB',
    svg: `<svg viewBox="0 0 128 128"><path d="M63.2 8c-26.6 0-25 11.5-25 11.5l.03 12h25.5v3.6H29.1S12 33.2 12 59.9c0 26.6 15 25.7 15 25.7h8.9v-12.5s-.5-15 14.8-15h25.3s14.3.2 14.3-13.9V21.9S91.8 8 63.2 8zm-13.7 7.2c2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.1 4.8-4.8 4.8-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8z" fill="#3776AB"/><path d="M64.8 120c26.6 0 25-11.5 25-11.5l-.03-12H64.3v-3.6h34.6s17.1 1.9 17.1-24.8c0-26.6-15-25.7-15-25.7h-8.9v12.5s.5 15-14.8 15H37s-14.3-.2-14.3 13.9v22.4S36.2 120 64.8 120zm13.7-7.2c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.1 4.8-4.8 4.8z" fill="#FFD438"/></svg>`
  },
  {
    id: 'html',
    name_en: 'HTML5',
    name_bn: 'এইচটিএমএল৫',
    cat_en: 'Frontend Foundation',
    cat_bn: 'ফ্রন্টএন্ড ভিত্তি',
    status_en: 'Web Standard · Semantic & Accessible',
    status_bn: 'ওয়েব স্ট্যান্ডার্ড · সিম্যান্টিক ও অ্যাক্সেসিবল',
    tagline_en: 'Semantic, accessible, and modern web markup.',
    tagline_bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশনের সুসংগঠিত কাঠামো।',
    desc_en: 'Structuring performant, accessible, and SEO-friendly document architectures with semantic tags, responsive media formats, and clean DOM trees.',
    desc_bn: 'সার্চ ইঞ্জিন ফ্রেন্ডলি, অ্যাক্সেসিবল এবং সুসংগঠিত সিম্যান্টিক মার্কআপ তৈরি যা সব ধরণের ডিভাইসে নিখুঁতভাবে কাজ করে।',
    tags_en: ['#SemanticMarkup', '#Accessibility', '#DOM', '#SEOStructure'],
    tags_bn: ['#সিম্যান্টিকওয়েব', '#অ্যাক্সেসিবিলিটি', '#ডমকাঠামো', '#এসইও'],
    color: '#E34F26',
    svg: `<svg viewBox="0 0 128 128"><path d="M19.2 113.6L9.6 6.4h108.8l-9.6 107.2-44.8 12.4-44.8-12.4z" fill="#E34F26"/><path d="M64 117.3l37-10.2 8.1-90.7H64v100.9z" fill="#EF652A"/><path d="M64 49.3H46.6l-1.2-13.4H64V22.6H31.5l3.6 40.1H64V49.3zm0 35.8l-.2.1-15.5-4.2-1-11.1H33.8l1.9 21.6 28.3 7.8V85.1z" fill="#EDEBEA"/><path d="M64 49.3h17.4l-1.6 18.2-15.8 4.3v13.3l28.3-7.8 3.7-41.4H64v13.4zm0-26.7v13.3h32.5l1.2-13.3H64z" fill="#FFF"/></svg>`
  },
  {
    id: 'css',
    name_en: 'CSS3',
    name_bn: 'সিএসএস৩',
    cat_en: 'UI & Motion Design',
    cat_bn: 'ইউআই ও মোশন ডিজাইন',
    status_en: 'Responsive Layouts · Flexbox & Grid',
    status_bn: 'রেসপন্সিভ ডিজাইন · ফ্লেক্স ও গ্রিড',
    tagline_en: 'Fluid layouts, responsive aesthetics & micro-interactions.',
    tagline_bn: 'ফ্লেক্সিবল লেআউট ও মসৃণ অ্যানিমেশন।',
    desc_en: 'Crafting responsive Flexbox and Grid systems, customized dark themes, GPU-accelerated CSS animations, and polished micro-interactions across screen sizes.',
    desc_bn: 'আধুনিক ফ্লেক্সবক্স ও গ্রিড লেআউট, ডার্ক মোড ডিজাইন সিস্টেম এবং হার্ডওয়্যার-অ্যাক্সিলারেটেড মসৃণ অ্যানিমেশন।',
    tags_en: ['#Flexbox', '#CSSGrid', '#KeyframeMotion', '#ResponsiveDesign'],
    tags_bn: ['#ফ্লেক্সবক্স', '#সিএসএসগ্রিড', '#অ্যানিমেশন', '#রেসপন্সিভ'],
    color: '#1572B6',
    svg: `<svg viewBox="0 0 128 128"><path d="M19.2 113.6L9.6 6.4h108.8l-9.6 107.2-44.8 12.4-44.8-12.4z" fill="#1572B6"/><path d="M64 117.3l37-10.2 8.1-90.7H64v100.9z" fill="#33A9DC"/><path d="M64 49.3H46.6l-1.2-13.4H64V22.6H31.5l3.6 40.1H64V49.3zm0 35.8l-.2.1-15.5-4.2-1-11.1H33.8l1.9 21.6 28.3 7.8V85.1z" fill="#EDEBEA"/><path d="M64 49.3h17.4l-1.6 18.2-15.8 4.3v13.3l28.3-7.8 3.7-41.4H64v13.4zm0-26.7v13.3h32.5l1.2-13.3H64z" fill="#FFF"/></svg>`
  },
  {
    id: 'webdev',
    name_en: 'Web Development',
    name_bn: 'ওয়েব ডেভেলপমেন্ট',
    cat_en: 'Modern Web Engineering',
    cat_bn: 'মডার্ন ওয়েব ইঞ্জিনিয়ারিং',
    status_en: 'Dedicated Focus · Learning since Jan 2023',
    status_bn: 'নিয়মিত চর্চা · ১০ জানুয়ারি ২০২৩ থেকে',
    tagline_en: 'Building interactive client-server web experiences.',
    tagline_bn: 'ইন্টারেক্টিভ ওয়েব অ্যাপ্লিকেশন ও এপিআই ইন্টিগ্রেশন।',
    desc_en: 'Started the journey on January 10, 2023. Continuously expanding knowledge across JavaScript, TypeScript, modern component architectures, API hooks, and client state.',
    desc_bn: '১০ জানুয়ারি ২০২৩ থেকে শেখার যাত্রা শুরু। জাভাস্ক্রিপ্ট, আধুনিক ফ্রন্টএন্ড ফ্রেমওয়ার্ক, এবং দ্রুতগতির ওয়েব অ্যাপ্লিকেশন নির্মাণে প্রতিদিন উন্নতি।',
    tags_en: ['#TypeScript', '#ModernJS', '#RESTAPIs', '#StateManagement'],
    tags_bn: ['#টাইপস্ক্রিপ্ট', '#মডার্নওয়েব', '#এপিআই', '#অ্যাপ্লিকেশন'],
    color: '#61DAFB',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"/></svg>`
  },
  {
    id: 'math',
    name_en: 'Mathematics',
    name_bn: 'গণিত',
    cat_en: 'Analytical Foundations',
    cat_bn: 'অ্যানালিটিক্যাল ফাউন্ডেশন',
    status_en: 'Passion · Problem Solving',
    status_bn: 'প্যাশন · যুক্তি ও বিশ্লেষণ',
    tagline_en: 'Analytical thinking, discrete logic & modeling.',
    tagline_bn: 'জটিল সমস্যা সমাধানের সবচেয়ে প্রিয় মাধ্যম।',
    desc_en: 'Solving mathematical problems is one of my favourite ways to spend time. Deep interest in discrete math, linear algebra, graph theory, and mathematical patterns.',
    desc_bn: 'অবসর কাটানোর সবচেয়ে পছন্দের মাধ্যম — জটিল গাণিতিক যুক্তির বিশ্লেষণ ও নিখুঁত সমাধান যা অ্যালগরিদমের পেছনে চালিকাশক্তি হিসেবে কাজ করে।',
    tags_en: ['#DiscreteMath', '#LinearAlgebra', '#ProblemSolving', '#LogicAnalysis'],
    tags_bn: ['#ডিসক্রিটম্যাথ', '#অ্যালজেব্রা', '#বিশ্লেষণ', '#লজিক্যালথিংকিং'],
    color: '#7DE8FF',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#7DE8FF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19L10 5M10 19L4 5M14 7h6M14 11h6M17 15v6M14 18h6"/></svg>`
  },
  {
    id: 'cp',
    name_en: 'Competitive Programming',
    name_bn: 'কম্পিটিটিভ প্রোগ্রামিং',
    cat_en: 'Algorithms & Optimization',
    cat_bn: 'অ্যালগরিদম ও অপটিমাইজেশন',
    status_en: 'Practice · Algorithmic Speed',
    status_bn: 'অনুশীলন · জটিলতা কমানো',
    tagline_en: 'Algorithmic time complexity & dynamic optimization.',
    tagline_bn: 'টাইম কমপ্লেক্সিটি ও অ্যালগরিদমিক চিন্তার গভীরতা।',
    desc_en: 'Active practice in algorithmic problem solving: binary search, recursion, memoization, graph traversal, and time/space complexity optimization.',
    desc_bn: 'বাইনারি সার্চ, গ্রাফ ট্রাভার্সাল, ডায়নামিক প্রোগ্রামিং ও টাইম কমপ্লেক্সিটি নিখুঁত করার নিরন্তর চ্যালেঞ্জিং অনুশীলন।',
    tags_en: ['#Algorithms', '#TimeComplexity', '#BinarySearch', '#DataStructures'],
    tags_bn: ['#অ্যালগরিদম', '#কমপ্লেক্সিটি', '#বাইনারিসার্চ', '#অপটিমাইজেশন'],
    color: '#FF9800',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
  },
  {
    id: 'ytseo',
    name_en: 'YouTube SEO',
    name_bn: 'ইউটিউব এসইও',
    cat_en: 'Audience Growth & SEO',
    cat_bn: 'অডিয়েন্স গ্রোথ ও এসইও',
    status_en: 'Freelance · Fiverr Gig Active',
    status_bn: 'ফ্রিল্যান্সিং · ফাইভার গিগ সক্রিয়',
    tagline_en: 'Audience reach, high-CTR titles & algorithmic ranking.',
    tagline_bn: 'ভিডিও র‍্যাঙ্কিং, কিওয়ার্ড অপটিমাইজেশন ও চ্যানেল বৃদ্ধি।',
    desc_en: 'Helping YouTube creators grow their channels through targeted keyword research, competitor gap analysis, click-worthy titles, strategic descriptions, and video tag schema.',
    desc_bn: 'ইউটিউব ক্রিয়েটরদের চ্যানেল গ্রোথে সহায়তা — সঠিক কিওয়ার্ড নির্বাচন, উচ্চ সিটিআর টাইটেল, এসইও মেটাডেটা ও ট্যাগ অপটিমাইজেশন।',
    tags_en: ['#KeywordResearch', '#AudienceReach', '#HighCTRTitles', '#VideoSEO'],
    tags_bn: ['#কিওয়ার্ডরিসার্চ', '#অডিয়েন্সরিচ', '#ভিডিওএসইও', '#চ্যানেলগ্রোথ'],
    color: '#FF0000',
    svg: `<svg viewBox="0 0 128 128"><path d="M123.8 35.5c-1.4-5.4-5.7-9.7-11.1-11.1C102.9 22 64 22 64 22s-38.9 0-48.7 2.4c-5.4 1.4-9.7 5.7-11.1 11.1C1.8 45.3 1.8 64 1.8 64s0 18.7 2.4 28.5c1.4 5.4 5.7 9.7 11.1 11.1C25.1 106 64 106 64 106s38.9 0 48.7-2.4c5.4-1.4 9.7-5.7 11.1-11.1 2.4-9.8 2.4-28.5 2.4-28.5s0-18.7-2.4-28.5z" fill="#FF0000"/><path d="M52 82l30-18-30-18v36z" fill="#FFF"/></svg>`
  },
  {
    id: 'team',
    name_en: 'Team Collaboration',
    name_bn: 'টিম কলাবোরেশন',
    cat_en: 'Workflow & Culture',
    cat_bn: 'ওয়ার্কফ্লো ও টিম কালচার',
    status_en: 'Soft Skill · Git & Open Source',
    status_bn: 'সফট স্কিল · গিট ও দলগত কাজ',
    tagline_en: 'Thriving in team environments with Git & shared goals.',
    tagline_bn: 'গিট ভার্সন কন্ট্রোল ও পারস্পরিক বোঝাপড়ার মাধ্যমে দলগত সাফল্য।',
    desc_en: 'Passionate about collaborating in multidisciplinary teams. Experience with Git branching workflows, clear technical communication, code reviews, and collective ownership.',
    desc_bn: 'দলগত কাজে বিশ্বাসী — গিট ভার্সন কন্ট্রোল, গঠনমূলক আলোচনা, কোড রিভিউ এবং সবার সাথে মিলে সফলভাবে প্রজেক্ট ডেলিভারি দেওয়া।',
    tags_en: ['#GitWorkflows', '#Communication', '#CodeReviews', '#AgileTeamwork'],
    tags_bn: ['#গিটওয়ার্কফ্লো', '#যোগাযোগ', '#কোডরিভিউ', '#দলগতকাজ'],
    color: '#10B981',
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  }
];

let activeIndex = 0;
let isPanelOpen = true; // Open with first skill by default

export function setupSkillsOrbit() {
  const container = document.getElementById('skills-orbit-container');
  if (!container) return;

  function renderShowcase() {
    if (!container) return;
    const lang = document.documentElement.lang || 'en';
    const isBn = lang === 'bn';
    const activeSkill = SKILLS_LIST[activeIndex] || SKILLS_LIST[0];

    container.innerHTML = `
      <div class="skills-orbit-showcase" id="skills-orbit-showcase">
        <div class="skills-orbit-grid">
          <!-- Left/Center Circular Orbit Wheel -->
          <div class="orbit-stage-wrap">
            <div class="orbit-stage" id="orbit-stage" role="region" aria-label="Circular Skills Orbit">
              <!-- Dashed orbit track lines -->
              <div class="orbit-dashed-track"></div>
              <div class="orbit-inner-track"></div>

              <!-- Center Hub with Colorful "MY SKILLS" -->
              <div class="orbit-center-hub">
                <div class="hub-ambient-glow"></div>
                <div class="hub-pulse-radar"></div>
                <div class="chromatic-skills-text" id="orbit-center-title">
                  ${isBn ? 'আমার স্কিলস' : 'MY SKILLS'}
                </div>
                <div class="orbit-center-hint" id="orbit-center-hint">
                  <span class="hint-dot"></span>
                  <span id="orbit-hint-text">${isBn ? 'যেকোনো লোগোতে ক্লিক করুন' : 'CLICK ANY LOGO'}</span>
                </div>
              </div>

              <!-- Orbit items continuously rotating around the circular track -->
              <div class="orbit-items-track" id="orbit-items-track">
                ${SKILLS_LIST.map((s, idx) => {
                  const angle = (idx / SKILLS_LIST.length) * 360;
                  const isActive = idx === activeIndex && isPanelOpen;
                  const name = isBn ? s.name_bn : s.name_en;
                  return `
                    <div class="orbit-squircle-node" style="--angle: ${angle}deg;" data-idx="${idx}">
                      <button type="button" class="squircle-card ${isActive ? 'active' : ''}" data-idx="${idx}" aria-label="${name}" title="${name}">
                        <div class="squircle-icon-wrap">
                          ${s.svg}
                        </div>
                      </button>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- Right: Sleek Professional Side Detail Panel -->
          <div class="skill-side-panel ${isPanelOpen ? 'open' : ''}" id="skill-side-panel" role="region" aria-live="polite">
            <div class="side-panel-header">
              <span class="side-category-pill" id="side-category-pill">
                ${isBn ? activeSkill.cat_bn : activeSkill.cat_en}
              </span>
              <button type="button" class="side-panel-close" id="side-panel-close" aria-label="Close detail panel" title="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div class="side-panel-hero">
              <div class="side-icon-box" id="side-icon-box" style="--brand-color: ${activeSkill.color};">
                ${activeSkill.svg}
              </div>
              <div class="side-hero-text">
                <h3 class="side-skill-title" id="side-skill-title">
                  ${isBn ? activeSkill.name_bn : activeSkill.name_en}
                </h3>
                <span class="side-skill-status" id="side-skill-status">
                  ${isBn ? activeSkill.status_bn : activeSkill.status_en}
                </span>
              </div>
            </div>

            <div class="side-tagline" id="side-tagline">
              ${isBn ? activeSkill.tagline_bn : activeSkill.tagline_en}
            </div>

            <p class="side-description" id="side-description">
              ${isBn ? activeSkill.desc_bn : activeSkill.desc_en}
            </p>

            <div class="side-tags-wrap" id="side-tags-wrap">
              ${(isBn ? activeSkill.tags_bn : activeSkill.tags_en).map(t => `<span class="side-chip">${t}</span>`).join('')}
            </div>

            <div class="side-action-row">
              <button type="button" class="side-ai-prompt-btn" id="side-ai-btn" data-skill="${activeSkill.name_en}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                <span id="side-ai-btn-text">${isBn ? 'এই স্কিল সম্পর্কে এআই-কে জিজ্ঞেস করুন ↗' : 'Ask AI about this skill ↗'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Attach event handlers
    const cards = container.querySelectorAll('.squircle-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(card.getAttribute('data-idx') || '0', 10);
        selectSkill(idx, true);
      });
    });

    const closeBtn = document.getElementById('side-panel-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isPanelOpen = false;
        const panel = document.getElementById('skill-side-panel');
        if (panel) panel.classList.remove('open');
        container.querySelectorAll('.squircle-card').forEach(c => c.classList.remove('active'));
      });
    }

    // Connect "Ask AI about this skill" button directly to Gemini chat
    const aiBtn = document.getElementById('side-ai-btn');
    if (aiBtn) {
      aiBtn.addEventListener('click', () => {
        const skillName = SKILLS_LIST[activeIndex]?.name_en || 'Programming';
        const trigger = document.getElementById('chat-trigger-btn');
        const input = document.getElementById('chat-text-input') as HTMLInputElement;
        const form = document.getElementById('chat-input-form') as HTMLFormElement;
        
        // Open chatbot if not open
        const windowEl = document.getElementById('chat-window');
        if (windowEl && !windowEl.classList.contains('active')) {
          trigger?.click();
        }

        // Fill prompt and submit
        if (input && form) {
          const prompt = `Tell me more about Ashraf's experience and projects using ${skillName}.`;
          input.value = prompt;
          setTimeout(() => {
            form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
          }, 150);
        }
      });
    }
  }

  function selectSkill(idx: number, openPanel: boolean = true) {
    if (idx < 0 || idx >= SKILLS_LIST.length) return;
    activeIndex = idx;
    if (openPanel) isPanelOpen = true;

    const lang = document.documentElement.lang || 'en';
    const isBn = lang === 'bn';
    const skill = SKILLS_LIST[idx];

    // Update active state on squircle cards
    const cards = container?.querySelectorAll('.squircle-card');
    cards?.forEach(c => {
      const cIdx = parseInt(c.getAttribute('data-idx') || '-1', 10);
      c.classList.toggle('active', cIdx === idx && isPanelOpen);
    });

    // Update Side Panel
    const panel = document.getElementById('skill-side-panel');
    if (panel) {
      if (isPanelOpen) {
        panel.classList.add('open');
      } else {
        panel.classList.remove('open');
      }
      panel.style.borderLeftColor = skill.color;
    }

    const catPill = document.getElementById('side-category-pill');
    if (catPill) {
      catPill.textContent = isBn ? skill.cat_bn : skill.cat_en;
      catPill.style.color = skill.color;
      catPill.style.borderColor = skill.color + '55';
    }

    const iconBox = document.getElementById('side-icon-box');
    if (iconBox) {
      iconBox.innerHTML = skill.svg;
      iconBox.style.setProperty('--brand-color', skill.color);
    }

    const titleEl = document.getElementById('side-skill-title');
    if (titleEl) titleEl.textContent = isBn ? skill.name_bn : skill.name_en;

    const statusEl = document.getElementById('side-skill-status');
    if (statusEl) statusEl.textContent = isBn ? skill.status_bn : skill.status_en;

    const taglineEl = document.getElementById('side-tagline');
    if (taglineEl) taglineEl.textContent = isBn ? skill.tagline_bn : skill.tagline_en;

    const descEl = document.getElementById('side-description');
    if (descEl) descEl.textContent = isBn ? skill.desc_bn : skill.desc_en;

    const tagsWrap = document.getElementById('side-tags-wrap');
    if (tagsWrap) {
      const tags = isBn ? skill.tags_bn : skill.tags_en;
      tagsWrap.innerHTML = tags.map(t => `<span class="side-chip">${t}</span>`).join('');
    }

    const aiBtnText = document.getElementById('side-ai-btn-text');
    if (aiBtnText) {
      aiBtnText.textContent = isBn
        ? `এই স্কিল (${skill.name_bn}) সম্পর্কে এআই-কে জিজ্ঞেস করুন ↗`
        : `Ask AI about ${skill.name_en} ↗`;
    }
  }

  renderShowcase();
  (window as any).__reRenderSkillsOrbit = renderShowcase;
}

// Setup Gemini Chatbot Widget
export function setupGeminiChatbot() {
  const chatWidget = document.getElementById('gemini-chat-widget');
  if (!chatWidget) return;

  let chatHistory: Array<{ role: 'user' | 'assistant'; content: string }> = [];
  let isSending = false;

  const trigger = document.getElementById('chat-trigger-btn');
  const windowEl = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close-btn');
  const form = document.getElementById('chat-input-form') as HTMLFormElement;
  const input = document.getElementById('chat-text-input') as HTMLInputElement;
  const messagesThread = document.getElementById('chat-messages-thread');
  const chipsContainer = document.getElementById('chat-quick-chips');

  if (!trigger || !windowEl || !closeBtn || !form || !input || !messagesThread) return;

  function toggleChat(open?: boolean) {
    const shouldOpen = open !== undefined ? open : !windowEl?.classList.contains('active');
    if (shouldOpen) {
      windowEl?.classList.add('active');
      trigger?.classList.add('chat-open');
      input?.focus();
      if (chatHistory.length === 0) {
        showGreeting();
      }
    } else {
      windowEl?.classList.remove('active');
      trigger?.classList.remove('chat-open');
    }
  }

  trigger.addEventListener('click', () => toggleChat());
  closeBtn.addEventListener('click', () => toggleChat(false));

  function showGreeting() {
    const lang = document.documentElement.lang || 'en';
    const isBn = lang === 'bn';
    const greetingText = isBn
      ? 'হ্যালো! আমি তোয়াসিনের এআই সহকারী। তোয়াসিনের শিক্ষা, প্রোগ্রামিং দক্ষতা, প্রজেক্ট অথবা যোগাযোগের বিষয়ে যেকোনো প্রশ্ন করতে পারেন!'
      : "Hello! I am Ashraf's AI Assistant. Feel free to ask me anything about his engineering studies, programming skills, projects, or how to collaborate!";
    
    appendMessage('assistant', greetingText);
  }

  function appendMessage(role: 'user' | 'assistant', text: string) {
    const msgEl = document.createElement('div');
    msgEl.className = `chat-msg ${role}`;
    
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\n/g, '<br/>');

    msgEl.innerHTML = `
      <div class="msg-bubble">
        ${formatted}
      </div>
    `;

    messagesThread?.appendChild(msgEl);
    messagesThread?.scrollTo({ top: messagesThread.scrollHeight, behavior: 'smooth' });
  }

  function showTypingIndicator(): HTMLElement {
    const typing = document.createElement('div');
    typing.className = 'chat-msg assistant typing-indicator-msg';
    typing.id = 'chat-typing-dots';
    typing.innerHTML = `
      <div class="msg-bubble typing-bubble">
        <span></span><span></span><span></span>
      </div>
    `;
    messagesThread?.appendChild(typing);
    messagesThread?.scrollTo({ top: messagesThread.scrollHeight, behavior: 'smooth' });
    return typing;
  }

  async function handleSend(userText: string) {
    const trimmed = userText.trim();
    if (!trimmed || isSending) return;

    isSending = true;
    input.value = '';
    appendMessage('user', trimmed);
    chatHistory.push({ role: 'user', content: trimmed });

    const typingEl = showTypingIndicator();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: trimmed,
          messages: chatHistory,
          lang: document.documentElement.lang || 'en',
        }),
      });

      typingEl.remove();

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      const reply = data.reply || "I'm here to help! Could you ask that once more?";
      appendMessage('assistant', reply);
      chatHistory.push({ role: 'assistant', content: reply });
    } catch (err) {
      typingEl.remove();
      console.error('Chat error:', err);
      const isBn = (document.documentElement.lang || 'en') === 'bn';
      appendMessage(
        'assistant',
        isBn
          ? 'দুঃখিত, সংযোগে সাময়িক সমস্যা হচ্ছে। আপনি সরাসরি তোয়াসিনের সাথে ইমেইল (towasin344533@gmail.com) বা হোয়াটসঅ্যাপে (+8801971124566) যোগাযোগ করতে পারেন!'
          : "I'm temporarily having trouble connecting, but you can always reach Ashraf directly at towasin344533@gmail.com or on WhatsApp at +8801971124566!"
      );
    } finally {
      isSending = false;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSend(input.value);
  });

  // Quick Chips
  chipsContainer?.querySelectorAll('.quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      if (prompt) {
        handleSend(prompt);
      }
    });
  });
}

// Auto bootstrap on DOM load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    setupSkillsOrbit();
    setupGeminiChatbot();
  });
}
