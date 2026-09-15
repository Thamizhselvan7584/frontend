document.addEventListener('DOMContentLoaded',()=>{
  requireLogin();
  const u=Store.user(); if(!u)return;
  const $=id=>document.getElementById(id);
  $('nameVal').value=u.name||''; $('emailVal').value=u.email||''; $('cityVal').value=u.city||''; $('ageVal').value=u.age||''; $('dobVal').value=u.dob||''; $('educationVal').value=u.education||'';
  $('profile-form').addEventListener('submit',e=>{
    e.preventDefault();
    const users=Store.get('g2030_users',[]),i=users.findIndex(x=>x.id===u.id);
    u.name=$('nameVal').value.trim(); u.city=$('cityVal').value.trim(); u.age=$('ageVal').value?Number($('ageVal').value):''; u.dob=$('dobVal').value; u.education=$('educationVal').value;
    if(i>=0)users[i]=u; Store.set('g2030_users',users); Store.set('g2030_user',u);
    $('msg').textContent='Profile saved successfully.';
  });
});
