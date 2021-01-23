import React, { FC } from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'
import PageA from './components/pages/PageA'
import PageB from './components/pages/PageB'
import PageC from './components/pages/PageC'

const RouterComponent: FC = () => (
  <Router>
    <Stack key="root">
      <Scene key="pageA" initial component={PageA} title="pageA" />
      <Scene key="pageB" component={PageB} title="pageB" />
      <Scene key="pageC" component={PageC} title="pageC" />
    </Stack>
  </Router>
)

export default RouterComponent
