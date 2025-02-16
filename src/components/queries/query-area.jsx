import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, orderBy } from "firebase/firestore";
import firebaseApp from "../../firebase";

const QueryArea = () => {
    const [data, setData] = useState([]); // State to hold the data array

    const readCollection = async () => {
        const db = getFirestore(firebaseApp);

        // Query the collection and sort by createdAt in descending order
        const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        // Map through the snapshot to extract data and document IDs
        const dataList = querySnapshot.docs.map((doc) => ({
            id: doc.id, // Add document ID
            ...doc.data(), // Spread document fields
        }));
        setData(dataList); // Set the extracted data in state
    };

    useEffect(() => {
        readCollection();
    }, []);

    return (
        <section className="edu-section-gap faq-page-area">
            <div className="container">
                <div className="row">
                    {data.length > 0 ? data.map((user) => (
                        <div className="col-lg-4">
                            <p key={user.id}>
                                <strong>Name:</strong> {user.name} <br />
                                <strong>Email:</strong> {user.email} <br />
                                <strong>Phone:</strong> {user.phone} <br />
                                <strong>Message:</strong> {user.message} <br />
                                <hr />
                            </p>
                        </div>
                    )) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default QueryArea;
