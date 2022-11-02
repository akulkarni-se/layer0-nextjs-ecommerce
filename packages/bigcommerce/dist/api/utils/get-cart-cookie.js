import { serialize } from 'cookie';
export default function getCartCookie(name, cartId, maxAge) {
    const options = cartId && maxAge ? {
        maxAge,
        expires: new Date(Date.now() + maxAge * 1000),
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax'
    } : {
        maxAge: -1,
        path: '/'
    } // Removes the cookie
    ;
    return serialize(name, cartId || '', options);
};
