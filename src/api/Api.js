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

export const fetchBoardImage = async (boardId, file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`/files/${boardId}`, {
            method: 'POST',
            body: formData,
            headers: {
                // 필요한 경우 다른 헤더도 추가할 수 있습니다.
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};