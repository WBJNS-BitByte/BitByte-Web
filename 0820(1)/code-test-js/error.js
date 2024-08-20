document.getElementById('view-edit').addEventListener('click', function() {
    const inputs = document.querySelectorAll('#portfolio-view-modal input, #portfolio-view-modal textarea');
    const imgUploadButton = document.getElementById('view-img-upload');

    if (isViewing) {
        inputs.forEach(input => input.readOnly = false);
        imgUploadButton.style.display = 'block';
        this.innerText = '저장';
    } else {
        // 포트폴리오 아이템 업데이트 함수가 올바르게 작동하는지 확인
        const title = document.getElementById('view-modal-title').value;
        const imgSrc = document.getElementById('view-modal-thumbnail').src;
        const subtitle = document.getElementById('view-modal-subtitle').value;
        const objective = document.getElementById('view-modal-objective').value;
        const content = document.getElementById('view-modal-content').value;

        updatePortfolioItem(title, imgSrc, subtitle, objective, content); // 수정된 내용 저장
        resetViewModal(); // 모달 초기화
    }

    isViewing = !isViewing; // 상태 전환
});
