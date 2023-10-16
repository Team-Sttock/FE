import { Menu } from '@headlessui/react'
import { useState } from 'react'

const filterSorting = [
  { id: 1, type: '최신순' },
  { id: 2, type: '오래된 순' },
  { id: 3, type: '소진임박순' },
]

export default function FilteringField() {
  const [selectedSorting, setSelectedSorting] = useState('')

  return (
    <>
      <Menu>
        <Menu.Button className="flex items-center justify-center bg-ivory w-20 h-8 text-sm text-light-brown rounded-md border-beige hover:bg-beige">
          <img
            src="/icons/down-arrow.svg"
            alt="down-arrow"
            className="w-3 h-3 mr-2"
          />
          정렬
        </Menu.Button>
        <Menu.Items className="absolute flex flex-col border-2 space-y-2 w-32 p-4 mt-2 border-ivory rounded-lg text-dark-brown shadow-md">
          {filterSorting.map((sort) => (
            <Menu.Item
              as="button"
              key={sort.id}
              className="w-full hover:underline"
              onClick={() => {
                setSelectedSorting(sort.type)
              }}
            >
              {sort.type}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>

      {selectedSorting && <h1>{selectedSorting}</h1>}
    </>
  )
}

// const FILTER_CATEGORY = [
//   {
//     sort_type: 'category',
//     title: '카테고리',
//     contents: [
//       '주방용품',
//       '생활용품',
//       '구강|면도',
//       '욕실용품',
//       '헤어|바디',
//       '스킨케어',
//       '여성용품',
//       '기타',
//     ],
//   },
// ]

// const FILTER_STATE = [
//   {
//     sort_type: 'state',
//     title: '상태',
//     contents: ['사용중', '사용중지', '재구매'],
//   },
// ]
