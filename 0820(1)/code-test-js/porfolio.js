document.addEventListener('DOMContentLoaded', function() {
    // 전체 선택 script
    document.getElementById('portfolio-select-all').addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('input[name="portfolio-list-item-checkbox"]');
        const allSelected = Array.from(checkboxes).every(checkbox => checkbox.checked);
        
        checkboxes.forEach(checkbox => {
            checkbox.checked = !allSelected;
        });
        
        this.textContent = allSelected ? '전체 선택' : '전체 해제';
    });

    // 선택 삭제 script
    document.getElementById('portfolio-delete').addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('input[name="portfolio-list-item-checkbox"]:checked');
        
        if (checkboxes.length > 0) {
            const confirmDelete = confirm('삭제하시겠습니까?');
            if (confirmDelete) {
                checkboxes.forEach(checkbox => {
                    checkbox.closest('.portfolio-list-item').remove();
                });
            }
        } else {
            alert('삭제할 아이템이 없습니다.');
        }
    });

    // 포트폴리오 아이템 클릭 시 view 모달 열기 
    document.querySelectorAll('.portfolio-list-item').forEach(item => {
        item.addEventListener('click', function(event) {
            if (!event.target.matches('input[type="checkbox"]')) {
                const title = this.querySelector('#portfolio-list-title').innerText;
                const imgSrc = this.querySelector('img').src;
                openModal(title, imgSrc);
            }
        });
    });

    // 모달 열기 함수
    function openModal(title, imgSrc, subtitle, objective, content) {
        // view 모달의 요소를 선택
        const viewModalTitle = document.getElementById('view-modal-title');
        const viewModalThumbnail = document.getElementById('view-modal-thumbnail');
        const viewModalSubtitle = document.getElementById('view-modal-subtitle');
        const viewModalObjective = document.getElementById('view-modal-objective');
        const viewModalContent = document.getElementById('view-modal-content');
    
        // 요소에 데이터 설정
        viewModalTitle.value = title;
        viewModalThumbnail.src = imgSrc;
        viewModalSubtitle.innerText = subtitle;
        viewModalObjective.innerText = objective;
        viewModalContent.innerText = content;
    
        // view 모달 열기
        document.getElementById('portfolio-view-modal').style.display = 'flex';
    }

    // 포트폴리오 작성 모달 열기
    document.getElementById('portfolio-write').addEventListener('click', function(event) {
        event.stopPropagation();
        document.getElementById('portfolio-write-modal').style.display = 'flex';
        resetWriteModal();
    });

    // 모달 닫기 함수
    function closeModal() {
        document.getElementById('portfolio-view-modal').style.display = 'none';
        document.getElementById('portfolio-write-modal').style.display = 'none';
    }

    // view 모달 배경 클릭 시 모달 닫기
    document.getElementById('portfolio-view-modal').addEventListener('click', function(event) {
        if (event.target === this) {
            closeModal();
        }
    });

    let isEditing = false;
    let hasChanges = false;

    // write 모달 배경 클릭 시 모달 닫기
    document.getElementById('portfolio-write-modal').addEventListener('click', function(event) {
        if (event.target === this) {
            if (hasChanges) {
                if (confirm('작성 중인 내용은 저장되지 않습니다. 그래도 해당 창을 닫으시겠습니까?')) {
                    closeModal();
                    resetWriteModal();
                }
            } else {
                closeModal();
                resetWriteModal();
            }
        }
    });

    // 저장/수정 버튼 클릭 시 동작
    document.getElementById('write-save').addEventListener('click', toggleEditSave);
    
    // 저장/수정 기능 토글 함수
    function toggleEditSave() {
        const inputs = document.querySelectorAll('.write-modal-text-box input, .write-modal-text-box textarea');
        const imgUploadButton = document.getElementById('write-img-upload');
    
        if (!isEditing) {
            // 저장 상태
            inputs.forEach(input => {
                input.readOnly = true;
            });
    
            imgUploadButton.style.display = 'none';
            createPortfolioItem();
            document.getElementById('write-save').innerText = '수정';
        } else {
            // 수정 상태
            inputs.forEach(input => {
                input.readOnly = false;
            });
    
            imgUploadButton.style.display = 'block';
            document.getElementById('write-save').innerText = '저장';
        }
    
        isEditing = !isEditing;
        hasChanges = false;
    }
    
    document.getElementById('write-img-upload').addEventListener('click', function() {
        document.getElementById('image-input').click();
    });

    document.getElementById('image-input').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('write-modal-thumbnail').src = e.target.result;
                hasChanges = true;
            }
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('view-img-upload').addEventListener('click', function() {
        document.getElementById('image-input-view').click();
    });

    document.getElementById('image-input-view').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('view-modal-thumbnail').src = e.target.result;
                hasChanges = true;
            }
            reader.readAsDataURL(file);
        }
    });
    
    // 입력 필드 변경 감지
    document.querySelectorAll('.write-modal-text-box input, .write-modal-text-box textarea').forEach(input => {
        input.addEventListener('input', function() {
            hasChanges = true;
        });
    });
    
    function createPortfolioItem() {
        const titleElement = document.getElementById('write-modal-title');
        const thumbnailElement = document.getElementById('write-modal-thumbnail');
        const subtitleElement = document.getElementById('write-modal-subtitle');
        const objectiveElement = document.getElementById('write-modal-objective');
        const contentElement = document.getElementById('write-modal-content');

        if (!titleElement || !thumbnailElement || !subtitleElement || !objectiveElement || !contentElement) {
            console.error('Some elements are missing in the write modal');
            return;
        }

        const title = titleElement.value;
        const imgSrc = thumbnailElement.src;
        const subtitle = subtitleElement.value;
        const objective = objectiveElement.value;
        const content = contentElement.value;

        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-list-item');
        portfolioItem.innerHTML = `
            <input type="checkbox" name="portfolio-list-item-checkbox" id="portfolio-list-item-checkbox">
            <img id="portfolio-list-item-thumbnail" src="${imgSrc}" alt="test">
            <div id="portfolio-list-title">${title}</div>
        `;
        portfolioItem.dataset.subtitle = subtitle;
        portfolioItem.dataset.objective = objective;
        portfolioItem.dataset.content = content;

        const portfolioListBox = document.querySelector('.portfolio-list-box');
        if (portfolioListBox) {
            portfolioListBox.appendChild(portfolioItem);
        } else {
            console.error('Portfolio list box not found');
        }

        portfolioItem.addEventListener('click', function(event) {
            if (!event.target.matches('input[type="checkbox"]')) {
                openModal(title, imgSrc, subtitle, objective, content);
            }
        });

        closeModal();
    }

    function updatePortfolioItem(title, imgSrc, subtitle, objective, content) {
        const selectedItem = document.querySelector('.portfolio-list-item.selected');
        if (selectedItem) {
            selectedItem.querySelector('#portfolio-list-title').innerText = title;
            selectedItem.querySelector('#portfolio-list-item-thumbnail').src = imgSrc;
            selectedItem.dataset.subtitle = subtitle;
            selectedItem.dataset.objective = objective;
            selectedItem.dataset.content = content;
        }
    }
    
    function resetWriteModal() {
        const inputs = document.querySelectorAll('.write-modal-text-box input, .write-modal-text-box textarea');
        inputs.forEach(input => {
            input.value = '';
            input.readOnly = false;
        });
        document.getElementById('write-modal-thumbnail').src = '';
        isEditing = false;
        hasChanges = false;
        document.getElementById('write-save').innerText = '저장';
        document.getElementById('write-img-upload').style.display = 'block';
    }

    let isViewing = true; // 변수 정의

    const viewEditButton = document.getElementById('view-edit');
    
    if (viewEditButton) {
        viewEditButton.addEventListener('click', function() {
            const inputs = document.querySelectorAll('#portfolio-view-modal input, #portfolio-view-modal textarea');
            const imgUploadButton = document.getElementById('view-img-upload');
        
            if (isViewing) {
                inputs.forEach(input => input.readOnly = false);
                imgUploadButton.style.display = 'block';
                this.innerText = '저장';
            } else {
                const title = document.getElementById('view-modal-title').value;
                const imgSrc = document.getElementById('view-modal-thumbnail').src;
                const subtitle = document.getElementById('view-modal-subtitle').value;
                const objective = document.getElementById('view-modal-objective').value;
                const content = document.getElementById('view-modal-content').value;
        
                updatePortfolioItem(title, imgSrc, subtitle, objective, content);
                resetViewModal();
            }
        
            isViewing = !isViewing;
        });
    } else {
        console.error('Element with id "view-edit" not found.');
    }

    // resetViewModal 함수 정의
    function resetViewModal() {
        const inputs = document.querySelectorAll('#portfolio-view-modal input, #portfolio-view-modal textarea');
        inputs.forEach(input => {
            input.readOnly = true;
        });
        document.getElementById('view-img-upload').style.display = 'none';
        document.getElementById('view-edit').innerText = '수정';
        isViewing = true;
    }
});