import { basicClient } from '.'

export interface GetBasicProductsResProps {
  like: string
}

export const getBasicProductsRes =
  basicClient.get<GetBasicProductsResProps>('/products')

export interface GetBasicCategoriesResProps {
  like: string
}

export const getBasicCategoriesRes =
  basicClient.get<GetBasicCategoriesResProps>('/categories')
