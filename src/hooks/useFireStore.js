import { useReducer, useEffect, useState } from "react";
import { projectFireStore, timestamp } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    case "DELETED_DOCUMENT":
      return {
        isPending: false,
        document: null,
        success: true,
        error: null,
      };
    default:
      return state;
  }
};

export const useFireStore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  const ref = projectFireStore.collection(collection);

  //only dispact if not cannelled
  const dispatchIfNOtcancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  //add doc
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt: createdAt });
      dispatchIfNOtcancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNOtcancelled({ type: "ERROR", payload: err.message });
    }
  };

  //delete doc
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const deletedDocument = await ref.doc(id).delete();
      dispatchIfNOtcancelled({
        type: "DELETED_DOCUMENT",
        payload: deletedDocument,
      });
    } catch (err) {
      dispatchIfNOtcancelled({ type: "ERROR", payload: "could not delete" });
    }
  };

  useEffect(() => {
    //cleanup function
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, deleteDocument, response };
};
