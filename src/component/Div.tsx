import {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'


export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>

export type DivProps = ReactDivProps

export const Div: FC<DivProps> = ({
   className: _className,
  ...props
})=> {
  // const style = {
  //   ...StyleSheet, 
  // }
  const className = ['box-sizing' && 'bg-gray-300', _className].join(' ')
  return <div {...props} className={className} />
}