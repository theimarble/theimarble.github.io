function updatePreview(mediumSrc, fullResSrc) {
    document.getElementById('previewImage').src = mediumSrc;
    document.getElementById('downloadLink').href = fullResSrc;
    document.getElementById('previewImage').setAttribute('data-full-res', fullResSrc);
}

function downloadFullRes() {
    const fullResSrc = document.getElementById('previewImage').getAttribute('data-full-res');
    window.open(fullResSrc, '_blank');
}