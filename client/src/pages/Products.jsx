import { useDispatch } from "react-redux";
import { addtocart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();

  const staticProducts = [
    {
      id: 1,
      title: "Wireless Headphones",
      image:
        "https://media.istockphoto.com/id/1372906882/photo/modern-blue-wireless-headphones-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=0k-2JFElEQ0QTvXsgtLx3i2JotQo_Eb8aEwyN-BOZjA=",
      price: 99.99,
    },
    {
      id: 2,
      title: "Smart Watch",
      image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
      price: 199.99,
    },
    {
      id: 3,
      title: "Gaming Mouse",
      image:
        "https://t4.ftcdn.net/jpg/06/25/07/31/360_F_625073135_IixKG2q7WLZUhuuA5nWnSmUB3PP0lCBL.jpg",
      price: 49.99,
    },
    {
      id: 4,
      title: "Mechanical Keyboard",
      image:
        "https://www.shutterstock.com/image-photo/gaming-keyboard-rgb-light-white-260nw-1920716873.jpg",
      price: 89.99,
    },
    {
      id: 5,
      title: "Headphones",
      image:
        "https://img.freepik.com/premium-photo/wireless-headphones-hd-8k-wallpaper-stock-photographic-image_853645-35557.jpg?w=360",
      price: 99.99,
    },
    {
      id: 6,
      title: "Watch",
      image:
        "https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg",
      price: 199.99,
    },
    {
      id: 7,
      title: " Mouse",
      image:
        "https://t4.ftcdn.net/jpg/06/25/07/29/360_F_625072977_8KUYivRRg12kX7w0i34PSo3MLTYqnq0S.jpg",
      price: 49.99,
    },
    {
      id: 8,
      title: " Keyboard",
      image:
        "https://www.shutterstock.com/image-photo/gaming-keyboard-rgb-light-white-260nw-1920716873.jpg",
      price: 8000.1,
    },
    {
      id: 9,
      title: "Camera",
      image:
        "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      price: 8925.2,
    },
    {
      id: 10,
      title: "Tv",
      image:
        "https://media.istockphoto.com/id/638043774/photo/modern-curved-4k-ultrahd-tv.jpg?s=612x612&w=0&k=20&c=ZJBK7-64tG3uPBtXuUnWt-lAPSqz_nBlYXNYsVtmRtc=",
      price: 9000,
    },
    {
      id: 11,
      title: "ball",
      image:
        "https://plus.unsplash.com/premium_photo-1678579267285-d562dc53e783?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 9000,
    },
    {
      id: 12,
      title: "Headphone pro",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
      price: 9000,
    },


   
  ];

  const addToCart = (product) => {
    dispatch(
      addtocart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
      })
    );
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="cart-container1">
      <h2 className="cart-title1">My Products</h2>
      <div className="cart-products">
        {staticProducts.map((product) => (
          <div key={product.id} className="product-container1">
            <img
              src={product.image}
              alt={product.title}
              className="product-image1"
            />
            <div className="product-info1">
              <h4>{product.title}</h4>
              <p>${product.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
