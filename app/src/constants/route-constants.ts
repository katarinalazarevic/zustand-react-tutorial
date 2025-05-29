export const ROUTES = {
    LOGIN_ROUTE: "/",
    USER_LANDING_PAGE:"/landing-page",
    RESET_PASSWORD_EMAIL:"/email-password-reset",
    COMPANY_INFORMATION: "/company/:id",
}

export const toastMessages: { [key: string]: { [method: string]: string } } = {
    
    'login': {
        post: 'loginSuccess',
        error: 'loginError',
    },
    'Company': {
        put: 'companyEditSuccess',
        post: 'companyAddSuccess',
    },
    'logout': {
        post: 'logoutSuccess',
    },
    '/Users': {
        post: 'userAddSuccess',
        put: 'userEditSuccess'
    },
    'ServerErrors' : {
        wrong:'offlineServer',
        offline: 'serverError'
    }
};