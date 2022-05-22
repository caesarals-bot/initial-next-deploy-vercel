import { PropsWithChildren } from "react"

type Props = {}

export const DarkLayout: React.FC<PropsWithChildren<Props>>  = ({ children }) => {
  return (
      <div style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          padding: '10px',
          borderRadius: '5px'
      }}>
          <h3>Dark layout</h3>
          {children}
      </div>
  )
}
