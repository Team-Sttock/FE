import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

interface SortOptionProps {
  id: number
  label: string
  value: string
}

const filterSorting: SortOptionProps[] = [
  { id: 1, label: '최신순', value: 'recent' },
  { id: 2, label: '오래된 순', value: 'old' },
  { id: 3, label: '소진임박순', value: 'upcoming' },
]

const filterCategory: SortOptionProps[] = [
  { id: 1, label: '주방용품', value: 'kitchen' },
  { id: 2, label: '생활용품', value: 'living' },
  { id: 3, label: '구강 | 면도', value: 'oral' },
  { id: 4, label: '욕실용품', value: 'bathroom' },
  { id: 5, label: '헤어 | 바디', value: 'hair' },
  { id: 6, label: '스킨케어', value: 'skincare' },
  { id: 7, label: '여성용품', value: 'feminine' },
  { id: 8, label: '기타', value: 'etc' },
]

const filterState: SortOptionProps[] = [
  { id: 1, label: '사용중', value: 'using' },
  { id: 2, label: '사용중지', value: 'stop' },
  { id: 3, label: '소진', value: 'exhausted' },
]

export default function FilteringField() {
  const router = useRouter()

  const handleSortingSelect = (value: string) => {
    updateQueryParams({ sorting: value })
  }

  const handleCategorySelect = (value: string) => {
    updateQueryParams({ category: value })
  }

  const handleStateSelect = (value: string) => {
    updateQueryParams({ state: value })
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

  const clearAll = () => {
    const newParams = { ...router.query }
    delete newParams.sorting
    delete newParams.category
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
                      sort.value === router.query.sorting
                        ? 'text-light-brown font-bold'
                        : ''
                    }`}
                    onClick={() => {
                      handleSortingSelect(sort.value)
                    }}
                  >
                    {sort.label}
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
                      category.value === router.query.category
                        ? 'text-light-brown font-bold'
                        : ''
                    }`}
                    onClick={() => {
                      handleCategorySelect(category.value)
                    }}
                  >
                    {category.label}
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
                      state.value === router.query.state
                        ? 'text-light-brown font-bold'
                        : ''
                    }`}
                    onClick={() => {
                      handleStateSelect(state.value)
                    }}
                  >
                    {state.label}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        {/* 필터에 따른 요소 */}
        <div className="flex flex-wrap space-x-2">
          {router.query.sorting && (
            <FilterWords
              sorting={router.query.sorting}
              onClear={clearSorting}
            />
          )}
          {router.query.category && (
            <FilterWords
              sorting={router.query.category}
              onClear={clearCategory}
            />
          )}
          {router.query.state && (
            <FilterWords sorting={router.query.state} onClear={clearState} />
          )}

          {/* 초기화버튼 */}
          {(router.query.sorting ??
            router.query.category ??
            router.query.state) && (
            <button className=" text-dark-brown text-sm " onClick={clearAll}>
              <span>초기화</span>
            </button>
          )}
        </div>
      </div>
    </>
  )
}

interface FilterWordsProps {
  sorting: any
  onClear: () => void
}

const FilterWords: React.FC<FilterWordsProps> = ({ sorting, onClear }) => {
  const filter = [...filterSorting, ...filterCategory, ...filterState].find(
    (item) => item.value === sorting
  )
  const displayText = filter?.label ?? sorting
  return (
    <div className="flex justify-center bg-beige text-dark-brown w-fit h-fit px-4 py-1.5 my-1 text-sm space-x-2 rounded-full">
      <span>{displayText}</span>
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
