import { PackageOpen } from 'lucide-react'

import '@sf-digital-ui/react/dist/output.css'

const HomePage = () => {
  return (
    <div
      style={{
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 1,
        alignItems: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        background: 'linear-gradient(to bottom, #002917, #000000)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '4px',
          paddingLeft: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <PackageOpen
            style={{
              padding: '8px',
              backgroundColor: '#006237',
              borderRadius: '100%',
            }}
            size={48}
            color="#549679"
          />

          <h1
            style={{
              fontFamily: 'sans-serif',
              color: '#549679',
              fontWeight: 700,
              marginBottom: '0',
              fontSize: '48px',
            }}
          >
            SF Digital
          </h1>
        </div>
        <h3
          style={{
            fontFamily: 'sans-serif',
            color: '#e9e9e9',
          }}
        >
          Ready to use SF Design UI components
        </h3>
        <p style={{ color: '#989898' }}>
          SF Digital is an open-source React component library built using Radix
          UI primitives and TailwindCSS. Its use of pattern-composition creates
          less complexity and more flexibility.
        </p>

        <div
          style={{
            backgroundColor: '#001a0e',
            width: 'fit-content',
            paddingLeft: '14px',
            paddingRight: '14px',
            borderRadius: '30px',
            borderWidth: '1px',
            borderColor: '#006237',
          }}
        >
          <p
            style={{
              color: '#549679',
              fontSize: '16px',
              fontFamily: 'monospace',
            }}
          >
            pnpm install @sf-digital-ui/react
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
