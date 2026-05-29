import React from 'react';
import { PORTFOLIO_DATA } from '../../data/projects';

const Modal = ({ projectId, onClose }) => {
  const section = PORTFOLIO_DATA[projectId];
  if (!section) return null;

  const dynamicHeaderStyle = {
    background: `linear-gradient(to bottom, #ffffff 0%, ${section.color} 100%)`,
    color: "#000", 
    fontWeight: "bold",
    padding: "10px",
    position: "sticky",
    top: 0,
    zIndex: 10
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxHeight: '85vh', overflowY: 'auto' }}>
        
        <div className="arcade-header" style={dynamicHeaderStyle}>
          {section.title}
        </div>
        
        <div className="project-body" style={{ marginTop: '20px' }}>
          
          {/* CAS PDF */}
          {section.pdfPath && (
            <div className="pdf-container" style={{ marginBottom: '20px' }}>
              <object data={`${section.pdfPath}#toolbar=0`} type="application/pdf" style={{ width: '100%', height: '500px', border: `2px solid ${section.color}`, backgroundColor: '#fff' }}>
                <div style={{ color: '#fff', fontSize: '10px' }}>PDF Viewer not supported. <a href={section.pdfPath} target="_blank" rel="noreferrer" style={{color: section.color}}>[ OPEN ]</a></div>
              </object>
            </div>
          )}

          {/* LOGIQUE DE MA FOTO DANS BIO */}
          {section.image && !section.pdfPath && (
            <div className="image-frame">
              <img src={section.image} alt={section.title} className="project-photo" />
            </div>
          )}

          {/* BADGES (SKILLS) */}
          {section.badges && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
              {section.badges.map((badgeUrl, index) => (
                <img key={index} src={badgeUrl} alt="badge" style={{ height: '25px' }} />
              ))}
            </div>
          )}

          {/* - LOGIQUE DES CONTENUS - */}
          
          {/* CAS 1 : LES EXPÉRIENCES / AVENTURES */}
          {section.experiences && (
            <div style={{ textAlign: 'left' }}>
              {section.experiences.map((exp, index) => (
                <div key={index} style={{ marginBottom: '40px', borderBottom: `1px solid ${section.color}33`, paddingBottom: '20px' }}>
                  <h4 style={{ color: section.color, fontSize: '12px', marginBottom: '10px' }}>{">"} {exp.name}</h4>
                  {exp.images && (
                    <div style={{ display: 'grid', gridTemplateColumns: exp.images.length > 1 ? '1fr 1fr' : '1fr', gap: '10px', margin: '15px 0' }}>
                      {exp.images.map((img, idx) => (
                        <div key={idx} className="image-frame" style={{ margin: 0 }}>
                          <img src={img} alt="exp" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                  )}
                  <p style={{ color: '#fff', fontSize: '9px', lineHeight: '1.6' }}>{exp.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* CAS 2 : LES PROJETS  */}
          {section.projects && (
            <div style={{ textAlign: 'left' }}>
              {section.projects.map((p, index) => (
                <div key={index} style={{ marginBottom: '40px', borderBottom: `1px solid ${section.color}33`, paddingBottom: '20px' }}>
                  <h4 style={{ color: section.color, fontSize: '14px', marginBottom: '10px' }}>{">"} {p.name}</h4>
                  
                  {/* AFFICHAGE DES IMAGES DU PROJET */}
                  {p.images && (
                    <div style={{ display: 'grid', gridTemplateColumns: p.images.length > 1 ? '1fr 1fr' : '1fr', gap: '10px', margin: '15px 0' }}>
                      {p.images.map((img, idx) => (
                        <div key={idx} className="image-frame" style={{ margin: 0 }}>
                          <img src={img} alt="project" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                  )}

                  <p style={{ color: '#fff', fontSize: '9px', lineHeight: '1.6', marginBottom: '15px', textAlign: 'justify' }}>{p.desc}</p>

                  {/* LIENS SPÉCIFIQUES AU PROJET */}
                  {p.links && (
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {p.links.map((link, lIdx) => (
                        <a key={lIdx} href={link.url} target="_blank" rel="noreferrer" style={{ color: section.color, fontSize: '9px', textDecoration: 'none', border: `1px solid ${section.color}`, padding: '4px 8px' }}>
                          [ {link.label} ]
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* CAS 3 : BIO / CONTACT */}
          {section.description && !section.projects && !section.experiences && (
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
              {section.description.map((item, index) => (
                <li key={index} style={{ marginBottom: '10px', fontSize: '10px', lineHeight: '1.4' }}>{">"} {item}</li>
              ))}
            </ul>
          )}

          {/* FOOTER : LIENS GLOBAUX */}
          <div className="modal-footer" style={{ marginTop: '20px' }}>
            {section.links && !section.projects && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {section.links.map((l, index) => (
                  <a key={index} href={l.url} target="_blank" rel="noreferrer" className="github-link" style={{ color: section.color, textDecoration: 'none', fontSize: '12px' }}>
                    [ {l.label} ]
                  </a>
                ))}
              </div>
            )}
            {section.link && <a href={section.link} target="_blank" rel="noreferrer" className="github-link" style={{ color: section.color, textDecoration: 'none', fontSize: '12px' }}>[ OPEN LINK ]</a>}
            <br />
            <button className="close-btn" onClick={onClose}>[ PRESS START TO CLOSE ]</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;