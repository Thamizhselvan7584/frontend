
document.addEventListener('DOMContentLoaded',()=>{
 const form=document.querySelector('#prediction-form'),wall=document.querySelector('#wall');const u=Store.user();if(!u||!form||!wall)return;
 const categoryEl=document.querySelector('#category');
 const predictionTextEl=document.querySelector('#predictionText');
 const confidenceEl=document.querySelector('#confidence');
 function render(){const a=Store.predictions();wall.innerHTML=a.length?a.map(p=>`<div class="review"><div class="review-meta"><strong>${escapeHTML(p.name)}</strong><span class="badge">${escapeHTML(p.category)}</span></div><div>${escapeHTML(p.text)}</div><small class="muted">Confidence: ${p.confidence}% • ${new Date(p.date).toLocaleDateString()}</small></div>`).join(''):'<p class="muted">No predictions yet.</p>'}
 form.onsubmit=e=>{e.preventDefault();let a=Store.predictions();a.unshift({name:u.name,category:categoryEl?.value||'AI',text:predictionTextEl?.value.trim()||'',confidence:Number(confidenceEl?.value||50),date:new Date().toISOString()});Store.set('g2030_predictions',a);if(predictionTextEl)predictionTextEl.value='';render()};render();
});
