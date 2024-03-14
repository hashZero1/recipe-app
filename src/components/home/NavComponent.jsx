import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo1 from '../../assets/logo.png';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signOutUser,
} from "../../Firebase/Firebase.config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";



export default function NavComponent() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (err) {
      alert("Error! (Login popup closed unexpectedly)");
      console.log(err)
    }
  };

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };


  return (
    <>
      <nav className="lg:w-11/12 mx-auto p-2">
        <div className="py-3 px-6">
          <div className="flex justify-between">
            <div className="flex items-center">
              <a className="flex" href="/">
                <img className=' h-12' src={logo1}/>
              </a>
            </div>
            <div className="ml-2 flex">
              <div className="flex text-gray-100 cursor-pointer bg-gray-600 items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Favorites</span>
              </div>
              <div>
              {currentUser ? (
            <UserProfile signOutHandler={signOutHandler} />
          ) : (
            <Link
              onClick={signInWithGoogle}
              className="px-5 py-4 bg-red-600 text-sm xl:text-base xl:px-10 xl:py-2 rounded-md font-semibold ml-2 flex cursor-pointer items-center gap-x-1 border-red-600  hover:bg-zinc-100 
              text-gray-200 hover:text-black transition-all"
              to="/"
            >
              SignIn
            </Link>
          )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
