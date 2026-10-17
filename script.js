(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }));
  }
  document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => {
    const select = document.querySelector('#occasion');
    if (!select) return;
    const interest = link.dataset.interest;
    const option = [...select.options].find(item => item.text.toLowerCase().includes(interest.toLowerCase().split(' ')[0]));
    if (option) select.value = option.value || option.text;
  }));
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const form = document.querySelector('#enquiry-form');
  const status = document.querySelector('#form-status');
  if (form && status) form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const message = [
      'Hello Safora Hampers, I would like to enquire about a gifting request.',
      '',
      'Name: ' + values.get('name'),
      'Email: ' + values.get('email'),
      'Occasion: ' + values.get('occasion'),
      'Approximate quantity: ' + (values.get('quantity') || 'Not decided yet'),
      'Details: ' + (values.get('message') || 'Not provided')
    ].join('\n');
    try {
      await navigator.clipboard.writeText(message);
      status.textContent = 'Your enquiry has been copied. Instagram will open in a new tab; paste the message into your conversation with Safora.';
    } catch {
      status.textContent = 'Your enquiry is ready. Please copy the details below and send them to Safora through Instagram.';
      let preview = document.querySelector('#enquiry-preview');
      if (!preview) {
        preview = document.createElement('textarea');
        preview.id = 'enquiry-preview';
        preview.readOnly = true;
        preview.rows = 7;
        preview.setAttribute('aria-label', 'Your enquiry message to copy');
        preview.style.cssText = 'width:100%;padding:12px;background:#3d1a4c;color:white;border:1px solid #775c83;margin-top:8px';
        status.insertAdjacentElement('afterend', preview);
      }
      preview.value = message;
    }
    window.open('https://www.instagram.com/safora.hampers/', '_blank', 'noopener,noreferrer');
  });
})();