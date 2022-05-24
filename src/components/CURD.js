import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const CURD = () => {
  const userCollectionDBRef = collection(db, "Users");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [note, setNote] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(userCollectionDBRef);
      console.log("data", data);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getData();
  }, []);

  const deleteUser = async (userId) => {
    const userDoc = doc(db, "Users", userId);
    await deleteDoc(userDoc);
  };

  const updateUser = async (id, notes) => {
    const userDoc = doc(db, "Users", id);
    await updateDoc(userDoc, notes);
  };
  const createUser = async () => {
    await addDoc(userCollectionDBRef, {
      name: name,
      age: Number(age),
      notes: note,
    });
  };

  return (
    <>
      <div>
        <span>
          name :
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </span>

        <span>
          age :
          <input
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </span>

        <div>
          <span>
            notes :
            <textarea
              type="text"
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
            />
          </span>
          <div></div>
          <button onClick={() => createUser()}>Add</button>
        </div>

        <div>
          {users.map((user) => {
            return (
              <div>
                {" "}
                <h1>Name: {user.name}</h1>
                <h1>Age: {user.age}</h1>
                <p>Notes: {user.notes}</p>
                <button
                  onClick={() => {
                    updateUser(user.id, user.age);
                  }}
                >
                  {" "}
                  Increase Age
                </button>
                <button
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  {" "}
                  Delete User
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CURD;
