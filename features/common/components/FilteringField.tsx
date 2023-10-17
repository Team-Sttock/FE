import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'

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

const filterCategory: SortOptionProps[] = [
  { id: 1, type: '주방용품', value: 'kitchen' },
  { id: 2, type: '생활용품', value: 'living' },
  { id: 3, type: '구강|면도', value: 'oral' },
  { id: 4, type: '욕실용품', value: 'bathroom' },
  { id: 5, type: '헤어|바디', value: 'hair' },
  { id: 6, type: '스킨케어', value: 'skincare' },
  { id: 7, type: '여성용품', value: 'feminine' },
  { id: 8, type: '기타', value: 'etc' },
]

const filterState: SortOptionProps[] = [
  { id: 1, type: '사용중', value: 'using' },
  { id: 2, type: '사용중지', value: 'stop' },
  { id: 3, type: '소진', value: 'exhausted' },
]

export default function FilteringField() {
  const router = useRouter()
  const [selectedSorting, setSelectedSorting] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedState, setSelectedState] = useState('')

  const handleSortingSelect = (type: string, value: string) => {
    setSelectedSorting(type)
    updateQueryParams({ sorting: value })
  }

  const handleCategorySelect = (type: string, value: string) => {
    setSelectedCategory(type)
    updateQueryParams({ category: value })
  }

  const handleStateSelect = (type: string, value: string) => {
    setSelectedState(type)
    updateQueryParams({ state: value })
  }

  const clearAll = () => {
    const newParams = { ...router.query }
    delete newParams.sorting
    delete newParams.category
    delete newParams.state
    router.push({ pathname: router.pathname, query: newParams }).catch(() => {
      // console.log(err)
    })
  }

  const updateQueryParams = (params: any) => {
    const currentParams = router.query
    const newParams = { ...currentParams, ...params }
    router.push({ pathname: router.pathname, query: newParams }).catch(() => {
      // console.log(err)
    })
  }
  const clearSorting = () => {
    const newParams = { ...router.query }
    delete newParams.sorting
    router.push({ pathname: router.pathname, query: newParams }).catch(() => {
      // console.log(err)
    })
  }

  const clearCategory = () => {
    const newParams = { ...router.query }
    delete newParams.category
    router.push({ pathname: router.pathname, query: newParams }).catch(() => {
      // console.log(err)
    })
  }

  const clearState = () => {
    const newParams = { ...router.query }
    delete newParams.state
    router.push({ pathname: router.pathname, query: newParams }).catch(() => {
      // console.log(err)
    })
  }

  return (
    <>
      {/* 정렬 필터링 */}
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3">
          <Menu className="relative inline-block text-left" as="div">
            <Menu.Button className="flex items-center justify-center bg-ivory w-fit h-fit px-4 py-1.5 text-sm text-light-brown rounded-md border-beige hover:bg-beige">
              <img
                src="/icons/down-arrow.svg"
                alt="down-arrow"
                className="w-3 h-3 mr-2"
              />
              정렬
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className=" flex flex-col border-2 space-y-2 w-32 p-4 mt-2 bg-white border-ivory rounded-lg text-dark-brown shadow-md absolute ">
                {filterSorting.map((sort) => (
                  <Menu.Item
                    as="button"
                    key={sort.id}
                    className={`w-full hover:text-light-brown ${
                      selectedSorting === sort.type
                        ? 'text-light-brown font-bold'
                        : ''
                    }`}
                    onClick={() => {
                      handleSortingSelect(sort.type, sort.value)
                    }}
                  >
                    {sort.type}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          {/* 카테고리 필터링 */}
          <Menu className="relative inline-block text-left" as="div">
            <Menu.Button
              className={`flex items-center justify-center bg-ivory w-fit h-fit px-4 py-1.5 text-sm text-light-brown rounded-md border-beige hover:bg-beige`}
            >
              <img
                src="/icons/down-arrow.svg"
                alt="down-arrow"
                className="w-3 h-3 mr-2"
              />
              카테고리
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute flex flex-col border-2 space-y-2 w-32 p-4 mt-2 bg-white border-ivory rounded-lg text-dark-brown shadow-md">
                {filterCategory.map((category) => (
                  <Menu.Item
                    as="button"
                    key={category.id}
                    className={`w-full hover:text-light-brown ${
                      selectedCategory === category.type
                        ? 'text-light-brown font-bold'
                        : ''
                    }`}
                    onClick={() => {
                      handleCategorySelect(category.type, category.value)
                    }}
                  >
                    {category.type}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          {/* 상태 필터링 */}
          <Menu className="relative inline-block text-left" as="div">
            <Menu.Button
              className={`flex items-center justify-center bg-ivory w-fit h-fit px-4 py-1.5 text-sm text-light-brown rounded-md border-beige hover:bg-beige`}
            >
              <img
                src="/icons/down-arrow.svg"
                alt="down-arrow"
                className="w-3 h-3 mr-2"
              />
              상태
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute flex flex-col border-2 space-y-2 w-32 p-4 bg-white border-ivory rounded-lg text-dark-brown shadow-md">
                {filterState.map((state) => (
                  <Menu.Item
                    as="button"
                    key={state.id}
                    className={`w-full hover:text-light-brown ${
                      selectedState === state.type
                        ? 'text-light-brown font-bold'
                        : ''
                    }`}
                    onClick={() => {
                      handleStateSelect(state.type, state.value)
                    }}
                  >
                    {state.type}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* 필터에 따른 요소 */}
        <div className="flex flex-wrap space-x-2">
          {selectedSorting && (
            <FilterWords sorting={selectedSorting} onClear={clearSorting} />
          )}
          {selectedCategory && (
            <FilterWords sorting={selectedCategory} onClear={clearCategory} />
          )}
          {selectedState && (
            <FilterWords sorting={selectedState} onClear={clearState} />
          )}
          {(selectedSorting || selectedCategory || selectedState) && (
            <button className="text-dark-brown text-sm pl-2" onClick={clearAll}>
              초기화
            </button>
          )}
        </div>
      </div>
    </>
  )
}

interface FilterWordsProps {
  sorting: string
  onClear: () => void
}

const FilterWords: React.FC<FilterWordsProps> = ({ sorting, onClear }) => {
  return (
    <div className="flex justify-center bg-beige text-dark-brown w-fit h-fit px-4 py-1.5 my-1 text-sm space-x-2 rounded-full">
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
