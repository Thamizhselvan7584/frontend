
/* Global 2030 protected-page guard
   Public pages: index, login, register, forgot-password.
   Everything else in the site requires an active login session.
   This runs before the rest of the app initializes, so direct URL access
   to protected pages is redirected to the correct login page. */
(function protectPages(){
 const path=location.pathname.replace(/\\/g,'/');
 const file=path.split('/').pop() || 'index.html';
 const inPages=path.includes('/pages/');
 const publicFiles=new Set(['index.html','login.html','register.html','forgot-password.html']);
 const protectedPage=inPages || !publicFiles.has(file);
 let session=false;
 try{session=JSON.parse(localStorage.getItem('g2030_session')||'false')===true && !!JSON.parse(localStorage.getItem('g2030_user')||'null');}catch{session=false;}
 if(protectedPage && !session){
   const loginPath=inPages?'../login.html':'./login.html';
   location.replace(loginPath+'?redirect='+encodeURIComponent(location.pathname+location.search));
   return;
 }
})();

const Store={
 get(k,f=null){try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}},
 set(k,v){localStorage.setItem(k,JSON.stringify(v))},
 user(){return this.get('g2030_user',null)},
 session(){return this.get('g2030_session',false)},
 reviews(){return this.get('g2030_reviews',[])},
 suggestions(){return this.get('g2030_suggestions',[])},
 predictions(){return this.get('g2030_predictions',[])},
 settings(){return this.get('g2030_settings',{theme:'dark',font:'medium',language:'English'})},
 saveReview(v){let a=this.reviews();a.unshift(v);this.set('g2030_reviews',a)},
 saveSuggestion(v){let a=this.suggestions();a.unshift(v);this.set('g2030_suggestions',a)}
};
function base(){return location.pathname.includes('/pages/')?'../':'./'}
function initSettings(){
 const s=Store.settings();
 const root=document.documentElement;
 root.classList.toggle('light',s.theme==='light');
 root.classList.remove('no-motion');
 document.body.classList.remove('no-motion');
 root.dataset.motion='on';
 root.dataset.font=s.font||'medium';
 const sizes={small:'14px',medium:'16px',large:'19px'};
 root.style.setProperty('--base-font-size',sizes[s.font]||sizes.medium);
 root.style.setProperty('--base-font-size', sizes[s.font]||sizes.medium); root.style.fontSize=sizes[s.font]||sizes.medium;
 document.querySelectorAll('[data-theme]').forEach(b=>b.classList.toggle('selected',b.dataset.theme===s.theme));
 document.querySelectorAll('[data-font]').forEach(b=>b.classList.toggle('selected',b.dataset.font===s.font));
}
function nav(){
 const b=base(), u=Store.session()?Store.user():null;
 const el=document.querySelector('#site-nav'); if(!el)return;
 const current=location.pathname.split('/').pop() || 'index.html';
 const link=(href,label,key)=>`<a class="nav-link ${current===key?'active':''}" href="${href}">${label}</a>`;
 el.innerHTML=`<header class="nav">
   <div class="container nav-inner">
     <a class="brand" href="${b}index.html" aria-label="Global 2030 Home" title="GLOBAL 2030 — AI & Circuit Technology"><img class="brand-icon" src="${b}assets/images/ai.svg" alt="AI and Circuit Technology icon" title="AI & Circuit Technology"><span>GLOBAL <b>2030</b></span></a>
     <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="main-menu"><span></span><span></span><span></span></button>
     <div class="nav-menu" id="main-menu">
       <nav class="nav-links" aria-label="Main navigation">
         ${link(`${b}dashboard.html`,'Dashboard','dashboard.html')}
         ${link(`${b}pages/it-2030.html`,'Technology','it-2030.html')}
         ${link(`${b}pages/no-it.html`,'What If?','no-it.html')}
         ${link(`${b}pages/future-world.html`,'Solutions','future-world.html')}
         ${link(`${b}pages/predictions.html`,'Predictions','predictions.html')}
       </nav>
       <div class="nav-divider"></div>
       <div class="nav-actions">
         ${u?`<a class="nav-profile" href="${b}profile.html" title="Open profile"><span class="avatar">${escapeHTML((u.name||'U').trim().charAt(0).toUpperCase())}</span><span class="profile-name">${escapeHTML(u.name||'Profile')}</span></a><a class="nav-link nav-secondary" href="${b}settings.html">Settings</a><a class="nav-link nav-logout" href="#" onclick="logout();return false">Logout</a>`:`<a class="nav-link nav-secondary" href="${b}login.html">Login</a><a class="nav-cta" href="${b}register.html">Get Started</a>`}
       </div>
     </div>
   </div>
 </header>`;
 const toggle=el.querySelector('.nav-toggle'), menu=el.querySelector('.nav-menu');
 toggle?.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');document.body.classList.toggle('nav-open',open)});
 menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');document.body.classList.remove('nav-open')}));
}

