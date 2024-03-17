export const fetchProgramsByStatusBySize = async (status, page, size) => {
    try {
        const response = await fetch(`/program/status/page?status=${status}&page=${page}&size=${size}`);
        if (!response.ok) {
            alert('프로그램 리스트를 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data.content);
    } catch (error) {
        console.error('Error fetching program list:', error);
    }
}

export const fetchApplicationCountByProgramId = (id) => {
    try {
        const response = fetch(`/application/program/count?programId=${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json().then(data => data);
    } catch (error) {
        console.error('Error fetching application count:', error);
    }
}

export const fetchApplicationsBySize = async (page, size) => {
    try {
        const response = await fetch(`/application/page?page=${page}&size=${size}`);
        if (!response.ok) {
            alert('신청 리스트를 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data.content);
    } catch (error) {
        console.error('Error fetching application list:', error);
    }
}

export const fetchMyApplicationsBySize = async (page, size) => {
    try {
        const response = await fetch(`/application/my?page=${page}&size=${size}`);
        if (!response.ok) {
            alert('신청 리스트를 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data.content);
    } catch (error) {
        console.error('Error fetching application list:', error);
    }
}