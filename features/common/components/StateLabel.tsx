import { classNames } from '../../../utils/classNames'

export enum State {
  INUSE = 'INUSE',
  EXHAUSTED = 'EXHAUSTED',
  STOP = 'STOP',
}

export interface StateLabelProps {
  state: State
}

export const StateLabel = ({ state }: StateLabelProps) => {
  const className = classNames(
    'text-xs rounded-xl w-20 h-fit text-center px-1.5 py-1 mx-1 whitespace-nowrap',
    LabelContent[state]?.className
  )

  return <div className={className}>{LabelContent[state]?.label}</div>
}

export const LabelContent = {
  [State.INUSE]: {
    label: '사용중',
    className: 'bg-beige text-dark-brown',
  },
  [State.EXHAUSTED]: {
    label: '소진',
    className: 'bg-light-brown text-ivory',
  },
  [State.STOP]: {
    label: '사용중지',
    className: 'bg-dark-brown text-ivory',
  },
}
