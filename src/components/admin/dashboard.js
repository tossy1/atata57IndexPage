import React from 'react'
import { Tab } from 'semantic-ui-react'
import "./dashboard.css"
import { Loader, Paragraph } from 'rsuite';

const panes = [
  {
    menuItem: 'Main', render: () => <Tab.Pane>
      <Paragraph rows={8}>
        <Loader size="md" center content="loading" />
      </Paragraph>
  </Tab.Pane> },
  { menuItem: 'Blog', render: () => <Tab.Pane></Tab.Pane> },
  { menuItem: 'Placeholder', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

function Dashboard() {
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='left'
      panes={panes}
    />
  )

};

export default Dashboard;