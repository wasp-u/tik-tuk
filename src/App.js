
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FeedPageContainer from './components/FeedPage/FeedPageContainer';
import Header from './components/Header/Header';
import UserPageContainer from './components/UserPage/UserPageContainer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='wrapper'>
        <Routes >
          {/* <Route path='/' element={<FeedPageContainer />} />
          <Route path='/feed' element={<FeedPageContainer />} /> */}
          <Route path='/profile' element={<UserPageContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
