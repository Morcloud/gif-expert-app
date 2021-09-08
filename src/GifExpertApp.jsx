import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {

    const [categories, setCategories] = useState([
      "Dragon Ball",
    ]);

    // const handleAdd = () => {
    //     setCategories([...categories, 'yugiho'])
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map(item => (
                    <GifGrid 
                        key={item} 
                        category={item} 
                    />
                ))}
            </ol>
            {/* <button onClick={handleAdd}>Agregar</button> */}
        </>
    )
}

export default GifExpertApp
