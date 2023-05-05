import { useSnapshot } from 'valtio'
import { userStore } from '../../store'
const UserDetails=() =>{
    const {selecteduser}=useSnapshot(userStore)
  return (
    <div  className="list-group">
      <h1>User Details</h1>
          Name:{selecteduser?.name}
      <div>
           Email:{selecteduser?.email}    
      </div>
      
    </div>
  )
}
export default UserDetails
