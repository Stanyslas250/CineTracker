import { FcGoogle } from "react-icons/fc";
/*
TODO: Make the login with Google logic
 */
export const LoginWithGoogle = ({ text }: { text: string }) => {
  return (
    <button className="btn btn-outline btn-neutral font-bold">
      <FcGoogle size={20} />
      {text ? text : "Login"} with Google
    </button>
  );
};
