import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { doSocialLogin } from "@/app/actions";

const SocialLogin = () => {
  return (
    <div>
      <form className="space-y-3" action={doSocialLogin}>
        <button
          type="submit"
          name="action"
          value="google"
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-3 rounded-lg shadow hover:bg-gray-100 transition cursor-pointer"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-gray-800 font-medium">Login with Google</span>
        </button>

        <button
          type="submit"
          name="action"
          value="github"
          className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-3 rounded-lg shadow hover:bg-gray-950 transition cursor-pointer"
        >
          <FaGithub className="text-2xl" />
          <span className="font-medium">Login with GitHub</span>
        </button>
      </form>
    </div>
  );
};

export default SocialLogin;
