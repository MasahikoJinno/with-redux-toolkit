import { FC } from 'react'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import '../../styles/globals.css'
import {} from '../redux'

const DynamicAppShell = dynamic<AppProps>(
  () => import('../components/AppShell').then(mod => mod.AppShell),
  { ssr: false }
)

const App: FC<AppProps> = props => <DynamicAppShell {...props} />
export default App
