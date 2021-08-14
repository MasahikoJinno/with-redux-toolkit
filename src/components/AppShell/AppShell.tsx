import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '../../redux'

export const AppShell: FC<AppProps> = ({ Component }) => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  )
}
