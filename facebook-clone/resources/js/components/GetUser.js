import { useParams } from 'react-router-dom';
function GetUser() {
    let {UserId} = useParams();
    return (
        <div>
            <h1>{UserId}</h1>
        </div>
    )
}

export default GetUser;
