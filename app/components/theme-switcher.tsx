'use client';

import {useEffect,useState} from 'react';

const themes=[
  ['workwell','WorkWell Green','#0b6b61'],
  ['ocean','Ocean Blue','#075985'],
  ['navy','Clinical Navy','#1e3a8a'],
  ['purple','Royal Purple','#6b21a8'],
  ['berry','Berry','#9f1239'],
  ['rust','Warm Rust','#9a3412'],
  ['forest','Forest','#166534'],
  ['slate','Slate','#334155'],
  ['teal','Deep Teal','#0f766e'],
  ['indigo','Indigo','#4338ca']
] as const;

type ThemeName=typeof themes[number][0];

export function ThemeSwitcher(){
  const [open,setOpen]=useState(false);
  const [theme,setTheme]=useState<ThemeName>('workwell');

  useEffect(()=>{
    const saved=(localStorage.getItem('workwell-theme') as ThemeName|null);
    const valid=themes.some(([id])=>id===saved);
    const next=valid&&saved?saved:'workwell';
    document.documentElement.dataset.theme=next;
    setTheme(next);
  },[]);

  function applyTheme(next:ThemeName){
    document.documentElement.dataset.theme=next;
    localStorage.setItem('workwell-theme',next);
    setTheme(next);
  }

  return <div className={`theme-tool${open?' open':''}`}>
    <button className="theme-toggle" type="button" aria-expanded={open} aria-controls="theme-panel" onClick={()=>setOpen(v=>!v)}>
      <span aria-hidden="true">◉</span><span>Colours</span>
    </button>
    <div id="theme-panel" className="theme-panel" hidden={!open}>
      <div className="theme-panel-head"><strong>Demo colour schemes</strong><small>10 WCAG 2.2 AA-oriented palettes</small></div>
      <div className="theme-options">
        {themes.map(([id,label,colour])=><button key={id} type="button" className={`theme-option${theme===id?' active':''}`} aria-pressed={theme===id} onClick={()=>applyTheme(id)}>
          <span className="theme-swatch" style={{background:colour}} aria-hidden="true"/><span>{label}</span>{theme===id&&<b aria-hidden="true">✓</b>}
        </button>)}
      </div>
      <p className="theme-note">Demo visual tool. Final brand palette still requires full page-by-page accessibility verification.</p>
    </div>
  </div>;
}
