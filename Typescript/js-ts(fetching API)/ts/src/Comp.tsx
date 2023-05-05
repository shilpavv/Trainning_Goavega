
interface Props {
  id:number,
}

function Comp(props:Props) {
  // console.log(props);

  return (
    <option value={props.id}> User {props.id} 
    </option>
  )
}

export default Comp
