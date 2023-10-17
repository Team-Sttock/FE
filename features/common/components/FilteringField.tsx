import { Menu } from '@headlessui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

interface SortOptionProps {
  id: number
  type: string
  value: string
}

const filterSorting: SortOptionProps[] = [
  { id: 1, type: '최신순', value: 'recent' },
  { id: 2, type: '오래된 순', value: 'old' },
  { id: 3, type: '소진임박순', value: 'upcoming' },
]

const FilteringField: React.FC = () => {
  const router = useRouter()
  const [selectedSorting, setSelectedSorting] = useState('')
  const clearSorting = () => {
    setSelectedSorting('')
    router
      .push({
        pathname: router.pathname,
        query: {},
      })
      .catch(() => {})
  }
  return (
    <>
      <Menu>
        <Menu.Button
          className={`flex items-center justify-center bg-ivory w-20 h-8 text-sm text-light-brown rounded-md border-beige hover:bg-beige`}
        >
          <img
            src="/icons/down-arrow.svg"
            alt="down-arrow"
            className="w-3 h-3 mr-2"
          />
          정렬
        </Menu.Button>
        <Menu.Items className="absolute flex flex-col border-2 space-y-2 w-32 p-4 mt-2 bg-white border-ivory rounded-lg text-dark-brown shadow-md">
          {filterSorting.map((sort) => (
            <Menu.Item
              as="button"
              key={sort.id}
              className="w-full hover:text-light-brown"
              onClick={() => {
                setSelectedSorting(sort.type)
                router
                  .push({
                    pathname: router.pathname,
                    query: { sort: sort.value },
                  })
                  .catch(() => {
                    // console.log(err)
                  })
              }}
            >
              {sort.type}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>

      {selectedSorting && (
        <FilterWords sorting={selectedSorting} onClear={clearSorting} />
      )}
    </>
  )
}
export default FilteringField

interface FilterWordsProps {
  sorting: string
  onClear: () => void
}

const FilterWords: React.FC<FilterWordsProps> = ({ sorting, onClear }) => {
  return (
    <div className="flex justify-center bg-beige text-dark-brown w-fit h-fit px-4 py-1.5 text-sm space-x-2 rounded-full mt-2">
      <span>{sorting}</span>
      <button onClick={onClear}>
        <img
          src="/icons/deleteButton.svg"
          alt="delete"
          className="w-4 h-4 ml-1"
        ></img>
      </button>
    </div>
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
