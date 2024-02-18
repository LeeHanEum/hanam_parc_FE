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