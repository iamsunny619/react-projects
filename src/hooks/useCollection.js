import { useEffect, useRef, useState } from "react";
import { projectFireStore } from "../firebase/config";

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocument] = useState(null);
  const [error, setError] = useState(null);

  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = projectFireStore.collection(collection);

    //only will added when query is provided
    if (query) {
      ref = ref.where(...query);
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        //update states
        setDocument(result);
        setError(null);
      },
      (error) => {
        //console.log(error);
        setError("Could not fetch the data");
      }
    );

    //unsubscribe
    return () => unsubscribe();
  }, [collection, query, orderBy]);

  return { documents, error };
};
