import {NextResponse} from 'next/server';

export const GET = async (): Promise<NextResponse<string>> => {
    return new NextResponse('OK', {
        status: 200,
        headers: {'Content-Type': 'text/plain'},
    });
};
