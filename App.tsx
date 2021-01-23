import React, { FC } from 'react'
import RouterComponent from './Router'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

const App: FC = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <RouterComponent />
    </ApplicationProvider>
  </React.Fragment>
)

export default App
