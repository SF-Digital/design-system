interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table
      style={{
        width: '100%',
        fontFamily: 'sans-serif',
        color: 'white',
        borderCollapse: 'collapse',
      }}
    >
      <thead>
        <tr>
          <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Name</th>
          <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Value</th>
          {hasRemValue && (
            <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>
              Pixels
            </th>
          )}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value], index) => {
          const isEven = index % 2 === 0

          return (
            <tr key={key} style={{ backgroundColor: isEven ? '#444' : '' }}>
              <td
                style={{
                  padding: '0.75rem 1rem',
                  color: '#ccc',
                  borderTopLeftRadius: '8px',
                  borderBottomLeftRadius: '8px',
                }}
              >
                {key}
              </td>
              <td
                style={{
                  padding: '0.75rem 1rem',
                  color: '#ccc',
                }}
              >
                {value}
              </td>
              {/** TODO: some of the values have only px but no rem, this is causing NaN in row 3 */}
              {hasRemValue && (
                <td
                  style={{
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#ccc',
                  }}
                >
                  {Number(value.replace('rem', '')) * 16}px
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
