document.getElementById('prompt-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  const res = await fetch('/.netlify/functions/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  const results = document.getElementById('results');
  results.innerHTML = '';
  if (json.prompts) {
    json.prompts.forEach((p) => {
      const div = document.createElement('div');
      const pre = document.createElement('pre');
      pre.textContent = p;
      const btn = document.createElement('button');
      btn.textContent = 'Copy';
      btn.onclick = () => navigator.clipboard.writeText(p);
      div.appendChild(pre);
      div.appendChild(btn);
      results.appendChild(div);
    });
  } else {
    results.textContent = json.error || 'Error generating prompts.';
  }
});
