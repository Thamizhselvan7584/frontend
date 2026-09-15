
function setupCommunity(topic){
 const sf=document.querySelector('#suggestion-form'),rf=document.querySelector('#review-form'),list=document.querySelector('#review-list'),slist=document.querySelector('#suggestion-list');
 const user=Store.user();
 const reviewText=document.querySelector('#reviewText');
 const suggestionText=document.querySelector('#suggestionText');
 const ratingInput=document.querySelector('#rating');
 if(!user){document.querySelectorAll('.login-needed').forEach(x=>x.classList.remove('hidden'));return}
 function render(){
   const reviews=Store.reviews().filter(x=>x.topic===topic);list.innerHTML=reviews.length?reviews.map(r=>`<div class="review"><div class="review-meta"><strong>${escapeHTML(r.name)}</strong><span class="rating">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span></div><div>${escapeHTML(r.text)}</div><small class="muted">${new Date(r.date).toLocaleString()}</small></div>`).join(''):'<p class="muted">No reviews yet. Be the first.</p>';
   const sug=Store.suggestions().filter(x=>x.topic===topic);slist.innerHTML=sug.length?sug.slice(0,8).map(x=>`<div class="review"><strong>${escapeHTML(x.name)}</strong><div>${escapeHTML(x.text)}</div><small class="muted">${new Date(x.date).toLocaleDateString()}</small></div>`).join(''):'<p class="muted">No suggestions yet.</p>';
 }
 document.querySelectorAll('.stars button').forEach(btn=>btn.onclick=()=>{document.querySelectorAll('.stars button').forEach(b=>b.classList.remove('active'));for(let i=1;i<=+btn.dataset.n;i++)document.querySelector(`.stars button[data-n="${i}"]`).classList.add('active');document.querySelector('#rating').value=btn.dataset.n});
 rf?.addEventListener('submit',e=>{e.preventDefault();const rating=+document.querySelector('#rating').value;if(!rating){alert('Please choose a rating.');return}Store.saveReview({name:user.name,topic,text:reviewText?.value.trim()||'',rating,date:new Date().toISOString()});if(reviewText)reviewText.value='';if(ratingInput)ratingInput.value='0';document.querySelectorAll('.stars button').forEach(b=>b.classList.remove('active'));render()});
 sf?.addEventListener('submit',e=>{e.preventDefault();const text=suggestionText?.value.trim()||'';if(!text)return;Store.saveSuggestion({name:user.name,topic,text,date:new Date().toISOString()});if(suggestionText)suggestionText.value='';render()});
 render();
}
