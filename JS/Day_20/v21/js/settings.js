document.addEventListener('DOMContentLoaded',()=>{
  requireLogin();
  let draft={...Store.settings()};
  const applyDraft=()=>{
    const root=document.documentElement;
    root.classList.toggle('light',draft.theme==='light');
    root.dataset.font=draft.font||'medium';
    root.style.setProperty('--base-font-size',{small:'14px',medium:'16px',large:'19px'}[draft.font]||'16px');
        document.querySelectorAll('[data-theme]').forEach(b=>b.classList.toggle('selected',b.dataset.theme===draft.theme));
    document.querySelectorAll('[data-font]').forEach(b=>b.classList.toggle('selected',b.dataset.font===draft.font));
      };
  document.querySelectorAll('[data-theme]').forEach(b=>b.addEventListener('click',()=>{draft.theme=b.dataset.theme;applyDraft()}));
  document.querySelectorAll('[data-font]').forEach(b=>b.addEventListener('click',()=>{draft.font=b.dataset.font;applyDraft()}));
  document.querySelector('#save-settings')?.addEventListener('click',()=>{
    Store.set('g2030_settings',{...draft}); applyDraft();
    const status=document.querySelector('#settings-status'); if(status) status.textContent='Saved';
    const msg=document.querySelector('#settings-msg'); if(msg){msg.textContent='Settings saved successfully.';msg.className='settings-msg success';setTimeout(()=>msg.textContent='',1800)}
  });
  document.querySelector('#reset-settings')?.addEventListener('click',()=>{
    draft={theme:'dark',font:'medium',language:'English'};applyDraft();
    Store.set('g2030_settings',draft);
    const msg=document.querySelector('#settings-msg'); if(msg){msg.textContent='Settings reset to defaults.';msg.className='settings-msg';setTimeout(()=>msg.textContent='',1800)}
  });
  document.querySelector('#reset-all-data')?.addEventListener('click',()=>{
    if(confirm('Reset all Global 2030 local data? This will sign you out.')){
      ['g2030_user','g2030_session','g2030_users','g2030_reviews','g2030_suggestions','g2030_predictions','g2030_settings'].forEach(k=>localStorage.removeItem(k));
      location.href='index.html';
    }
  });
  applyDraft();
});
