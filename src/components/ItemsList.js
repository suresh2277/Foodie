import cb_Single from "../assets/CB_single.PNG";
import VF_rice from "../assets/VF_rice.JPG";
import plain_rice from "../assets/plain_rice.JPG";
import svf_rice from "../assets/svf_rice.JPG";

const ItemsList = [
  {
    id: 1,
    name: "Veg Fried Rice",
    price: 130,
    totalQuantity: 10,
    image: VF_rice,
    description: "Veg Fried Rice(Served with garlic sauce)",
    type: "veg",
  },
  {
    id: 2,
    name: "Plain Rice (basmati)",
    price: 90,
    totalQuantity: 92,
    image: plain_rice,
    description: "",
    type: "veg",
  },
  {
    id: 3,
    name: "Schezwan Veg Fired Rice",
    price: 140,
    totalQuantity: 93,
    image: svf_rice,
    description: "",
    type: "veg",
  },
  {
    id: 4,
    name: "Chicken Biryani Single",
    price: 140,
    totalQuantity: 80,
    image: cb_Single,
    description:
      "Chicken Biryani Single((Serves With One Piece of Chicken, Mirchi Ka Salan,Dahi Ka Chutney And Salad)A delightful preparation of richly flavored aromatic rice layered with marinated chicken pieces in a delicate blend of whole spices.)",
    type: "nonveg",
  },
];

export default ItemsList;
