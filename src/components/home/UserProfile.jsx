import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Avatar, Dropdown } from "flowbite-react";

export default function UserProfile({ signOutHandler }) {
  const { currentUser } = useContext(AuthContext);

  const reload = () => window.location.reload();
  return (
    <div className="bg-opacity-40 bg-white ml-2 rounded-md hover:bg-slate-50">
      <Dropdown inline label={<Avatar img={currentUser.photoURL} rounded />}>
        <Dropdown.Header>
          <span className="block text-gray-600 text-sm font-semibold">
            {currentUser.displayName}
          </span>
          <span className="block text-gray-400 truncate text-sm font-medium">
            {currentUser.email}
          </span>
        </Dropdown.Header>
        <Link
          className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          onClick={() => {
            signOutHandler();
            reload();
          }}
          to="/"
        >
          SignOut
        </Link>
      </Dropdown>
    </div>
  );
}
