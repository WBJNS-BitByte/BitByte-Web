document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');

    // 사이드바 기능 설정
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('closed');
        toggleBtn.textContent = sidebar.classList.contains('closed') ? '▶' : '◀';

        document.querySelector('.wrap').classList.toggle('sidebar-closed', sidebar.classList.contains('closed'));
    });

    // 사이드바 드롭다운 버튼 기능 설정
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    });
});