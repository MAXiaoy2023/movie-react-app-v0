import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import { Footer } from './components/Footer'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { CounterProvider } from './contexts/CounterProvider'
import { WatchlistProvider } from './contexts/WatchlistProvider'
// import ProtectedPage from './restricted-pages/ProtectedPage'
import AuthLayout from './layout/AuthLayout'
import DefaultLayout from './layout/DefaultLayout'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'


  const App = () => {

    return (
    <WatchlistProvider>
      <CounterProvider>
          <BrowserRouter>
            <Routes>
              {/* <Route element={<ProtectedPage />}>
                <Route path="/" element={<Home />} /> 
              </Route> */}
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Home />} /> 
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
              </Route>
              <Route element={<DefaultLayout />}>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
              </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
      </CounterProvider>
    </WatchlistProvider> 
    )
  }
  export default App






