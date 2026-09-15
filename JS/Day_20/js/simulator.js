document.addEventListener('DOMContentLoaded',()=>{
 const $=id=>document.getElementById(id);
 const stages=[
  {t:'NOW • 100% ONLINE',d:'All simulated services are operating normally.',sev:'LOW RISK',m:[100,100,100,100],impact:[100,100,100,100,100,100,100]},
  {t:'1 HOUR • EARLY DISRUPTION',d:'Communication starts becoming unreliable. Essential services remain mostly available through fallback capacity.',sev:'WARNING',m:[72,88,82,65],impact:[90,92,88,86,84,87,90]},
  {t:'6 HOURS • CASCADING EFFECTS',d:'Digital payments and online services become increasingly unreliable; transport and business coordination slow.',sev:'ELEVATED',m:[52,68,58,42],impact:[68,72,75,66,58,55,63]},
  {t:'1 DAY • SYSTEM PRESSURE',d:'Organizations rely more heavily on manual processes, backups and alternative communication.',sev:'HIGH',m:[35,48,36,28],impact:[45,52,55,42,38,35,46]},
  {t:'3 DAYS • GLOBAL CASCADE',d:'Interdependent services amplify the disruption. Supply chains, businesses and consumers feel secondary effects.',sev:'CRITICAL',m:[24,31,20,18],impact:[30,38,36,27,25,21,31]},
  {t:'1 WEEK • RESILIENCE TEST',d:'The priority shifts from preventing failure to sustaining essential functions and restoring critical services.',sev:'CRITICAL',m:[18,24,14,12],impact:[22,28,30,18,16,14,23]},
  {t:'1 MONTH • ADAPTATION',d:'Long-term recovery depends on infrastructure repair, data integrity, alternate workflows and organizational adaptation.',sev:'RECOVERY NEEDED',m:[28,38,26,24],impact:[36,44,42,30,28,26,38]},
  {t:'RECOVERY • SERVICES RESTORED',d:'Backups, validated data, restored networks, manual procedures and tested recovery plans bring essential services back.',sev:'RECOVERED',m:[100,100,100,100],impact:[100,100,100,100,100,100,100]}
 ];
 const impactNames=['Communication','Banking','Healthcare','Education','Transportation','Business','Government'];
 let idx=0,timer=null;
 function stop(){if(timer){clearInterval(timer);timer=null;} const btn=$('autoSim');if(btn)btn.textContent='▶ PLAY TIMELINE';}
 function render(n){
  idx=Math.max(0,Math.min(n,stages.length-1)); const s=stages[idx];
  const textMap={simTime:s.t,simDesc:s.d,severityBadge:s.sev};
  Object.entries(textMap).forEach(([id,text])=>{const el=$(id);if(el)el.textContent=text;});
  const live=$('livePill');if(live)live.textContent=idx===0?'● SYSTEM ONLINE':idx===7?'● RECOVERY COMPLETE':'● SYSTEM DEGRADED';
  ['network','services','payments','communication'].forEach((x,i)=>{const val=$(x+'Val'),bar=$(x+'Bar');if(val)val.textContent=s.m[i]+'%';if(bar)bar.style.width=s.m[i]+'%';});
  document.querySelectorAll('.stage-btn').forEach(b=>b.classList.toggle('active',Number(b.dataset.stage)===idx));
  document.body.classList.toggle('sim-critical',idx>=4&&idx<7);
  const list=$('impactList');if(list)list.innerHTML=impactNames.map((name,i)=>`<div class="impact-line"><span>${name}</span><div class="impact-track"><div class="impact-fill" style="width:${s.impact[i]}%"></div></div><b>${s.impact[i]}%</b></div>`).join('');
  const cascade=$('cascadeText');if(cascade)cascade.textContent=idx===0?'At NOW, dependencies are stable.':idx===7?'Recovery has restored the simulated dependency chain.':`At ${s.t.split(' • ')[0]}, dependencies are under ${s.sev.toLowerCase()} pressure.`;
  const stopBtn=$('stopTech');if(stopBtn)stopBtn.textContent=idx===0?'⏻ STOP TECHNOLOGY':idx===7?'↺ RESTART SIMULATION':'→ NEXT STAGE';
 }
 document.querySelectorAll('.stage-btn').forEach(b=>{b.type='button';b.addEventListener('click',()=>{stop();render(Number(b.dataset.stage));});});
 $('stopTech')?.setAttribute('type','button');$('stopTech')?.addEventListener('click',()=>{if(idx===7){stop();render(0);}else render(Math.min(idx+1,7));});
 $('autoSim')?.setAttribute('type','button');$('autoSim')?.addEventListener('click',()=>{if(timer){stop();return;}if(idx>=7)render(0);const btn=$('autoSim');if(btn)btn.textContent='❚❚ PAUSE TIMELINE';timer=setInterval(()=>{if(idx>=7){stop();return;}render(idx+1);},2200);});
 $('resetSim')?.setAttribute('type','button');$('resetSim')?.addEventListener('click',()=>{stop();render(0);});
 document.querySelectorAll('.choice').forEach(c=>{c.type='button';c.addEventListener('click',()=>{document.querySelectorAll('.choice').forEach(x=>x.classList.remove('selected'));c.classList.add('selected');const choice=c.dataset.choice;const reasons={Healthcare:'Protecting healthcare preserves life-critical diagnosis, treatment and coordination.',Banking:'Restoring banking helps payments, payroll and economic transactions resume.',Communication:'Restoring communication reconnects people, emergency services and organizations.',Energy:'Restoring energy can unlock other infrastructure that depends on reliable power.',Water:'Protecting water supports an essential public-health function and basic needs.'};const box=$('choiceResult');if(box){box.style.display='block';box.innerHTML=`<h3>Priority selected: ${escapeHTML(choice)}</h3><p>${reasons[choice]||'This is an essential service that can influence other dependencies.'}</p><p class="muted">In real continuity planning, priorities should be based on mission impact, dependencies, allowable outage time and recovery objectives.</p>`;}});});
 $('checkQuiz')?.addEventListener('click',()=>{const chosen=[...document.querySelectorAll('.quiz-options input:checked')].map(x=>x.value);const correct=['records','lab','pharmacy','schedule','communication'];const ok=chosen.length===correct.length&&correct.every(x=>chosen.includes(x));const box=$('quizResult');if(box){box.style.display='block';box.innerHTML=ok?'✅ Correct. All five can be affected through hospital digital dependencies.':'⚠️ Not quite. The affected chain includes patient records, laboratory information, pharmacy, scheduling and communication.';}});
 render(0);
});
