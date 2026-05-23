"use client";
import React, { useState, useEffect, useRef } from 'react';

const Github = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M12 18v4"/></svg>
);

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('Certifications');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const certifications = [
    { id: 1, title: 'Coursera Cybersecurity Certificate', image: '/CourseraCyberCert.png', caption: 'Professional cybersecurity certification.' },
    { id: 2, title: 'Coursera IT Support Certificate', image: '/CourseraITSupportCert.jpeg', caption: 'Foundational IT support skills.' },
    { id: 3, title: 'National Certificate II Computer Systems Servicing', image: '/NCII_Cert.png', caption: 'Hardware and systems maintenance.' },
    { id: 4, title: 'Net Academy Junior Cybersecurity Path', image: '/NetacadCert.png', caption: 'Networking and security training.' },
  ];

  const duplicatedCerts = [...certifications, ...certifications];

  useEffect(() => {
    if (activeTab !== 'Certifications') return;
    if (isHovered) return;

    let animationFrameId: number;
    const scrollContainer = scrollRef.current;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, activeTab]);

  const projects = [
    { id: 1, title: 'Mobile One Link Order Portal', image: '/angelProject.png', desc: 'My Family Pastries Business turn Order process Online', repo: 'https://github.com/Cabzcyber/angelscross.git' },
    { id: 2, title: 'Happy Family Maternal Management System', image: '/HappyFamily_Clinic_Project.png', desc: 'Our CAPSTONE Research Study and Software Product', repo: 'https://github.com/Cabzcyber/happyfamilyclinic.git' },
    { id: 3, title: 'BLYNK IOT Pet Feeder', image: '/BLYNKProjects.jpg', desc: 'BLYNK Smart App Control Pet Feeder', repo: 'https://github.com/Cabzcyber/petfeerder-IOT-BLYNK.git' },
    { id: 4, title: 'Pickaree Mobile Pasundo and Pasugo App', image: '/pickarresubg.png', desc: 'The Qualified Innovations In USTP Pitching Competition', repo: 'https://github.com/Cabzcyber/pickarryrespo.git' },
  ];

  return (
    <div style={{ width: '100%', color: 'white', marginTop: '0rem' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>
        {['Certifications', 'Projects'].map(tab => (
          <a
            key={tab}
            href={`#${tab}`}
            onClick={(e) => { e.preventDefault(); setActiveTab(tab); }}
            style={{
              fontSize: '1.2rem',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              color: activeTab === tab ? '#568aa3' : '#888',
              borderBottom: activeTab === tab ? '2px solid #568aa3' : '2px solid transparent',
              paddingBottom: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textDecoration: 'none'
            }}
          >
            {tab}
          </a>
        ))}
      </div>

      {/* Content */}
      <div style={{ minHeight: '300px' }}>
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        
        {activeTab === 'Certifications' && (
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="no-scrollbar"
            style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              overflowX: 'auto', 
              paddingBottom: '1rem',
              scrollBehavior: 'auto'
            }}
          >
            {duplicatedCerts.map((cert, index) => (
              <div key={`${cert.id}-${index}`} style={{
                minWidth: '280px',
                flex: '0 0 auto',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                transition: 'transform 0.2s, border-color 0.2s',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}>
                <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '160px', objectFit: 'contain', backgroundColor: 'rgba(255,255,255,0.02)' }} />
                <div style={{ padding: '1.25rem', flex: 1 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e0e0e0', marginBottom: '0.5rem' }}>{cert.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#aaa', lineHeight: '1.4' }}>{cert.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Projects' && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {projects.map(proj => (
              <div key={proj.id} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, border-color 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}>
                <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#e0e0e0', marginBottom: '0.75rem' }}>{proj.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#aaa', lineHeight: '1.5', marginBottom: '1.5rem' }}>{proj.desc}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                    <a href={proj.repo} target="_blank" rel="noopener noreferrer" style={{
                      padding: '0.5rem',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      color: '#ccc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.backgroundColor = '#568aa3'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}>
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
