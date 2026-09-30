
import { useState } from 'react';
import './style.css';
import { CATEGORIES } from '../data/data';

const PURCHASES = [
    {
        item: "Pencils",
        date: "8/14/26",
        store: "Target",
        price: 2.99,
        category: "School/Work"
    },
    {
        item: "Notebook",
        date: "8/14/26",
        store: "Target",
        price: 7.99,
        category: "School/Work"
    },
    {
        item: "24 eggs",
        date: "8/27/26",
        store: "Costco",
        price: 7.99,
        category: "Food"
    },
    {
        item: "Ikea couch",
        date: "9/3/26",
        store: "Ikea",
        price: "3,400.25",
        category: "Others"
    },
    {
        item: "Insidious",
        date: "9/24/26",
        store: "AMC",
        price: 13.99,
        category: "Entertainment"
    },
    {
        item: "High-rise Jean",
        date: "9/25/26",
        store: "Hollister",
        price: 32.99,
        category: "Clothing"
    },
    {
        item: "Apple Pen",
        date: "10/3/26",
        store: "Best Buy",
        price: 99.99,
        category: "Electronics"
    },
    {
        item: "Disney Tickets(4)",
        date: "10/7/26",
        store: "Disney Official Web",
        price: 480.66,
        category: "Entertainment"
    },
    {
        item: "T-shirt",
        date: "10/12/26",
        store: "Uniqlo",
        price: 24.59,
        category: "Clothing"
    },
    {
        item: "Cheese Burger",
        date: "10/17/26",
        store: "In-N-Out",
        price: 6.48,
        category: "Food"
    },
    {
        item: "Boba",
        date: "10/18/26",
        store: "Heytea",
        price: 6.54,
        category: "Food"
    },
    {
        item: "Banana Costume",
        date: "10/19/26",
        store: "Amazon",
        price: 34.78,
        category: "Clothing"
    },
]

export default function HistoryPage() {

    const [dis, setDis] = useState(false);
    const [purchases, setPurchases] = useState(PURCHASES);
    const [item, setItem] = useState("");
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState("");
    const [store, setStore] = useState("");
    const [addCategory, setAddCategory] = useState("");
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");

    function addPurchase() {
        let purchase = {
            item,
            date,
            store,
            price,
            category: addCategory
        }

        setPurchases([...purchases, purchase]);

        setItem("");
        setPrice(0);
        setStore("");
        setDate("");
        setDis(false);
        setAddCategory("");
    }

    return (
        <div className="flex-grow roboto-serif-uniquifier background primarytext">
            <input value={search} onChange={ev => setSearch(ev.target.value)} className="m-5 border bg-gray-200" type="text" placeholder='🔎 Search Purchases...' />
            <button className="m-5 buttons" onClick={() => setDis(true)}>Add Purchases</button>
            <button className="m-5 buttons">Take picture</button>
            {/* <textarea className="m-5 bg-white color" placeholder="🔎Search Purchases..." name="" id=""></textarea> */}
            <div className="m-5 flex justify-between">
                <button onClick={() => setCategory("All")} className="selections" style={{ backgroundColor: "All" === category ? "#43d7a3" : "transparent" }}>All</button>
                {CATEGORIES.map((c) =>
                    <button onClick={() => setCategory(c)} className="selections" style={{ backgroundColor: c === category ? "#43d7a3" : "transparent" }}>{c}</button>
                )}
            </div>
            <div className="cards tb">
                <div className="m-5 p-5 flex justify-around text-center line">
                    <div className="font-bold flex-grow">Items</div>
                    <div className="font-bold flex-grow">Date</div>
                    <div className="font-bold flex-grow">Store</div>
                    <div className="font-bold flex-grow">Price</div>
                </div>
                {purchases.filter((purchase) => (category === "All" || purchase.category === category) && purchase.item.toLowerCase().includes(search.toLowerCase())).map((p, i) =>
                    <div key={i} className="m-10 flex justify-around text-center">
                        <div className="flex-grow">{p.item}</div>
                        <div className="flex-grow">{p.date}</div>
                        <div className="flex-grow">{p.store}</div>
                        <div className="flex-grow">{p.price}</div>
                    </div>
                )}
            </div>

            {dis && (
                <div className="overlay" onClick={() => setDis(false)} >
                    <div className="popUp" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-end">
                            <button className="pop" onClick={() => setDis(false)}>×</button>
                        </div>
                        <div className="" style={{ display: dis ? "block" : "none" }}><strong>Add Purchases</strong>
                            <p>Item: <input className="cards" type="text" value={item} onChange={ev => setItem(ev.target.value)} /></p>
                            <p>Store: <input className="cards" type="text" value={store} onChange={ev => setStore(ev.target.value)} /></p>
                            <p>Date of Purchase: <input className="cards" type="text" value={date} onChange={ev => setDate(ev.target.value)} /></p>
                            <p>Price: <input className="cards" type="number" value={price} onChange={ev => setPrice(ev.target.value)} /></p>
                            <p>Category: <select className="cards" value={addCategory} onChange={ev => setAddCategory(ev.target.value)}>
                                <option value="">-----</option>
                                {CATEGORIES.map((c) =>
                                    <option value={c}>{c}</option>
                                )}
                            </select></p>
                        </div>
                        <br />
                        <div className="flex justify-end">
                            <button className="buttons" onClick={addPurchase}>Submit</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}