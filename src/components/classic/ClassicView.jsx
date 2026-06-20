import React from 'react';
import { PORTFOLIO_DATA } from '../../data/projects';

const ClassicView = () => {
  const data = PORTFOLIO_DATA;

  return (
    <div className="classic-container animate-fade-in">
      
      {/* 1. BIO */}
      <section className="classic-card">
        <h2 style={{ color: data.Me.color }}>{data.Me.title}</h2>
        <div className="classic-bio">
          <img src={data.Me.image} alt="Kris" className="bio-img-classic" />
          <div className="bio-text-classic">
            {data.Me.description.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* 2. SKILLS (Badges) */}
      <section className="classic-card">
        <h2 style={{ color: data.SKL.color }}>{data.SKL.title}</h2>
        <div className="classic-skills-grid">
          {data.SKL.badges.map((b, i) => <img key={i} src={b} alt="badge" />)}
        </div>
      </section>

      {/* 3. PROJECTS */}
      <section className="classic-card">
        <h2 style={{ color: data.PRJ.color }}>{data.PRJ.title}</h2>
        {data.PRJ.projects.map((proj, i) => (
          <div key={i} className="classic-project-item">
            <h3 className="neon-text">{proj.name}</h3>
            <div className="classic-gallery">
              {proj.images.map((img, j) => <img key={j} src={img} alt="preview" />)}
            </div>
            <p className="description-text">{proj.desc}</p>
            <div className="classic-links">
              {proj.links.map((l, k) => <a key={k} href={l.url} target="_blank" rel="noreferrer">[ {l.label} ]</a>)}
            </div>
          </div>
        ))}
      </section>

      {/* 4. EXPERIENCES (Stories) */}
      <section className="classic-card">
        <h2 style={{ color: data.EXP.color }}>{data.EXP.title}</h2>
        {data.EXP.experiences.map((exp, i) => (
          <div key={i} className="classic-project-item">
            <h3 style={{ color: data.EXP.color }}>{exp.name}</h3>
            <div className="classic-gallery">
              {exp.images.map((img, j) => <img key={j} src={img} alt="adventure" />)}
            </div>
            <p className="description-text">{exp.desc}</p>
          </div>
        ))}
      </section>

      {/* 5. RESUME (PDF) */}
      <section className="classic-card">
        <h2 style={{ color: data.RES.color }}>{data.RES.title}</h2>
        <iframe src={data.RES.pdfPath} className="classic-pdf" title="CV"></iframe>
      </section>

      {/* 6. CONTACT */}
      <section className="classic-card" style={{ textAlign: 'center' }}>
        <h2 style={{ color: data.CON.color }}>{data.CON.title}</h2>
        <p>{data.CON.description}</p>
        <div className="classic-links-row">
          {data.CON.links.map((l, i) => (
            <a key={i} href={l.url} target="_blank" rel="noreferrer" style={{color: data.CON.color}}>{l.label}</a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClassicView;