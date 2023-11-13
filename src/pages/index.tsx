import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductsList from "@/components/ProductsList"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
          <ProductsList />
      </QueryClientProvider>
      <Footer />
    </>
  )
}
