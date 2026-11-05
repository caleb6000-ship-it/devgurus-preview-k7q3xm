const b=document.querySelector('.burger'),l=document.querySelector('.links');
b.addEventListener('click',()=>{const o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});
l.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>l.classList.remove('open')));
const f=document.getElementById('quote');
if(f){const p=new URLSearchParams(location.search);
 if(p.get('package'))f.package.value=p.get('package');if(p.get('industry'))f.industry.value=p.get('industry');
 f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
  f.querySelectorAll('[required]').forEach(el=>{const s=el.parentElement.querySelector('.err');let m='';
   if(!el.value.trim())m='Required';else if(el.type==='email'&&!/^\S+@\S+\.\S+$/.test(el.value))m='Enter a valid email';else if(el.type==='tel'&&el.value.replace(/\D/g,'').length<10)m='Enter a valid phone number';
   s.textContent=m;el.classList.toggle('bad',!!m);if(m)ok=false});
  if(!ok)return;document.getElementById('tname').textContent=f.name.value;document.getElementById('tpkg').textContent=f.package.options[f.package.selectedIndex].text;
  f.hidden=true;const t=document.getElementById('thanks');t.hidden=false;t.scrollIntoView()});}
