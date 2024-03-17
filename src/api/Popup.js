export const fetchPopupsBySize = async (page, size) => {
    try {
        const response = await fetch(`/popup/isShow?page=${page}&size=${size}&isShow=true`);
        if (!response.ok) {
            alert('팝업 리스트를 불러오지 못했습니다.');
        }

        return await response.json().then(data => data.data.content);
    } catch (error) {
        console.error('Error fetching popup list:', error);
    }
}