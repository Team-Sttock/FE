// // `${http메서드}${컨트롤URL이면 여기에 명사}${마지막 패스 명사}`

// import { type MutationRes, productClient } from '.'

// export interface GetProductResProps {
//   sorted: string
//   category: string
//   state: string
//   page: number
// }

// export const getProductsRes = productClient.get<GetProductResProps>('')

// export interface GetProductIdResProps {
//   prod_id: number
//   category_cd: string
//   prod_nickname: string
//   purchase_date: string
//   expected_days: number
//   purchase_capacity: number
//   capcity_unit_cd: string
//   purchase_number: number
//   number_of_users: number
//   expiration_date: string
//   category_url: string
//   state: string
// }

// export const getProductIdRes = async (props: GetProductIdResProps) =>
//   await productClient(`/products/${props.prod_id}`)

// export interface PostProductsProps {
//   prod_id: number
//   category_cd: string
//   prod_nickname: string
//   purchase_date: string
//   purchase_capacity: number
//   capcity_unit_cd: string
//   purchase_number: number
//   number_of_users: number
//   expiration_date: string
// }

// export const postProducts = async (props: PostProductsProps) =>
//   await productClient.post<MutationRes, PostProductsProps>('/products', props)

