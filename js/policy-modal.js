function openPolicyModal(event, policyType) {
  event.preventDefault();

  const content = {
    privacy: '<h2>Privacy Policy</h2><p>Privacy Policy content.</p>',
    terms: '<h2>Terms & Conditions</h2><p>Terms content.</p>',
    cookie: '<h2>Cookie Policy</h2><p>Cookie Policy content.</p>',
    foodSafety: '<h2>Food Safety</h2><p>Food Safety content.</p>',
    cookGuidelines: '<h2>Cook Guidelines</h2><p>Cook Guidelines content.</p>',
    refund: '<h2>Refund Policy</h2><p>Refund Policy content.</p>'
  };

  document.getElementById('policyModalContent').innerHTML =
    content[policyType] || '<h2>Policy not found</h2>';

  document.getElementById('policyModal').classList.add('show');
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