function renderFooter(){
 const b=base();
 let footer=document.querySelector('.footer');
 if(!footer){ footer=document.createElement('footer'); footer.className='footer'; document.body.appendChild(footer); }
 footer.innerHTML=`<div class="container footer-inner">
   <div class="footer-brand">
     <a class="footer-logo" href="${b}index.html" title="GLOBAL 2030 — AI & Circuit Technology"><img class="brand-icon" src="${b}assets/images/ai.svg" alt="AI and Circuit Technology icon" title="AI & Circuit Technology"><span>GLOBAL <b>2030</b></span></a>
     <p>A student-built educational platform exploring technology, resilience and responsible innovation for the world of 2030.</p>
     <span class="footer-version">LATEST UPDATE • V23</span>
   </div>
   <div class="footer-col"><h4>Explore</h4><a href="${b}dashboard.html">Dashboard</a><a href="${b}pages/it-2030.html">Technology by 2030</a><a href="${b}pages/no-it.html">What If Technology Stops?</a><a href="${b}pages/future-world.html">Better Future Solutions</a><a href="${b}pages/predictions.html">Prediction Lab</a></div>
   <div class="footer-col"><h4>Platform</h4><a href="${b}pages/predictions.html">Community Predictions</a><a href="${b}pages/no-it.html#simulator">Interactive Simulator</a><a href="${b}profile.html">My Profile</a><a href="${b}settings.html">Settings</a><a href="${b}forgot-password.html">Reset Password</a></div>
   <div class="footer-col footer-note"><h4>Project</h4><span>HTML5 • CSS3 • Vanilla JavaScript</span><span>LocalStorage educational demo</span><span>Designed for college competition</span><span>Learn • Experience • Solve • Predict</span></div>
 </div>
 <div class="container footer-bottom"><span>© 2026 GLOBAL 2030. Educational Competition Project.</span><span>Future starts with responsible choices.</span></div>`;
}

function logout(){
  // Clear the active profile/session so logged-out users never see the previous name in the navbar.
  Store.set('g2030_session',false);
  localStorage.removeItem('g2030_user');
  location.href=base()+'login.html';
}
function requireLogin(){if(!Store.session())location.href=base()+'login.html'}
function escapeHTML(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
document.addEventListener('DOMContentLoaded',()=>{initSettings();nav();renderFooter();setupBackToTop();document.querySelectorAll('.reveal').forEach(x=>observeReveal(x));});
function observeReveal(el){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});io.observe(el)}
function setupBackToTop(){
 let btn=document.querySelector('.back-to-top');
 if(!btn){
  btn=document.createElement('button');
  btn.type='button';
  btn.className='back-to-top';
  btn.setAttribute('aria-label','Back to top');
  btn.title='Back to top';
  btn.innerHTML='↑';
  document.body.appendChild(btn);
 }
 const sync=()=>btn.classList.toggle('show',window.scrollY>420);
 window.addEventListener('scroll',sync,{passive:true});
 btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
 sync();
}

document.addEventListener('pointermove',e=>{document.body.style.setProperty('--mx',e.clientX+'px');document.body.style.setProperty('--my',e.clientY+'px')});
