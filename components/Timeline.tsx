"use client";
import React from 'react';
import styles from '../styles/timeline.module.scss';

export default function Timeline() {
  const [expandedIds, setExpandedIds] = React.useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const experiences = [
    {
      id: 1,
      title: 'Founder & Pitcher of Pickarre',
      company: 'Entrepreneurship & Technology (CET), USTP · Self-employed',
      date: 'Mar 2026 - Present (3 mos) · Cagayan de Oro, Philippines · On-site',
      description: 'Represented the PickaRee platform at the CET Demo Day Systemwide Pitching Competition at USTP-CDO.',
      skills: ['Leadership', 'Problem Solving', 'Communication', 'Information Technology']
    },
    {
      id: 2,
      title: 'IT Ambassador',
      company: 'Google Developer Groups on Campus USTP · Full-time',
      date: 'Aug 2025 - Mar 2026 (8 mos) · Hybrid',
      description: '',
      skills: ['Communication', 'Project Management', 'Teamwork', 'Leadership']
    },
    {
      id: 3,
      title: 'NC II Computer Systems Servicing Trainee',
      company: 'TESDA · Internship',
      date: 'Oct 2023 - Oct 2025 (2 yrs 1 mo)',
      description: '',
      skills: [
        'Installing and Configuring Computer System',
        'Maintain Computer System and Networks',
        'Setting up Computer Networks',
        'Setting up Computer Servers',
        'Troubleshooting'
      ]
    }
  ];

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelines}>
        
        <section className={`${styles.timeline} ${styles.experience}`}>
          <h2>Experience</h2>
          <ul className={styles.timelineItems}>
            {experiences.map((exp) => (
              <li key={exp.id}>
                <h3>{exp.title}</h3>
                <p>
                  {exp.company}<br/>
                  <span style={{color: '#aaa', fontSize: '0.85rem'}}>{exp.date}</span><br/>
                  {exp.description && (
                    <span style={{color: '#ccc', fontSize: '0.85rem', display: 'block', marginTop: '0.5rem'}}>
                      {exp.description}
                    </span>
                  )}
                </p>
                
                <div style={{ marginTop: '0.75rem' }}>
                  <button 
                    onClick={() => toggleExpand(exp.id)}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '16px',
                      color: '#568aa3',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#568aa3'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#568aa3'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#568aa3'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    {expandedIds.includes(exp.id) ? 'Hide skills' : 'See skills'}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expandedIds.includes(exp.id) ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>

                {expandedIds.includes(exp.id) && (
                  <div style={{ 
                    marginTop: '1rem', 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    paddingLeft: '0.5rem'
                  }}>
                    {exp.skills.map((skill, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          transition: 'color 0.2s, transform 0.2s', 
                          cursor: 'default', 
                          color: '#ccc', 
                          fontSize: '0.85rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem' 
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#568aa3'; e.currentTarget.style.transform = 'translateX(6px)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.transform = 'none'; }}
                      >
                        <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>•</span> {skill}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
}
