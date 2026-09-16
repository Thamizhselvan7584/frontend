
function togglePass(id, btn) { const x = document.getElementById(id); if (!x || !btn) return; const showing = x.type === 'password'; x.type = showing ? 'text' : 'password'; btn.textContent = showing ? 'Hide' : 'Show'; btn.setAttribute('aria-label', (showing ? 'Hide ' : 'Show ') + (id === 'confirmPassword' ? 'confirm password' : 'new password')); btn.setAttribute('aria-pressed', String(showing)); x.focus() }
function passwordScore(p) { let n = 0; if (p.length >= 8) n++; if (/[A-Z]/.test(p)) n++; if (/[0-9]/.test(p)) n++; if (/[^A-Za-z0-9]/.test(p)) n++; return n }
function setupAuth() {
  const form = document.querySelector('#auth-form'); if (!form) return;
  const strength = document.querySelector('#strength'); const p = document.querySelector('#password');
  if (p && strength) p.addEventListener('input', () => { let n = passwordScore(p.value); strength.textContent = ['', 'Weak', 'Fair', 'Good', 'Strong'][n]; });
  form.addEventListener('submit', e => {
    e.preventDefault(); const mode = form.dataset.mode; const msg = document.querySelector('#msg');
    if (mode === 'register') {
      const name = document.getElementById('nameVal').value.trim(), email = document.getElementById('emailVal').value.trim().toLowerCase(), pass = document.getElementById('password').value, confirm = document.getElementById('confirmPassword').value, city = document.getElementById('cityVal').value.trim(), age = document.getElementById('ageVal')?.value ? Number(document.getElementById('ageVal').value) : '', dob = document.getElementById('dobVal')?.value || '', education = document.getElementById('educationVal')?.value || '';
      if (!name || !email || !pass || !confirm || !city || !age || !dob || !education || pass !== confirm) { msg.textContent = 'Please complete all required fields and make sure passwords match.'; return }
      if (age < 1 || age > 120) { msg.textContent = 'Please enter a valid age between 1 and 120.'; return }
      let users = Store.get('g2030_users', []); if (users.some(u => u.email === email)) { msg.textContent = 'An account with this email already exists.'; return }
      const user = { id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(), name, email, password: pass, city, age, dob, education, joined: new Date().toISOString() };
      users.push(user); Store.set('g2030_users', users); Store.set('g2030_user', user); Store.set('g2030_session', true); location.href = 'dashboard.html';
    } else if (mode === 'login') {
      const email = document.getElementById('emailVal').value.trim().toLowerCase(), pass = document.getElementById('password').value, users = Store.get('g2030_users', []), u = users.find(x => x.email === email && x.password === pass);
      if (!u) { msg.textContent = 'Incorrect email or password.'; return } Store.set('g2030_user', u); Store.set('g2030_session', true); location.href = 'dashboard.html';
    } else {
      const email = document.getElementById('emailVal').value.trim().toLowerCase(), pass = document.getElementById('password').value, confirm = document.getElementById('confirmPassword')?.value || '', users = Store.get('g2030_users', []), i = users.findIndex(x => x.email === email);
      if (i < 0) { msg.textContent = 'No account found for this email.'; return }
      if (pass.length < 8) { msg.textContent = 'New password must be at least 8 characters.'; return }
      if (pass !== confirm) { msg.textContent = 'New password and confirm password do not match.'; return }
      users[i].password = pass; Store.set('g2030_users', users); if (Store.user()?.email === email) Store.set('g2030_user', users[i]); msg.textContent = 'Password updated successfully. You can now log in.'; setTimeout(() => location.href = 'login.html', 900);
    }
  });
}
document.addEventListener('DOMContentLoaded', setupAuth);
