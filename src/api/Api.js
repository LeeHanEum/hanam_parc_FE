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
