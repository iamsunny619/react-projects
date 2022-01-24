import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [iscancelled, setIsCancelled] = useState(false);
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setPending(true);

    try {
      await projectAuth.signOut();

      //dispatch logout action
      dispatch({ type: "LOGOUT" });
      if (!iscancelled) {
        setPending(false);
        setError(null);
      }
    } catch (err) {
      if (!iscancelled) {
        setError(err.message);
        setPending(false);
        // console.log(err.message);
      }
    }
  };

  useEffect(() => {
    return setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
};
