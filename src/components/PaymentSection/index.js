import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Payment = () => (
  <>
    <Header />
    <div className="order-placed-container">
      <div className="order-placed-card">
        <img
          src="https://res.cloudinary.com/dpnobkqmw/image/upload/v1634289466/Vector_ifhuwg.png"
          alt="success"
          className="success-img"
        />
        <h1 className="order-head">Order Placed Successfully!</h1>
        <p className="order-des">Thank You for Ordering!</p>
        <Link to="/products">
          <button type="button" className="order-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Payment
