import { userType } from './PostApp';
type Props = {
    user: userType[];
}
export default function UserDetails(props: Props) {
    return (
        <div>
            {props.user.map(user)=>{
                    <div>
                
                    <h3>Id:{user.id}</h3>
                    <h3>Name:{user.name}</h3>
                    <h3>Username:{user.username}</h3>
    
                </div>
            }}
            
        </div>
    )
}

