import apiClient from '../apiClient'
import { Product } from '../types/Product'
import { useQuery } from '@tanstack/react-query'

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
  })

export const useGetProductBySlugQuery = (slug: string) =>
  useQuery({
    queryKey: ['products', slug],
    queryFn: async () =>
      (await apiClient.get<Product>(`api/products/${slug}`)).data,
  })
