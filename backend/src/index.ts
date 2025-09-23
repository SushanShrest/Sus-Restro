// server.ts
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory menu items
let menuItems = [
  { id: 1, title: "Chicken Pizza", price: 150, rating: 5, category: "non-veg", todaySpecial: false, image:"https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg" },
  { id: 2, title: "Classic Margherita", price: 120, rating: 4, category: "veg", todaySpecial: true, image:"https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920_e41233d5-dcec-461c-b07e-03245f031dfe.jpg?v=1737105431&width=2048" },
  { id: 3, title: "Veggie Burger", price: 90, rating: 4, category: "veg", todaySpecial: false, image:"https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-6-1024x1536.jpg" },
  { id: 4, title: "Cheese Burger", price: 110, rating: 5, category: "veg", todaySpecial: true, image:"https://beatthebudget.com/wp-content/uploads/2024/11/grilled-cheese-burger-1-1024x1536.jpg" },
  { id: 5, title: "French Fries", price: 60, rating: 4, category: "starter", todaySpecial: false, image:"https://sausagemaker.com/wp-content/uploads/Homemade-French-Fries_8.jpg" },
  { id: 6, title: "Shish Kebab", price: 200, rating: 5, category: "meat", todaySpecial: true, image:"https://cookingorgeous.com/wp-content/uploads/2021/06/lamb-shish-kebab-20.jpg" },
  { id: 7, title: "Baby Steak", price: 350, rating: 4, category: "meat", todaySpecial: false, image:"https://hips.hearstapps.com/hmg-prod/images/how-to-cook-steak-in-the-oven-index-66a3eda7b9f52.jpg?crop=0.502xw:1.00xh;0.147xw,0&resize=1200:*" },
  { id: 8, title: "Lamb Steak", price: 450, rating: 5, category: "meat", todaySpecial: true, image:"https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg" },
  { id: 9, title: "Classic Pizza", price: 180, rating: 4, category: "starter", todaySpecial: false, image:"https://www.dominos.co.in/files/items/cheese_and_tomato.png" },
  { id: 10, title: "Pasta Alfredo", price: 160, rating: 4, category: "starter", todaySpecial: true, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TY78rA8L0CC_LPka0MHsYfqpaiDG5lUGJA&s" },
  { id: 11, title: "Spaghetti Bolognese", price: 170, rating: 5, category: "starter", todaySpecial: false, image:"https://www.tamingtwins.com/wp-content/uploads/2025/01/spaghetti-bolognese-12-1152x1536.jpg" },
  { id: 12, title: "Iced Coffee", price: 70, rating: 4, category: "drinks", todaySpecial: false, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQwJ4Cs8IV6EmaxczPWKeVgKuPcAgG8Ou-w&s" },
  { id: 13, title: "Lemonade", price: 50, rating: 4, category: "drinks", todaySpecial: true, image:"https://www.foodiecrush.com/wp-content/uploads/2022/06/Lemonade-foodiecrush.com-9-1-1024x1536.jpg" },
  { id: 14, title: "Chocolate Cake", price: 90, rating: 5, category: "dessert", todaySpecial: true, image:"https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg" },
  { id: 15, title: "Brownie Sundae", price: 100, rating: 4, category: "dessert", todaySpecial: false, image:"https://www.thereciperebel.com/wp-content/uploads/2022/05/brownie-sundae-TRR-1200-25-of-40.jpg" }
];

// Root endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Sus Cafe API ☕");
});

// GET menu
app.get("/menu", (req: Request, res: Response) => {
  res.json(menuItems);
});

// POST menu
app.post("/menu", (req: Request, res: Response) => {
  const newMenuItem = req.body;
  
  newMenuItem.id = menuItems.length + 1;

  menuItems.push(newMenuItem);

  console.log("New menu item added:", newMenuItem);

  res.status(201).json({ message: "Menu item added", data: newMenuItem });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
