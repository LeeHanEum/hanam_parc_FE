export const fetchBoardsBySize = async (page, size) => {
    try {
        const response = await fetch(`/board/page?page=${page}&size=${size}`);
        if (!response.ok) {
            alert('게시판 리스트를 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data.content);
    } catch (error) {
        console.error('Error fetching board list:', error);
    }
}

export const fetchQnasBySize = async (page, size) => {
    try {
        const response = await fetch(`/qna/page?page=${page}&size=${size}`);
        if (!response.ok) {
            alert('Q&A 리스트를 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data.content);
    } catch (error) {
        console.error('Error fetching qna list:', error);
    }
}

export const fechMyQnasBySize = async (page, size) => {
    try {
        const response = await fetch(`/qna/my?page=${page}&size=${size}`);
        if (!response.ok) {
            alert('Q&A 리스트를 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data.content);
    } catch (error) {
        console.error('Error fetching qna list:', error);
    }
}

export const fetchBoardImage = async (id) => {
    try {
        const response = await fetch(`/board/image?id=${id}`);
        if (response.ok) {
            return await response.json().then(data => data.data.boardImageList);
        } else {
            console.error("Error fetching program:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching program:", error);
    }
}

export const fetchBoardFile = async (id) => {
    try {
        const response = await fetch(`/board/file?id=${id}`);
        if (response.ok) {
            return await response.json().then(data => data.data);
        } else {
            console.error("Error fetching program:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching program:", error);
    }
}

export const fetchBoard = async (id) => {
    try {
        const response = await fetch(`/board?id=${id}`);
        if (response.ok) {
            return await response.json().then(data => data.data);
        } else {
            console.error("Error fetching program:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching program:", error);
    }
}

export const uploadBoardImages = async (id, formData) => {
    try {
        const response = await fetch(`/files/${id}`,  {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
                alert('이미지 업로드에 실패했습니다.');
        }
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

export const uploadBoardFile = async (id, formData) => {
    try {
        const response = await fetch(`/files/${id}/file`,  {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
                alert('파일 업로드에 실패했습니다.');
        }
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

export const deleteBoardImage = async (id, url) => {
    try {
        const response = await fetch(`/files/{id}?url=${url}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            alert('이미지 삭제에 실패했습니다.');
        }
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

export const deleteBoardFile = async (id, url) => {
    try {
        const response = await fetch(`/files/{id}/file?url=${url}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            alert('파일 삭제에 실패했습니다.');
        }
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

export const updateBoard = async (id, title, content, category) => {
    try {
        const BoardRequestDto = {
            title: title,
            content: content,
            boardCategory: category.value,
        }

        const response = await fetch(`/board/update?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(BoardRequestDto),
        });

        if (!response.ok) {
            alert('게시글 수정에 실패했습니다.');
        }

    } catch (error) {
        console.error('Error submitting the form:', error);
        // Handle errors or display an error message to the user
    }
}