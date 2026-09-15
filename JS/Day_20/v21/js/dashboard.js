
document.addEventListener('DOMContentLoaded',()=>{
 if(!Store.session())return;const u=Store.user();document.querySelector('#welcome').textContent=`Welcome, ${u?.name?.split(' ')[0]||'Explorer'} 👋`;
 document.querySelector('#reviewCount').textContent=Store.reviews().length;document.querySelector('#suggestionCount').textContent=Store.suggestions().length;document.querySelector('#predictionCount').textContent=Store.predictions().length;
});
