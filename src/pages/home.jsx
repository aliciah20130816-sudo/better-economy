import './style.css';

export default function HomePage() {

    return (
        <div className="flex-grow roboto-serif-uniquifier background primarytext">
            <div className="m-5">
                <div className="font-bold text-2xl">Dashboard</div>
                <div>
                    <div className="homecards">
                        <div className="cards">Total Spent
                            <div>$4119.24</div>
                            <p className="italic secondarytext">All Time</p>
                        </div>

                        <div className="cards">Purchases
                            <div>12</div>
                            <p className="italic secondarytext">All Time</p>
                        </div>

                        <div className="cards">Most Spent Category
                            <div>Others</div>
                            <p className="italic secondarytext">All Time</p>
                        </div>
                    </div>
                    <div className="cards h-auto">
                        <div className="m-5">Spending Trends</div>
                        <div className="flex justify-evenly items-start">
                            <img src="https://i.ibb.co/pBM3bmT2/Spending-Trend-Over-The-Month.png" />
                            <img src="https://i.ibb.co/fz25kjmX/Spending-by-Category-2.png" />
                        </div>
                    </div>
                    <div className="bottomcards">
                        <div className="w-500 cards">
                            <div className="m-5">Spending by Category</div>
                            <div>
                                <div className="flex justify-between m-5">
                                    <div>Food</div>
                                    <div>$21.01</div>
                                </div>
                                <div className="flex justify-between m-5">
                                    <div>Clothing</div>
                                    <div>$92.36</div>
                                </div>
                                <div className="flex justify-between m-5">
                                    <div>Entertainment</div>
                                    <div>$494.65</div>
                                </div>
                                <div className="flex justify-between m-5">
                                    <div>Electronics</div>
                                    <div>$99.99</div>
                                </div>
                                <div className="flex justify-between m-5">
                                    <div>School/Work</div>
                                    <div>$10.98</div>
                                </div>
                                <div className="flex justify-between m-5">
                                    <div>Others</div>
                                    <div>$3,400.25</div>
                                </div>
                            </div>
                        </div>
                        <div className=" w-500 cards">
                            <div className="m-5">Recent Purchases</div>
                            <div>
                                <div className="flex justify-between m-5">
                                    <div>Banana Costume</div>
                                    <div>$34.78</div>
                                </div>
                                <div className="flex justify-between m-5">
                                    <div>Boba</div>
                                    <div>$6.54</div>
                                </div>
                                <div className="flex justify-between m-5">
                                    <div>Cheese Burger</div>
                                    <div>$6.48</div>
                                </div>
                                <div className="flex justify-between m-5">
                                    <div>T-shirt</div>
                                    <div>$24.59</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}