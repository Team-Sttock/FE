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

// 드롭다운 메뉴 컴포넌트
interface DropdownProps {
  items: SortOptionProps[]
  onSelect: (value: string) => void
  filterTitle: string
  selectedValue: string | string[] | undefined
  filterType: string
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  onSelect,
  filterTitle,
}) => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex items-center justify-center bg-ivory w-fit h-fit px-4 py-1.5 text-sm text-light-brown rounded-md border-beige hover-bg-beige">
          <img
            src="/icons/down-arrow.svg"
            alt="down-arrow"
            className="w-3 h-3 mr-2"
          />
          <span>{filterTitle}</span>
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
          <Menu.Items className="flex flex-col border-2 space-y-2 w-32 p-4 mt-2 bg-white border-ivory rounded-lg text-dark-brown shadow-md absolute">
            {items.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-beige' : 'bg-white'
                    } flex items-center justify-center w-full h-8 rounded-md text-sm`}
                    onClick={() => {
                      onSelect(item.value)
                    }}
                  >
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

// 필터링 컴포넌트
export default function FilteringField() {
  const router = useRouter()
  const { query } = router

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
    const newParams = { ...query, ...params }
    void router.push({ pathname: router.pathname, query: newParams })
  }

  const clearFilter = (filterType: string) => {
    const { [filterType]: removedFilter, ...rest } = query
    void router.push({ pathname: router.pathname, query: rest })
  }

  const clearAll = () => {
    void router.push({ pathname: router.pathname })
  }

  return (
    <>
      {/* 정렬 */}
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3">
          <Dropdown
            items={filterSorting}
            onSelect={handleSortingSelect}
            selectedValue={query.sorting}
            filterTitle="정렬"
            filterType="sorting"
          />

          {/* 카테고리 */}
          <Dropdown
            items={filterCategory}
            onSelect={handleCategorySelect}
            selectedValue={query.category}
            filterTitle="카테고리"
            filterType="category"
          />

          {/* 상태 */}
          <Dropdown
            items={filterState}
            onSelect={handleStateSelect}
            selectedValue={query.state}
            filterTitle="상태"
            filterType="state"
          />
        </div>

        {/* 필터에 따른 요소 */}
        <div className="flex flex-wrap space-x-2">
          {query.sorting && (
            <FilterWords
              word={query.sorting}
              onClear={() => {
                clearFilter('sorting')
              }}
              options={filterSorting}
            />
          )}
          {query.category && (
            <FilterWords
              word={query.category}
              onClear={() => {
                clearFilter('category')
              }}
              options={filterCategory}
            />
          )}
          {query.state && (
            <FilterWords
              word={query.state}
              onClear={() => {
                clearFilter('state')
              }}
              options={filterState}
            />
          )}

          {(query.sorting ?? query.category ?? query.state) && (
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
  word: string | string[] | undefined
  onClear: () => void
  options: SortOptionProps[]
}

// 드롭다운으로 선택된 필터링 단어들이 나열되는 컴포넌트
const FilterWords: React.FC<FilterWordsProps> = ({
  word,
  onClear,
  options,
}) => {
  const filter = options.find((option) => option.value === word)
  const displayLabel = filter?.label ?? ''
  return (
    <div className="flex justify-center bg-beige text-dark-brown w-fit h-fit px-4 py-1.5 my-1 text-sm space-x-2 rounded-full">
      <span>{displayLabel}</span>
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
