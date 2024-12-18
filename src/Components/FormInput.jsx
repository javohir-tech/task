//react icons
import { FaSearch, FaUser, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function FormInput({ type, placeholder, name }) {
  return (
    <label className="input input-sm input-bordered flex w-full items-center gap-2 md:input-md">
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
      />
      
      {placeholder === "Search" && <FaSearch className="h-4 w-4 opacity-70" />}
      {placeholder === "Full Name" && <FaUser className="h-4 w-4 opacity-70" />}
      {placeholder === "Email" && <MdEmail className="h-5 w-5 opacity-70" />}
      {placeholder === "Password" && <FaKey className="h-4 w-4 opacity-70" />}
      {placeholder === "Password Restart" && <FaKey className="h-4 w-4 opacity-70" />}
    </label>
  );
}

export default FormInput;
