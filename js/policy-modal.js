const policyFiles = {
  privacy: 'policy/privacy.html',
  terms: 'policy/terms.html',
  cookie: 'policy/cookie-policy.html',
  foodSafety: 'policy/food-safety.html',
  cookGuidelines: 'policy/cook-guidelines.html',
  refund: 'policy/refund-policy.html'
};

async function openPolicyModal(event, policyType) {
  event.preventDefault();

  const modal = document.getElementById('policyModal');
  const contentBox = document.getElementById('policyModalContent');
  const filePath = policyFiles[policyType];

  modal.classList.add('show');
  contentBox.innerHTML = '<p>Loading policy...</p>';

  if (!filePath) {
    contentBox.innerHTML = '<h2>Policy not found</h2>';
    return;
  }

  try {
    const response = await fetch(filePath);
    const html = await response.text();

    const doc = new DOMParser().parseFromString(html, 'text/html');
    const mainContent =
      doc.querySelector('.policy-container') ||
      doc.querySelector('.policy-content') ||
      doc.querySelector('main') ||
      doc.querySelector('article') ||
      doc.querySelector('body');

    if (mainContent) {
      mainContent.querySelectorAll('header, footer, nav, script, style').forEach(el => el.remove());
      contentBox.innerHTML = mainContent.innerHTML;
    } else {
      contentBox.innerHTML = html;
    }
  } catch (error) {
    contentBox.innerHTML = '<h2>Unable to load policy</h2><p>Please try again later.</p>';
  }
}

function closePolicyModal() {
  document.getElementById('policyModal').classList.remove('show');
}

window.addEventListener('click', function(e) {
  const modal = document.getElementById('policyModal');

  if (e.target === modal) {
    closePolicyModal();
  }
});
