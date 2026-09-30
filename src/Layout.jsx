import { Link, Route, Routes } from 'react-router'
import HomePage from './pages/home'
import HistoryPage from './pages/history'
import InsightsPage from './pages/insights'

const ROUTES = [
  { path: "/", element: <HomePage /> },
  { path: "/history", element: <HistoryPage /> },
  { path: "/insights", element: <InsightsPage /> },
]

export default function Layout() {


  function underline(name) {
    const ids = ["dash", "hist", "insi"];
    ids.map((v) => document.getElementById(v).style.textDecoration = "");
    document.getElementById(name).style.textDecoration = "underline #43d7a3 4px";
  }


  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <nav className="grid grid-cols-4 w-200">
        <img src="https://i.ibb.co/20xtCWg0/Transparent-Logo.png" />
        <Link onClick={() => underline("dash")} to="/">
          <div id="dash" className="m-5 font-bold flex justify-center" onClick={() => underline("dash")} style={{}}>Dashboard</div>
        </Link>
        <Link onClick={() => underline("hist")} to="/history">
          <div id="hist" className="m-5 font-bold flex justify-center" onClick={() => underline("hist")} style={{}}>Purchase history</div>
        </Link>
        <Link onClick={() => underline("insi")} to="/insights">
          <div id="insi" className="m-5 font-bold flex justify-center" onClick={() => underline("insi")} style={{}}>Insights</div>
        </Link>
      </nav>
      {/* Main */}
      <Routes>
        {ROUTES.map((r) => <Route key={r.path} path={r.path} element={r.element} />)}
      </Routes>
      {/* Footer */}
      <div className="p-5 bg-base-300"></div>
    </div>
  )
}
