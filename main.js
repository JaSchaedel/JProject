// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const inquiryCheckbox = document.getElementById('inquiry-checkbox');
    const inquirySelect = document.getElementById('inquiry-select');
    const artPiecesSelect = document.getElementById('art-pieces');
    const selectedPiecesDiv = document.getElementById('selected-pieces');
  
    const commissionCheckbox = document.getElementById('commission-checkbox');
    const commissionComments = document.getElementById('commission-comments');
  
    inquiryCheckbox.addEventListener('change', function() {
      inquirySelect.classList.toggle('hidden', !this.checked);
    });
  
    commissionCheckbox.addEventListener('change', function() {
      commissionComments.classList.toggle('hidden', !this.checked);
    });
  
    artPiecesSelect.addEventListener('change', function() {
      Array.from(this.selectedOptions).forEach(option => {
        const imgSrc = option.getAttribute('data-image');
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = option.textContent;
        img.setAttribute('data-value', option.value);
        img.addEventListener('click', function() {
          img.remove();
          option.selected = false;
        });
        selectedPiecesDiv.appendChild(img);
      });
    });
  });
  