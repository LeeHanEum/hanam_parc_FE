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