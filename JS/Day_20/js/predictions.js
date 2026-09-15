document.addEventListener('DOMContentLoaded',()=>{
 const form=document.querySelector('#prediction-form'),wall=document.querySelector('#wall');
 const u=Store.user(); if(!u||!form||!wall)return;
 const categoryEl=document.querySelector('#category'), horizonEl=document.querySelector('#horizon'), textEl=document.querySelector('#predictionText'), reasonEl=document.querySelector('#reasonText'), impactEl=document.querySelector('#impact'), confidenceEl=document.querySelector('#confidence');
 const out=document.querySelector('#confOut'), msg=document.querySelector('#predictionMsg');
 const updateCount=(el,target)=>{if(!el||!target)return;target.textContent=el.value.length;el.addEventListener('input',()=>target.textContent=el.value.length);};
 updateCount(textEl,document.querySelector('#predictionChars')); updateCount(reasonEl,document.querySelector('#reasonChars'));
 confidenceEl?.addEventListener('input',()=>{if(out)out.value=confidenceEl.value;});
 function render(){
  const a=Store.predictions();
  const total=document.querySelector('#predictionTotal');if(total)total.textContent=a.length;
  const counts={};a.forEach(p=>counts[p.category]=(counts[p.category]||0)+1);
  const stats=document.querySelector('#predictionStats');if(stats){const top=Object.entries(counts).sort((x,y)=>y[1]-x[1]).slice(0,4);stats.innerHTML=top.length?top.map(([k,v])=>`<span><b>${v}</b> ${escapeHTML(k)}</span>`).join(''):'<span>No categories yet</span>';}
  wall.innerHTML=a.length?a.map(p=>`<article class="review prediction-item"><div class="review-meta"><strong>${escapeHTML(p.name)}</strong><span class="badge">${escapeHTML(p.category||'General')}</span><span class="badge">${escapeHTML(p.horizon||'By 2030')}</span></div><h3>${escapeHTML(p.text)}</h3><p class="muted"><b>Reason:</b> ${escapeHTML(p.reason||'No reasoning provided.')}</p><div class="prediction-meta"><span>Impact: <b>${escapeHTML(p.impact||'Medium')}</b></span><span>Confidence: <b>${Number(p.confidence)||0}%</b></span><span>${new Date(p.date).toLocaleDateString()}</span></div></article>`).join(''):'<p class="muted">No predictions yet. Be the first to publish one.</p>';
 }
 form.addEventListener('submit',e=>{e.preventDefault();const text=textEl?.value.trim()||'',reason=reasonEl?.value.trim()||'';if(!text||!reason){if(msg){msg.textContent='Please add both your prediction and reasoning.';msg.className='auth-msg error';}return;}const a=Store.predictions();a.unshift({id:'pred_'+Date.now(),name:u.name,category:categoryEl?.value||'AI',horizon:horizonEl?.value||'By 2030',text,reason,impact:impactEl?.value||'Medium',confidence:Number(confidenceEl?.value||50),date:new Date().toISOString()});Store.set('g2030_predictions',a);form.reset();if(out)out.value=50;document.querySelector('#predictionChars').textContent='0';document.querySelector('#reasonChars').textContent='0';if(msg){msg.textContent='Prediction published successfully.';msg.className='auth-msg success';setTimeout(()=>msg.textContent='',2500);}render();});
 render();
});
