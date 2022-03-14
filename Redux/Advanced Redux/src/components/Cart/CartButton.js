import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch,useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const totalCartAmount = useSelector(state => state.cart.totalQuantitiy);
  const toggleCartHandler = () => {
    dispatch(uiActions.toogle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartAmount}</span>
    </button>
  );
};

export default CartButton;
