export const isAuthenticated = () => {
    const token =  localStorage.getItem('token');
    const role =  localStorage.getItem('role');
    if(token && role ==="vol"){
        return token
    }

    return false
}