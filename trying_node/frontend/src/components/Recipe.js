import React, {useEffect, useState} from 'react';

function Recipe() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/recipes');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {
            items.map(item => (
                <div class="container-fluid p-3 w-50">
                    <div class="card-deck">
                        <div class="card">
                            <div class="card-body p-1">
                                <h6 class="card-title">{item.title}</h6>
                                <p class="card-text">{item.category}</p>
                                <p class="card-text"><i>by Chef</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </section>
    );
}

export default Recipe;