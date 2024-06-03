document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-bar').addEventListener('input', function() {
        let query = this.value.toLowerCase();
        let blocks = document.querySelectorAll('.inline-block');

        blocks.forEach(block => {
            let text = block.textContent.toLowerCase();
            if (text.includes(query)) {
                block.style.display = '';
            } else {
                block.style.display = 'none';
            }
        });
    });
});
