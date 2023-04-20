import { useAuth } from './Auth'
function RequireAuth({children}) {
    const auth=useAuth();
    if(auth.email!=="admin@gmail.com" || auth.password!=="admin123"){
        window.location.href='/login';
        
    }
  return (
    children
  )
}

export default RequireAuth