import { ConstructorPage } from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, OrderInfo } from '@components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Feed } from '@pages';
import { Login } from '@pages';
import { Register } from '@pages';
import { ForgotPassword } from '@pages';
import { ResetPassword } from '@pages';
import { Profile } from '@pages';
import { ProfileOrders } from '@pages';
import { NotFound404 } from '@pages';
import { IngredientDetails } from '@components';

const App = () => (
  <div className={styles.app}>
    <AppHeader />
    <Router>
      <div className={styles.main}>
        <Routes>
          {/* // TODO поместить в протектед роут */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/orders' element={<ProfileOrders />} />

          <Route path='/' element={<ConstructorPage />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='*' element={<NotFound404 />} />
          <Route path='/feed/number' element={<OrderInfo />} />
          <Route
            path='/ingredients/:id'
            element={
              <div className={styles.detailPageWrap}>
                <p
                  className={'text text_type_main-large ${styles.detailHeader}'}
                >
                  Детали ингридиента
                </p>
                <IngredientDetails />
              </div>
            }
          />
          <Route path='/profile/orders/:number' element={<OrderInfo />} />
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
