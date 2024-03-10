export const deleteBoard = async (id) => {
    try {
        const response = await fetch(`/board/delete?id=${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        alert('게시글이 삭제되었습니다.');

    } catch (error) {
        console.error('Error deleting the board:', error);
    }
}

export const fetchProgramNameList = async () => {
    try {
        const response = await fetch('/program/list');
        if (!response.ok) {
            alert('프로그램 이름 리스트를 불러오지 못했습니다.');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching program name list:', error);
    }
}

export const fetchApplicationByProgramId = async (programId) => {
    try {
        const response = await fetch(`/application/program?programId=${programId}`);
        if (!response.ok) {
            alert('프로그램 신청서를 불러오지 못했습니다.');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching application by program id:', error);
    }
}

export const uploadProgramThumbnail = async (programId, thumbnail) => {
    try {
        console.log(thumbnail);

        const formData = new FormData();
        formData.append('image', thumbnail[0]);

        const response = await fetch(`/files/program/${programId}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            alert('이미지 업로드에 실패했습니다.');
        }
    } catch (error) {
        console.error('Error uploading images:', error);
    }
}

export const handleSubmitPopup = async (name, isShow, url) => {
    try {
        const PopupRequestDto = {
            name: name,
            isShow: isShow.value, // boolean 값으로 변환 처리 하자
        }

        const response = await fetch(`/popup/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(PopupRequestDto),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const popupId = responseData.data;

        await uploadPopupUrl(popupId, url);

        alert('팝업이 등록되었습니다.');

    } catch (error) {
        console.error('Error adding popup:', error);
    }
}

export const uploadPopupUrl = async (id, url) => {
    try {
        const formData = new FormData();
        formData.append('image', url);

        const response = await fetch(`/files/popup/${id}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            alert('이미지 업로드에 실패했습니다.');
        }
    } catch (error) {
        console.error('Error uploading images:', error);
    }
}

export const deletePopup = async (id) => {
    try {
        const response = await fetch(`/popup/delete?id=${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        alert('팝업이 삭제되었습니다.');

    } catch (error) {
        console.error('Error deleting the popup:', error);
    }
}

export const fetchGallerys = async (page, size) => {
    try {
        const response = await fetch(`/gallery/page?page=${page}&size=${size}`);
        if (!response.ok) {
            alert('자료실 리스트를 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data.content);
    } catch (error) {
        console.error('Error fetching gallery list:', error);
    }
}

export const fetchGalleryById = async (id) => {
    try {
        const response = await fetch(`/gallery?id=${id}`);
        if (!response.ok) {
            alert('앨범을 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data);
    } catch (error) {
        console.error('Error fetching gallery by id:', error);
    }
}

export const handleSubmitGallery = async (title, images) => {
    try {
        const GalleryRequestDto = {
            title: title,
        }

        const response = await fetch(`/gallery/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(GalleryRequestDto),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const galleryId = responseData.data;

        await uploadGalleryImages(galleryId, images);

        alert('앨범이 등록되었습니다.');

    } catch (error) {
        console.error('Error adding gallery:', error);
    }
}

export const uploadGalleryImages = async (id, images) => {
    try {
        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append('image', images[i]);

            const response = await fetch(`/files/gallery/${id}`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                alert('이미지 업로드에 실패했습니다.');
            }
        }
    } catch (error) {
        console.error('Error uploading images:', error);
    }
}

export const deleteGallery = async (id) => {
    try {
        const response = await fetch(`/gallery/delete?id=${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        alert('앨범이 삭제되었습니다.');

    } catch (error) {
        console.error('Error deleting the gallery:', error);
    }
}

export const fetchGalleryImages = async (id) => {
    try {
        const response = await fetch(`/gallery/image?id=${id}`);

        if (!response.ok) {
            alert('앨범 이미지를 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data.galleryImageList);

    } catch (error) {
        console.error('Error fetching gallery images:', error);
    }
}


