import { client } from '.'

export interface GetBasicProductsResProps {
  prodId: number
  prodName: string
  categoryName: string
  basicExpectedAmount: number
  basicExpectedUnit: string
}
export const getBasicProductsRes = async () => {
  try {
    const response = await client.get<GetBasicProductsResProps[]>(
      '/basic/products'
    )
    return response.data
  } catch (error) {
    console.error('Error fetching Products:', error)
    return []
  }
}
