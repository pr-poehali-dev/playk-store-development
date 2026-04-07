import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import CatalogPage from "@/pages/CatalogPage";
import CartPage from "@/pages/CartPage";
import ProfilePage from "@/pages/ProfilePage";
import BlogPage from "@/pages/BlogPage";
import AboutPage from "@/pages/AboutPage";
import ContactsPage from "@/pages/ContactsPage";

const queryClient = new QueryClient();

interface CartItem {
  id: number;
  name: string;
  price: number;
  emoji: string;
  qty: number;
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: { id: number; name: string; price: number; emoji: string }) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const changeQty = (id: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
    } else {
      setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
    }
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onAddToCart={addToCart} setCurrentPage={setCurrentPage} />;
      case 'catalog': return <CatalogPage onAddToCart={addToCart} />;
      case 'cart': return <CartPage items={cart} onRemove={removeFromCart} onQtyChange={changeQty} setCurrentPage={setCurrentPage} />;
      case 'profile': return <ProfilePage onAddToCart={addToCart} />;
      case 'blog': return <BlogPage />;
      case 'about': return <AboutPage />;
      case 'contacts': return <ContactsPage />;
      default: return <HomePage onAddToCart={addToCart} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background">
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} cartCount={cartCount} />
          {renderPage()}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
