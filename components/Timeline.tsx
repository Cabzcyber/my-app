"use client";
import React from 'react';
import styles from '../styles/timeline.module.scss';

export default function Timeline() {

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelines}>
        
        <section className={`${styles.timeline} ${styles.experience}`}>
          <h2>Experience</h2>
          <ul className={styles.timelineItems}>
            <li>
              <h3>Founder & Pitcher of Pickarre</h3>
              <p>Entrepreneurship & Technology (CET), USTP · Self-employed<br/>
              <span style={{color: '#aaa', fontSize: '0.85rem'}}>Mar 2026 - Present (3 mos) · Cagayan de Oro, Philippines · On-site</span><br/>
              <span style={{color: '#ccc', fontSize: '0.85rem', display: 'block', marginTop: '0.5rem'}}>Represented the PickaRee platform at the CET Demo Day Systemwide Pitching Competition at USTP-CDO. Leadership, Problem Solving and +2 skills</span>
              </p>
            </li>
            <li>
              <h3>IT Ambassador</h3>
              <p>Google Developer Groups on Campus USTP · Full-time<br/>
              <span style={{color: '#aaa', fontSize: '0.85rem'}}>Aug 2025 - Mar 2026 (8 mos) · Hybrid</span><br/>
              <span style={{color: '#ccc', fontSize: '0.85rem', display: 'block', marginTop: '0.5rem'}}>Communication, Project Management and +2 skills</span>
              </p>
            </li>
            <li>
              <h3>NC II Computer Systems Servicing Trainee</h3>
              <p>TESDA · Internship<br/>
              <span style={{color: '#aaa', fontSize: '0.85rem'}}>Oct 2023 - Oct 2025 (2 yrs 1 mo)</span><br/>
              <span style={{color: '#ccc', fontSize: '0.85rem', display: 'block', marginTop: '0.5rem'}}>Installing and Configuring Computer System, Maintain Computer System and Networks and +3 skills</span>
              </p>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
