import { CheckIcon } from '@heroicons/react/20/solid'
import React, { useId } from 'react'
import { type Control, Controller, type RegisterOptions } from 'react-hook-form'
import Select from 'react-select'

import { classNames } from '../utils/classNames'

interface Option {
  value: string
  label: string
}

interface ComboBoxProps {
  name: string
  placeholder?: string
  control: Control<any>
  options: Option[]
  className?: string
  rules?: Omit<
    RegisterOptions<any, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
}

function CustomOption({ innerProps, data, isSelected }: any) {
  return (
    <div
      {...innerProps}
      className="px-2 py-2 flex items-center justify-between hover:bg-beige"
    >
      {data.label} {isSelected && <CheckIcon className="w-6 h-6"></CheckIcon>}
    </div>
  )
}

export default function ComboBox({
  name,
  control,
  options,
  className,
  placeholder,
  rules,
}: ComboBoxProps) {
  const id = useId()
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Select
            options={options}
            onChange={(elem) => {
              onChange(elem?.value)
            }}
            value={options.find((option) => option.value === value)}
            placeholder={placeholder ?? '필드를 선택하세요.'}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              borderWidth: 1,

              colors: {
                ...theme.colors,
                primary25: '#ebe4d9',
                primary50: '#ebe4d9',
                primary: '#665a48',
                neutral5: '#ebe4d9',
                neutral20: '#ebe4d9',
                neutral80: '#665a48',
              },
              spacing: {
                ...theme.spacing,
                controlHeight: 42,
                baseUnit: 5,
              },
            })}
            className={classNames(
              className ?? '',
              'text-dark-brown border border-beige box-border text-sm',
              'focus-within:outline focus-within:outline-1 focus-within:outline-light-brown'
            )}
            components={{ Option: CustomOption }}
            instanceId={id}
            styles={{
              placeholder: (styles: any) => ({
                ...styles,
                color: '#ebe4d9',
              }),
              control: (base) => ({
                ...base,
                // This line disable the blue border
                boxShadow: 'none',
                border: 0,
              }),
            }}
          />
        )}
      />
    </div>
  )
}
