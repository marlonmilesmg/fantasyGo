import React, { useEffect, useState } from 'react';

const Index = () => {

    const [ playerData, setPlayerData] = useState({});
    const [loading, setLoading] = useState(true); 

        const fetchData = async () => {
            const response = await fetch ("https://fantasy.premierleague.com/api/bootstrap-static/");
            var data = await response.json();
            setPlayerData(data);
            console.log(data);
            setLoading(false);
            console.log(playerData.elements.length)
        };

        useEffect(() => {
            fetchData();
        }, []);

        if(!loading) 

        return <div className="container mt-4"> 

        <table className='table table-striped'>
            <tr>
            <th scope="col">Index</th>
            <th scope="col">First Name</th>
            <th scope="col">Second Name</th>
            <th scope="col">Web Name</th>
            <th scope="col">Total Points</th>
            <th scope="col">Team</th>
            </tr>
        
            {playerData.elements.map((element, index) => (
                        <tr data-index={index}>
                        <td>{element.team}</td>
                        <td>{element.first_name}</td>
                        <td>{element.second_name}</td>
                        <td>{element.web_name}</td>
                        <td>{element.total_points}</td>
                        <td>{element.team}</td>
                    </tr>
         ))} 

        </table>
        </div>

    }


export default Index;