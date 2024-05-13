import { Fragment } from "react";
import StarRating from "./componets/StarRating";

function App() {
  return (
    <div>
      {product?.map((item) => (
        <Fragment key={item?.id}>
          <StarRating rating={item?.rating} />
        </Fragment>
      ))}
    </div>
  );
}

export default App;

const product = [
  {
    id: crypto.randomUUID(),
    product: "Glass",
    event: "sale",
    rating: 7,
  },
];
