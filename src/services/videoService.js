import * as httpRequest from '~/utils/httpRequest';

export const getVideo = async ({ type, page }) => {
    const token =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTczNTkxNTM4MSwiZXhwIjoxNzM4NTA3MzgxLCJuYmYiOjE3MzU5MTUzODEsImp0aSI6IjFVZ1AwZ2N3RFhyekhZdnkiLCJzdWIiOjcxMTYsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ujV_wGn2HMIzuIVwVaiue-0dizu0-FqvdM6ixUlvmjY';

    try {
        const res = await httpRequest.get('videos', {
            headers: {
                Authorization: `Bearer ${token}`, // Header Authorization
            },
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
