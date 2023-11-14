import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductsList from "@/components/ProductsList"
import CartSidebar from "@/components/CartSidebar"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { CartProvider } from "@/components/CartContext"

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
    <CartProvider>
      <Header />
        <QueryClientProvider client={queryClient}>
            <ProductsList />
            <CartSidebar />
        </QueryClientProvider>
        <Footer />
    </CartProvider>
    </>
  )
}
