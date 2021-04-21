export interface AdminListFilter {
    email: string,
    roles: [
      string
    ],
    password: string,
    firstname: string,
    lastname: string,
    username: string,
    salt: string
}