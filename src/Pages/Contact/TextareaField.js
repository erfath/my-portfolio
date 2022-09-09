const TextareaField = (props) => {
    const { handleChange, label, name, value } = props;
    return (
      <div>
         <label className="text-white text-sm" htmlFor={name}>{label}</label>
        <textarea onChange={handleChange} name={name} rows="4" className="w-full border-b-2 outline-none text-black bg-gray-100 p-2 rounded-lg bg-gray-300" value={value}></textarea>
      </div>
    )
  }
  
  export default TextareaField