import { IMG } from "@/lib/site";

export const MENU = [
  {
    category: "Highway Snacks",
    items: [
      { name: "Fresh Chicken Popcorn", desc: "Unfrozen chicken breast, seasoned crust, fried golden to order.", price: 180, diet: "nonveg", best: true, img: IMG.popcorn },
      { name: "Golden Crispy Nuggets", desc: "Hand-breaded tender chicken bites — a children's favourite.", price: 160, diet: "nonveg", img: IMG.popcorn },
      { name: "Highway Masala Chai", desc: "Slow-brewed milk tea with cardamom, ginger and cinnamon.", price: 30, diet: "veg", best: true, img: IMG.chai },
    ],
  },
  {
    category: "Tandoori & Indian",
    items: [
      { name: "Paneer Butter Masala", desc: "Cottage cheese in a velvet tomato-butter gravy.", price: 220, diet: "veg", img: IMG.naan },
      { name: "Chicken Butter Masala", desc: "Charred tandoori chicken folded into rich makhani sauce.", price: 260, diet: "nonveg", img: IMG.naan },
      { name: "Garlic Butter Naan", desc: "Blistered in the tandoor, brushed with garlic butter.", price: 60, diet: "veg", img: IMG.naan },
      { name: "Chicken Biryani", desc: "Saffron basmati, slow-dum chicken, fried onion and mint.", price: 240, diet: "nonveg", best: true, img: IMG.biryani },
      { name: "Mutton Biryani", desc: "Tender mutton layered with fragrant long-grain rice.", price: 320, diet: "nonveg", img: IMG.biryani },
    ],
  },
  {
    category: "Bengali Classics",
    items: [
      { name: "Fresh Catch Fish Thali", desc: "Rice, dal, aloo bhaja, tarkari and delta-fish macher jhol.", price: 280, diet: "nonveg", best: true, img: IMG.thali },
      { name: "Bengali Veg Thali", desc: "Steamed rice, lentil dal, seasonal tarkari and crisp bhaja.", price: 180, diet: "veg", img: IMG.thali },
    ],
  },
  {
    category: "Continental",
    items: [
      { name: "Tender Pan-Seared Steak", desc: "Brown herb gravy, grilled vegetables, roasted potatoes.", price: 380, diet: "nonveg", best: true, img: IMG.steak },
    ],
  },
];