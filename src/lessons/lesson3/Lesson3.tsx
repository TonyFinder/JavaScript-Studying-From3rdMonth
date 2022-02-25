import React, { useState } from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState<any>('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState('');

    const searchFilm = async () => {
        try {
            const { data } = await API.searchFilmsByTitle(searchName)
            const { Response, Search, Error} = data
            console.log(data)
            Response === "True" ? setSearchResult(Search.map((m: any) => <div key={Math.floor(Math.random()*1000)}>{m.Title}</div>)) : setSearchResult(Error)
        } catch (e) {
            console.log("Lesson 3. searchFilm Error", e)
        }
    };

    const searchByType = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
            const {data} = await API.searchFilmsByType(searchNameByType, type)
            const { Search, Response, Error } = data
            console.log(data)
            Response === "True" ? setSearchResultByType(Search.map((m: any) => <div key={Math.floor(Math.random()*1000)}>{m.Title}</div>)) : setSearchResultByType(Error)
        } catch (e) {
            console.log("Lesson 3. searchByType ERROR", e)
        }
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {searchResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {searchResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;