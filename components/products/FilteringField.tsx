import { useRouter } from 'next/router'
import React from 'react'

import { Dropdown, type SortOptionProps } from '../Dropdown'

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
  { id: 1, label: '사용중', value: 'inuse' },
  { id: 2, label: '사용중지', value: 'stop' },
  { id: 3, label: '소진', value: 'exhausted' },
]

export default function FilteringField() {
  const router = useRouter()
  const { sorting, category, state } = router.query

  const selectedFilters = [
    { type: 'sorting', value: sorting },
    { type: 'category', value: category },
    { type: 'state', value: state },
  ].filter((filter) => filter.value)

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
    const newParams = { ...router.query, ...params }
    void router.push({ pathname: router.pathname, query: newParams })
  }

  const clearFilter = (filterType: string) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { [filterType]: _, ...rest } = router.query
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
            selectedValue={sorting}
            title="정렬"
            filterType="sorting"
          />

          {/* 카테고리 */}
          <Dropdown
            items={filterCategory}
            onSelect={handleCategorySelect}
            selectedValue={category}
            title="카테고리"
            filterType="category"
          />

          {/* 상태 */}
          <Dropdown
            items={filterState}
            onSelect={handleStateSelect}
            selectedValue={state}
            title="상태"
            filterType="state"
          />
        </div>

        {/* 필터에 따른 요소 */}
        <div className="flex flex-wrap space-x-2">
          {selectedFilters.map((filter) => (
            <FilterWords
              key={filter?.type}
              word={filter?.value}
              onClear={() => {
                clearFilter(filter?.type ?? '')
              }}
              options={
                filter?.type === 'sorting'
                  ? filterSorting
                  : filter?.type === 'category'
                  ? filterCategory
                  : filterState
              }
            />
          ))}
          {(sorting ?? category ?? state) && (
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
