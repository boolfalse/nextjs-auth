
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        if (req.nextUrl.pathname.startsWith("/users/create") &&
            req.nextauth.token.role !== "admin") {
            return NextResponse.rewrite(new URL("/denied", req.url));
        }
    }, {
        callbacks: {
            authorized: ({ token }) => {
                return !!token;
            },
        },
    }
);

export const config = {
    // matcher allows filter Middleware to run on specific paths
    matcher: [
        '/users/:path*',
    ],
};
