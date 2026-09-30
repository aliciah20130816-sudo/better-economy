import { useParams } from "react-router";
import './style.css';
export default function InsightsPage() {
    const { v } = useParams();


    return (
        <div className="flex-grow roboto-serif-uniquifier background primarytext">
            <div className="m-5">
                <div className="font-bold text-2xl">Insights</div>
                <div className="top">
                    <div className="cards">Average Purchases
                        <div>$343.27</div>
                        <div className="italic secondarytext">per purchases</div>
                    </div>
                    <div className="cards">Largest Purchases
                        <div>$3,400.25</div>
                        <div className="italic secondarytext">Ikea couch</div>
                    </div>
                    <div className="cards">Most Spent Category
                        <div>Others</div>
                        <div className="italic secondarytext">$3,400.25</div>
                    </div>
                </div>
                <div className="middle">
                    <div className="cards">
                        <img className="w-175" src="https://i.ibb.co/h1Jk5zb1/Last-Month-and-This-Month-1.png" />
                    </div>
                    <div className="cards">
                        <img className="w-auto" src="https://i.ibb.co/Rk1BrPBf/Spending-by-Category-This-Month-1.png" />
                    </div>
                </div>
                <div className="bottom">
                    <div className="cards">
                        <div className="m-5">Top 5 Most Expensive Purchases</div>
                        <div>
                            <div className="m-5 list">
                                <div>Ikea Couch</div>
                                <div></div>
                                <div>$2,300.00</div>
                            </div>
                            <div className="m-5 list">
                                <div>Disney Tickets(4)</div>
                                <div></div>
                                <div>$480.66</div>
                            </div>
                            <div className="m-5 list">
                                <div>Apple Pen</div>
                                <div></div>
                                <div>$99.99</div>
                            </div>
                            <div className="m-5 list">
                                <div>Banana Costume</div>
                                <div></div>
                                <div>$34.78</div>
                            </div>
                            <div className="m-5 list">
                                <div>High-rise Jean</div>
                                <div></div>
                                <div>$32.99</div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="m-5">Category Trends</div>
                        <div>
                            <div className="m-5 list">
                                <div>Food</div>
                                <div></div>
                                <div className="text-red-600">↑ 5.6%</div>
                            </div>
                            <div className="m-5 list">
                                <div>Clothing</div>
                                <div></div>
                                <div className="text-red-600">↑ 5.6%</div>
                            </div>
                            <div className="m-5 list">
                                <div>Entertainment</div>
                                <div></div>
                                <div className="text-green-600">↓ 2.1%</div>
                            </div>
                            <div className="m-5 list">
                                <div>Electronics</div>
                                <div></div>
                                <div className="text-green-600">↓ 27.1%</div>
                            </div>
                            <div className="m-5 list">
                                <div>School/work</div>
                                <div></div>
                                <div className="text-red-600">↑ 20.8%</div>
                            </div>
                            <div className="m-5 list">
                                <div>Others:</div>
                                <div></div>
                                <div className="text-red-600">↑ 42.8%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}