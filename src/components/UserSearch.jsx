import axios from "axios";
import React, {useEffect, useState} from "react";
// import { Users } from "../users";
import Table from "./Table";


const UserSearch = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    // const keys = ["first_name", "last_name", "email"];

    // const search = (data)  => {
    //     return data.filter(user => (
    //         keys.some(key => user[key].toLowerCase().includes(query))
    //     ))
    // };

    useEffect(() => {
        if (query.length > 2) {
            const handle = setTimeout(() => {
                const fetchData = async () => {
                    const res = await axios(`https://jsonplaceholder.typicode.com/comments?q=${query}`);
                    setData(res.data);
                }
        
                fetchData();
            }, 500);

            return () => {
                clearTimeout(handle)
            };
        }
    }, [query]);
    
    return (
        <div className="form">
            <input 
                className="search"
                type="text"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
            />
                    
            {/* <ul className="list">
                {
                   Users.filter(user => user.first_name.toLowerCase().includes(query)).map(user => (
                        <li key={user.id}>{user.first_name}</li>
                   ))
                }
            </ul> */}

            <Table data={data} />
        </div>
    );
};

export default UserSearch;