/*import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';

import { Header } from '../components';
const Kanban = () => (
  <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
    <Header category="App" title="Kanban" />
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
    >
      <ColumnsDirective>
        {kanbanGrid.map((item,index)=><ColumnDirective key={index}{...item}/>)}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;
*/
import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => (
  <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
    <Header category="App" title="Kanban" />
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
    >
      <ColumnsDirective>
        {kanbanGrid.map((item, index) => (
          <ColumnDirective
            key={index}
            headerText={item.headerText}
            keyField={item.keyField}
            isExpanded={item.isExpanded}
            allowToggle={item.allowToggle}
          />
        ))}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;