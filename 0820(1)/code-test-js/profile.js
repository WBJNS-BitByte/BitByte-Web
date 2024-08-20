// 프로필 이미지 변경 script
function changeProfileImage() {
    document.getElementById('image-input').click();
}

function loadImage(event) {
    const image = document.getElementById('profile-img');
    const userInfoImage = document.getElementById('user-info-profile-img');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;
            userInfoImage.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// 프로필 자기소개글 변경 script
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('profile-bio-btn').addEventListener('click', function() {
        const bioTextarea = document.querySelector('.profile-bio');
        console.log("클릭됨");
        if (bioTextarea.hasAttribute('readonly')) {
            bioTextarea.removeAttribute('readonly');
            bioTextarea.focus();
            this.src = '../img/check.svg';
        } else {
            bioTextarea.setAttribute('readonly', true);
            this.src = '../img/write.svg';
        }
    });
});

// 과정 진행률 변경 script
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('progress-btn').addEventListener('click', function() {
        const progressNowTextarea = document.getElementById('progress-now');
        const progressEndTextarea = document.getElementById('progress-end');
        const progressPercentageDisplay = document.getElementById('progress-percentage');
        const progressGraphNow = document.getElementById('progress-graph-now');
        const progressPercentageNowDisplay = document.getElementById('progress-percentage-now');

        if (progressNowTextarea.hasAttribute('readonly')) {
            progressNowTextarea.removeAttribute('readonly');
            progressEndTextarea.removeAttribute('readonly');
            progressNowTextarea.focus();
            this.src = '../img/check.svg';
        } else {
            const progressNow = Number(progressNowTextarea.value) || 0;
            const progressEnd = Number(progressEndTextarea.value) || 0;

            let progressPercentage = 0;
            if (progressEnd > 0) {
                progressPercentage = (progressNow / progressEnd) * 100;
            }
            progressPercentageDisplay.textContent = `${progressPercentage.toFixed(1)}%`;
            
            progressGraphNow.style.width = `${progressPercentage.toFixed(1)}%`;
            progressPercentageNowDisplay.textContent = `${progressPercentage.toFixed(1)}%`;

            progressNowTextarea.setAttribute('readonly', true);
            progressEndTextarea.setAttribute('readonly', true);
            this.src = '../img/write.svg';
        }
    });
});

// 최근 예약 내역 삭제 script
document.addEventListener('DOMContentLoaded', function() {
    const deleteIcons = document.querySelectorAll('#recent-list-delete');

    deleteIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            const recentListItem = event.target.closest('.recent-list-item');

            const confirmation = confirm('삭제하시겠습니까?');
            if (confirmation) {
                recentListItem.remove();
            }
        });
    });
});

// 선호 좌석 삭제 script
document.addEventListener('DOMContentLoaded', function() {
    const deleteIcons = document.querySelectorAll('#liked-list-like');

    deleteIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            const recentListItem = event.target.closest('.liked-list-item');

            const confirmation = confirm('삭제하시겠습니까?');
            if (confirmation) {
                recentListItem.remove();
            }
        });
    });
});
