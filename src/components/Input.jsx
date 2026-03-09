export default function Input({ type, name, onChange, value }) {

    return (  
        <p> 
          <label>{name}</label>
          <input type={type} onChange={onChange} value={value} />
        </p>
    )
}
