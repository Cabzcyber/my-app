"use client";
import React from 'react';

const Github = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M12 18v4"/></svg>
);
const Linkedin = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Facebook = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Mail = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const Globe = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
const Discord = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export default function ProfileCard() {
  const [activeTab, setActiveTab] = React.useState('About Me');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', width: '100%', textAlign: 'left' }}>
        <div style={{ flexShrink: 0, position: 'relative' }}>
          
          {/* Instagram-style Note Bubble */}
          <div style={{
            position: 'absolute',
            top: '30px',
            right: '-10px',
            zIndex: 10,
            animation: 'float-note 3s ease-in-out infinite'
          }}>
            <div style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--card-border)',
              borderRadius: '20px',
              padding: '8px 16px',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              Building cool stuff 🚀
              
              {/* Tail pointing towards avatar */}
              <div style={{
                position: 'absolute',
                bottom: '-5px',
                left: '20px',
                width: '10px',
                height: '10px',
                background: 'var(--glass-bg)',
                borderBottom: '1px solid var(--card-border)',
                borderRight: '1px solid var(--card-border)',
                transform: 'rotate(45deg)',
                zIndex: -1
              }} />
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-69.145 -27.812 329.366 298.565" width="300" height="300" style={{ pointerEvents: 'none' }}>
            <defs>
              <pattern id="profile-image" x="-69.145" y="-27.812" width="329.366" height="298.565" patternUnits="userSpaceOnUse">
                <image href="/LUKE.JPG" x="15" y="-5" width="280" height="280" preserveAspectRatio="xMidYMin slice" />
              </pattern>
              <filter id="shape-fx" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="6" stdDeviation="7" floodColor="#000000" floodOpacity="0.18" />
              </filter>
            </defs>
            <path d="M 119.250 -6.162 C 156.111 -7.812 147.117 48.104 178.381 21.619 C 209.646 48.104 161.021 106.622 203.371 95.050 C 240.221 106.622 225.230 201.141 197.236 219.786 C 169.241 201.141 131.220 219.403 101.650 250.753 C 63.280 219.403 83.255 187.145 -19.642 227.342 C -40.039 187.145 5.305 88.226 -49.145 113.750 C -38.695 88.226 -20.946 19.204 32.358 41.158 C 85.662 19.204 82.389 -7.812 119.250 -6.162 Z" fill="url(#profile-image)" stroke="#bebbbb" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" filter="url(#shape-fx)" />
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 'bold', lineHeight: '1.2', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            Luke Zichri Cabatingan 
            <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>(Cabz)</span>
          </h1>
          <h2 style={{ color: '#568aa3', fontSize: '1rem', marginTop: '0.5rem', lineHeight: '1.4' }}>3rd Year IT Student</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
            <span style={{ color: '#568aa3' }}><Globe size={16} /></span>
            <span>Cagayan de Oro, Philippines</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {[
            { Icon: Github, href: 'https://github.com/Cabzcyber' },
            { Icon: Linkedin, href: 'www.linkedin.com/in/luke-cabatingan-99076b285' },
            { Icon: Facebook, href: 'https://www.facebook.com/zicri.mendoza.1' },
            { Icon: Mail, href: 'mailto:cabatinganlukezichri@gmail.com' },
            { Icon: Discord, href: '#' }
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'var(--card-border)', color: 'var(--text-secondary)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 50 }} 
               onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.backgroundColor = '#568aa3'; }}
               onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.backgroundColor = 'var(--card-border)'; }}>
              <Icon size={20} />
            </a>
          ))}
        </div>
        
        <button 
          onClick={() => window.print()}
          style={{
            padding: '0.5rem 1.25rem',
            backgroundColor: 'var(--card-border)',
            border: '1px solid var(--hover-bg)',
            borderRadius: '24px',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            position: 'relative',
            zIndex: 50
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#568aa3'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = '#568aa3'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--hover-bg)'; }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Print CV
        </button>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', width: '100%', flexWrap: 'wrap', position: 'relative', zIndex: 50, paddingBottom: '0.5rem', borderBottom: '1px solid var(--card-border)' }}>
        {['About Me', 'Skills', 'Education', 'Languages'].map((tab) => (
          <a 
            key={tab} 
            href={`#${tab.replace(/\s+/g, '')}`}
            onClick={(e) => { e.preventDefault(); setActiveTab(tab); }}
            style={{ 
              color: activeTab === tab ? '#568aa3' : 'var(--text-muted)', 
              cursor: 'pointer', 
              fontSize: '1rem', 
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              borderBottom: activeTab === tab ? '2px solid #568aa3' : '2px solid transparent',
              paddingBottom: '0.5rem',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              pointerEvents: 'auto',
              textDecoration: 'none'
            }}>
            {tab}
          </a>
        ))}
      </div>
      
      <div style={{ width: '100%', textAlign: 'left', marginBottom: '1rem', padding: '1.5rem', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--card-border)' }}>
        {activeTab === 'Skills' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#568aa3' }}>Skills</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { category: 'Web Development', skills: ['CSS', 'JavaScript', 'TypeScript', 'Next.js', 'React'] },
                { category: 'Mobile Development', skills: ['Expo', 'React Native'] },
                { category: 'Database', skills: ['PostgreSQL', 'MySQL'] },
                { category: 'Programming Languages', skills: ['Python', 'C++', 'Java', 'PHP', 'Arduino'] },
                { category: 'DevOps & Tools', skills: ['Supabase', 'Docker', 'Git', 'GitHub', 'npm', 'pnpm', 'Linux', 'Vercel', 'Notion', 'Railway', 'Antigravity', 'VS Code', 'Postman', 'PyCharm'] },
                { category: 'Design', skills: ['Figma', 'CapCut', 'Draw.io'] },
                { category: 'AI Tools', skills: ['Gemini', 'Claude', 'Deepseek', 'Kimi', 'Antigravity', 'Cursor'] },
                { category: 'Office Tools', skills: ['Google Workspace', 'Google Docs', 'Google Sheets', 'Google Drive', 'Google Meet', 'Calendar', 'Gmail', 'Microsoft Outlook', 'WPS Office'] },
              ].map((group, idx) => (
                <div key={idx}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: '600' }}>{group.category}</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {group.skills.map((skill, i) => (
                      <span key={i} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', color: 'var(--text-primary)', backgroundColor: 'var(--card-border)', borderRadius: '20px', transition: 'all 0.2s', cursor: 'pointer' }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--hover-border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'About Me' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#568aa3' }}>About Me</h3>
            <p style={{ lineHeight: '1.6', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              To Learn and Earned Experience, A 3rd year IT student, cybersecurity and IT support enthusiast eager to gain and apply practical experience both technical and ethical work basis beyond my comfort zone. Also consistently gaining theoretical knowledge in school (Top Performing student) and grabbing opportunities in online education courses in my aspiring tech field.
            </p>
          </div>
        )}

        {activeTab === 'Education' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#568aa3' }}>Educational Background</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>College:</strong> University of Science and Technology of Southern Philippines - Jasaan Campus</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Senior High School:</strong> Saint Ignatius Technical College Of Tagoloan</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Junior High School:</strong> Saint Mary's Academy of Jasaan</li>
              <li><strong>Elementary:</strong> Saint Louis College Cebu</li>
            </ul>
          </div>
        )}

        {activeTab === 'Languages' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#568aa3' }}>Languages</h3>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>English:</strong> Full professional proficiency</li>
              <li><strong>Tagalog:</strong> Professional working proficiency</li>
            </ul>
          </div>
        )}
      </div>

      <div style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes float-note {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(2deg); }
          }
          .marquee-container {
            display: flex;
            gap: 1rem;
            width: 200%;
            animation: marquee 20s linear infinite;
          }
          .marquee-container:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="marquee-container">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem' }}>
              <img src="https://skillicons.dev/icons?i=react,nextjs,typescript,tailwind,nodejs,git,figma" alt="skills" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
