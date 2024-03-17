export const fetchMembersBySize = async (page, size) => {
    try {
        const response = await fetch(`/member/page?page=${page}&size=${size}`);
        if (!response.ok) {
            alert('회원 리스트를 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data.content);
    } catch (error) {
        console.error('Error fetching member list:', error);
    }
}

export const fetchCurrentMember = async () => {
    try {
        const response = await fetch(`/member/current`);
        if (!response.ok) {
            alert('회원 정보를 불러오지 못했습니다.');
        }
        return await response.json().then(data => data.data);
    } catch (error) {
        console.error('Error fetching current member:', error);
    }
}